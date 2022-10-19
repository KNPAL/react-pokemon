import "./FilterSection.scss";
import SearchBox from "./UI/SearchBox";

function FilterSection() {
  return (
    <>
      <div className="row m-0 my-4">
        <div className="col-md-6 ps-0 col-sm-10">
          <SearchBox />
        </div>
        <div className="col-md-2 d-md-inline d-none">
          <label className="w-100 form-label">Type</label>
          <input
            className="w-100  form-control "
            placeholder="Name or Number"
          />
        </div>
        <div className="col-md-2 d-md-inline d-none">
          <label className="w-100 form-label">Gender</label>
          <input
            className="w-100  form-control "
            placeholder="Name or Number"
          />
        </div>
        <div className="col-md-2 d-none d-md-inline ">
          <label className="w-100 form-label">Stats</label>
          <input
            className="w-100  form-control "
            placeholder="Name or Number"
          />
        </div>
        <div className="d-md-none d-sm-inline border  col-sm-2">
          
        </div>
      </div>
    </>
  );
}

export default FilterSection;
