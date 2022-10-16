
import './App.scss';
import FilterSection from './components/FilterSection';
import HeaderSection from './components/HeaderSection';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <>
      <div className='container'>
        <HeaderSection />
        <FilterSection />
        <PokemonList />
      </div>
    </>
  );
}

export default App;
