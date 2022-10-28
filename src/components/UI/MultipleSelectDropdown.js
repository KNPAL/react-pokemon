import "./MultipleSelectDropdown.scss";
import { useState, useEffect } from "react";

function MultipleSelectDropdown(props) {
  const [selectedValue, setSelectedValue] = useState([]);
  const [drpDataSet, setDrpDataSet] = useState([]);
  const [drpPlaceholder, setPlaceholder] = useState("");

  const onSelectHandler = () => {
    const selectbtn = document.querySelector(".select-btn");
    selectbtn.classList.toggle("open");
  };

  const onItemClickHandler = (event) => {
    const item = event.target;
    handler(item);
  };

  const handler = (item) => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnTex = document.querySelector(".btn-text");

    setSelectedValue(checked);

    if (selectedValue && checked.length > 0) {
      const firstCheckedValue =
        checked[0].querySelector(".item-text").innerHTML;
      if (checked.length > 1) {
        const selectText = firstCheckedValue + ` + ${checked.length - 1} More`;
        btnTex.innerHTML = selectText;
      } else {
        btnTex.innerHTML = firstCheckedValue;
      }
    } else {
      btnTex.innerHTML = drpPlaceholder;
    }
  };

  const onCancelClick = () => {
    selectedValue.forEach((element) => {
      element.classList.remove("checked");
    });
    setSelectedValue([]);
    setPlaceholder(props.placeholder);
  };

  const onApplyClick = () => {
    console.log(selectedValue);
    onSelectHandler();
  };

  const onItemChildClickHandler = (event) => {
    handler(event.target.parentElement);
  };

  useEffect(() => {
    setDrpDataSet(props.dataSet);
    setPlaceholder(props.placeholder);
  }, [props]);

  return (
    <>
      <div onClick={onSelectHandler} className="select-btn">
        <span className="btn-text">{drpPlaceholder}</span>
        <span className="arrow-dwn">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <ul className="list-items">
        {drpDataSet?.map((props) => (
          <li key={props.name} className="item" onClick={onItemClickHandler}>
            <span onClick={onItemChildClickHandler} className="checkbox">
              <i
                onClick={onItemChildClickHandler}
                className="fa-solid fa-check check-icon"
              ></i>
            </span>
            <span onClick={onItemChildClickHandler} className="item-text">
              {props.name}
            </span>
          </li>
        ))}
        <li className="item">
          <div>
            <button
              className="btn btn-outline-primary m-2"
              onClick={onCancelClick}
            >
              Cancel
            </button>
            <button
              className="btn btn-outline-primary m-2"
              onClick={onApplyClick}
            >
              Apply
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}

export default MultipleSelectDropdown;
