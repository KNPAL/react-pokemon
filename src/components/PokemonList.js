import "./PokemonList.scss";
import Card from "../components/UI/Card";
import Pagination from "./UI/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceAction } from "../store/pokemonSlice";

function PokemonList() {
  const dispatch = useDispatch();
  // const list = useSelector((state) => state.pokemon.currentIds);
  const pDetailList = useSelector((state) => state.pokemon.plist);
  const totalCount = useSelector((state) => state.pokemon.count);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onPaginationClick = (results) => {
    results.forEach((element) => {
      gethttp(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then((x) =>
        dispatch(pokemonSliceAction.addPokemon(x))
      );
    });
  };

  const gethttp = async (url) => {
    setIsLoading(true);
    setError(null);
    let returnDataSet = [];
    try {
      const response = await fetch(url);
      const retData = await response.json();
      returnDataSet = retData;
    } catch (error) {
      setError(error.message || "Something went wrong");
      returnDataSet = [];
    }
    setIsLoading(false);
    return returnDataSet;
  };

  const getPokemon = (url) => {
    gethttp(url).then((list) => {
      onPaginationClick(list.results);
      dispatch(pokemonSliceAction.updatePokemonlist(list));
    });
  };

  const handlePaginationClick = (page, totalCount) => {
    getPokemon(
      `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
    );
  };

  const renderList = (arraylist) => {
    let start = 0;
    if (currentPage > 1) {
      start = (currentPage - 1) * 20;
    }
    return arraylist.filter((x) => x.id > start && x.id <= start + 20);
  };

  useEffect(() => {
    getPokemon("https://pokeapi.co/api/v2/pokemon");
  },[]);

  return (
    <>
      {!isLoading && (
        <div className="row m-0 py-3">
          {renderList(pDetailList)?.map((props) => (
            <div key={props.name} className="col-md-2 col-6 p-3">
              <Card pokemon={props} />
            </div>
          ))}
        </div>
      )}
      {!error && isLoading && <p>Loading...</p>}
      <Pagination
        key={1}
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={20}
        onPageChange={(page) => {
          setCurrentPage(page);
          handlePaginationClick(page, totalCount);
        }}
      />
    </>
  );
}

export default PokemonList;
