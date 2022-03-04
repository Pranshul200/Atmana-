import './Box.css';

function Box({
  name,
  setSelectedElement,
  elementClicked,
  setElementClicked,
  id,
}) {
  const handleClick = () => {
    setSelectedElement(name);
    setElementClicked(id);
  };
  return (
    <div
      className={`Box${id === elementClicked ? 'Clicked' : ''}`}
      style={{ backgroundColor: 'white' }}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

export default Box;
