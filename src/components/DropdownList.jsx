import DropdownItem from "./DropdownItem.jsx";
import {useState} from "react";
import {item} from "../data.js";
const DropdownList = () => {
  const [active, setActive] = useState('#666')
  function clickHandler (key) {
    setActive(key)
  }
  return (
  <ul className="dropdown">
    {item.map((item) => <DropdownItem
      style={{color: `${active === item.id ? '#5380F7' : '#666'}`}}
      onClick={(key) => clickHandler(item.id)}
      key={item.id} href={item.href}
      text={item.text}
    />)}
  </ul>
  )
};

export default DropdownList;