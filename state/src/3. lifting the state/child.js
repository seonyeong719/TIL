function ChildComponent({ changeBtn }) {
  const handleClick = () => {
    changeBtn();
  };
  return <button onClick={handleClick}>Change!!</button>;
}
export default ChildComponent;
