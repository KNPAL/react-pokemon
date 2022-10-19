import "./HeaderSection.scss";

function HeaderSection() {
  return (
    <div className="my-4">
      <h2 className="d-inline pe-2" aria-label="Pokedex">
        Pokedex
      </h2>
      <div className="d-none d-md-inline">
        <div class="vr"></div>
      </div>
      <hr className="d-block d-md-none" />
      <label
        className="p-2"
        aria-label="Search for any Pokemon that exists on the planet"
      >
        Search for any Pokemon that exists on the planet
      </label>
    </div>
  );
}

export default HeaderSection;
