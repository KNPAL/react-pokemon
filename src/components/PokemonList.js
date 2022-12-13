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

  useEffect(() => {
    const getData = (data) => {
      let tempList = [];
      setTotalCount(data.count);
      setNextPage(data.next);
      data.results.forEach((element) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
          .then((data) => data.json())
          .then((list) => {
            tempList.push(list);
            setPokemonlist(tempList);
          });
      });
    };
    fetch1({ url: "https://pokeapi.co/api/v2/pokemon" }, getData);
  }, [fetch1]);

  const paginationData = (url) => {
    const getData = (data) => {
      let tempList = [];
      setTotalCount(data.count);
      setNextPage(data.next);
      data.results.forEach((element) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
          .then((data) => data.json())
          .then((list) => {
            tempList.push(list);
            setPokemonlist(tempList);
          });
      });
    };
    fetch1({ url }, getData);
  };

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
          paginationData(nextPage)
        }}
      />
    </>
  );
}

export default PokemonList;
