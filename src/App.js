import { Provider } from "react-redux";

import "./App.scss";
import FilterSection from "./components/FilterSection";
import HeaderSection from "./components/HeaderSection";
import PokemonList from "./components/PokemonList";
import store from "./store/store";

function App() {
  return (
    <>
      <div className="container-fluid h-100 px-5">
        <div className="row">
          <HeaderSection />
        </div>
        <Provider store={store}>
          <div className=" position-relative">
            <div className="row  m-0 position-absolute w-100  filter-setting">
              <FilterSection />
            </div>
          </div>

          <div className="row mt-5 pt-5">
            <PokemonList />
          </div>
        </Provider>
      </div>
    </>
  );
}

export default App;
