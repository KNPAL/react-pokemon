import "./FilterSection.scss";
import SearchBox from "./UI/SearchBox";
import MultipleSelectDropdown from '../components/UI/MultipleSelectDropdown';

function FilterSection() {
  const genderDataSet = [
    { name: "Male" },
    { name: "Femal" },
    { name: "Unknow" }
  ];

  const typeDataSet = [
    { name: "Normal" },
    { name: "Rock" },
    { name: " Native" },
    { name: "Fire" },
    { name: "Water" },
    { name: "Javascript" },
  ];

  return (
    <>
      <div className="row m-0 my-4">
        <div className="col-md-6 ps-0 col-sm-10">
          <SearchBox />
        </div>
        <div className="col-md-2 d-md-inline d-none">
          <label className="w-100 form-label">Type</label>
          {/* <MultipleSelectDropdown placeholder={'Please Select Type'} dataSet={typeDataSet}/> */}
          <input
            className="w-100  form-control "
            placeholder="Type"
          />
        </div>
        <div className="col-md-2 d-md-inline d-none">
          <label className="w-100 form-label">Gender</label>
          {/* <MultipleSelectDropdown placeholder={'Please Select Gender'} dataSet={genderDataSet}/> */}
          <input
            className="w-100  form-control "
            placeholder="Gender"
          />
        </div>
        <div className="col-md-2 d-none d-md-inline ">
          <label className="w-100 form-label">Stats</label>
          <input
            className="w-100  form-control "
            placeholder="Name or Number"
          />
        </div>
        <div className="d-md-none d-sm-inline border  col-sm-2"></div>
      </div>
    </>
  );
}

export default FilterSection;
