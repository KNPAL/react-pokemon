import "./PokemonList.scss";
import '../components/UI/Card'
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";


function PokemonList() {
  const { isLoading, error, sendRequest: fetch } = useHttp();
  const [pokemonList, setPokemonlist] = useState([]);
  useEffect(() => {
    const getData = (data) => {
      setPokemonlist(data.results);
    };

    fetch({ url: "https://pokeapi.co/api/v2/pokemon" }, getData);
  }, [fetch]);
  return (
    <>
      {!isLoading && (
        <div className="row m-0 py-3">
          {pokemonList?.map((props) => (
            <div className="col-md-2 col-6 p-3">
                
{/*                 
              <Card pokemon={props} /> */}
            </div>
          ))}
        </div>
      )}
      {!error && isLoading && <p>Loading...</p>}
    </>
  );
}

export default PokemonList;
