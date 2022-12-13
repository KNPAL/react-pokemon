import "./PokemonList.scss";
import Card from "../components/UI/Card";
import useHttp from "../hooks/use-http";
import Pagination from "./UI/Pagination";
import { useEffect, useState } from "react";

function PokemonList() {
  const { isLoading, error, sendRequest: fetch1 } = useHttp();
  const [pokemonList, setPokemonlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const onPaginationClick = (results) => {
    const tempPokemonList = [];
    results.forEach((element) => {
      gethttp(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
        .then(list => {
          tempPokemonList.push(list);
          setPokemonlist(tempPokemonList);
        })
    });
  }

  const gethttp = async (url) => {
    try {
      const response = await fetch(url);
      const retData = await response.json()
      return retData;
    } catch (error) {
      return [];
    }
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

  const handlePaginationClick = (page, currentPage) => {
    
    if (page > currentPage) {
      getPokemon(nextPage)
    } else if (page < currentPage) {
      getPokemon(previousPage)
    } else {

    }
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
          handlePaginationClick(page, currentPage)
        }}
      />
    </>
  );
}

export default PokemonList;
