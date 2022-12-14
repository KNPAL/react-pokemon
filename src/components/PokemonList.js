import "./PokemonList.scss";
import Card from "../components/UI/Card";
import Pagination from "./UI/Pagination";
import { useEffect, useState } from "react";

function PokemonList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const onPaginationClick = (results) => {
    const tempPokemonList = [];
    results.forEach((element) => {
      const pokemonDetail = gethttp(`https://pokeapi.co/api/v2/pokemon/${element.name}`);
      tempPokemonList.push(pokemonDetail);
    });

    Promise.all(tempPokemonList).then(values => {
      setPokemonlist(values);
    })
  }

  const gethttp = async (url) => {
    setIsLoading(true);
    setError(null);
    let returnDataSet = [];
    try {
      const response = await fetch(url);
      const retData = await response.json()
      returnDataSet = retData;
    } catch (error) {
      setError(error.message || "Something went wrong");
      returnDataSet = [];
    }
    setIsLoading(false);
    return returnDataSet;
  }

  const getPokemon = (url) => {
    gethttp(url)
      .then(list => {
        setTotalCount(list.count)
        setNextPage(list.next)
        setPreviousPage(list.previous)
        onPaginationClick(list.results)
      })
  }

  const handlePaginationClick = (page, totalCount) => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${page*20}&limit=20`)
  }

  useEffect(() => {
    getPokemon("https://pokeapi.co/api/v2/pokemon")
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="row m-0 py-3">
          {pokemonList?.map((props) => (
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
          handlePaginationClick(page, totalCount)
        }}
      />
    </>
  );
}

export default PokemonList;
