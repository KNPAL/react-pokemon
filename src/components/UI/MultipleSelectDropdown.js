import "./MultipleSelectDropdown.scss";
import { useState, useEffect } from "react";

function MultipleSelectDropdown(props) {
  const [selectedValue, setSelectedValue] = useState([]);
  const [drpDataSet, setDrpDataSet] = useState([]);
  const [drpPlaceholder, setPlaceholder] = useState("");
  const [currentDrp,setCurrentDropdown]=useState();

  const onSelectHandler = (event) => {
    const selectbtn = event.target;//document.querySelector(".selectbtn");
    setCurrentDropdown(selectbtn);
    selectbtn.classList.toggle("open");
  };

  const onItemClickHandler = (event) => {
    const item = event.target;
    handler(item);
  };

  const handler = (item) => {
    console.log(currentDrp)
    item.classList.toggle("checked");

    let checked = currentDrp.nextSibling.querySelectorAll('.checked'), // document.querySelectorAll(".checked"),
      btnTex = currentDrp.querySelector('.btnText');// document.querySelector(".btnText");

    setSelectedValue(checked);

    if (selectedValue && checked.length > 0) {
      const firstCheckedValue =
        checked[0].querySelector(".itemtext").innerHTML;
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
      <div onClick={onSelectHandler} className='selectbtn'>
        <span className='btnText'>{drpPlaceholder}</span>
        <span className='arrowdwn'>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <ul className='listitems'>
        {drpDataSet?.map((props) => (
          <li key={props.name} className='item' onClick={onItemClickHandler}>
            <span onClick={onItemChildClickHandler} className='checkbox'>
              <i
                onClick={onItemChildClickHandler}
                className="fa-solid fa-check check-icon"
              ></i>
            </span>
            <span onClick={onItemChildClickHandler} className='itemtext'>
              {props.name}
            </span>
          </li>
        ))}
        <li className='item'>
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
