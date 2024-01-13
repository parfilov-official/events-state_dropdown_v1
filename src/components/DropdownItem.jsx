const DropdownItem = (props) => {
  const {style, onClick, id, href, text} = props
  return (
    <li style={style} onClick={onClick} key={id}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default DropdownItem;