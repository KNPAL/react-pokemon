
import './App.scss';
import FilterSection from './components/FilterSection';
import HeaderSection from './components/HeaderSection';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <>
      <div className='container-fluid h-100 mx-5'>
        <HeaderSection />
        <FilterSection />
        <PokemonList />
      </div>
    </>
  );
}

export default App;
