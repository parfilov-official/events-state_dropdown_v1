import DropdownList from "./DropdownList.jsx";
import {useState} from "react";

const Dropdown = () => {
  const [active, setActive] = useState(false)
  function clickHandler () {
    setActive(!active)
  }
  return (
    <div className="dropdown-wrapper open">
      <button onClick={clickHandler} className="btn">
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {active && <DropdownList/>}
    </div>
  )
};

export default Dropdown;