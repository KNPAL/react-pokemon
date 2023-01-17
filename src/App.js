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
        <HeaderSection />
        <FilterSection />
        <Provider store={store}>
          <PokemonList />
        </Provider>
      </div>
    </>
  );
}

export default App;
