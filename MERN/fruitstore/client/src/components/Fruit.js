import "./Fruit.css";

const Fruit = (props) => {
  return (
    <div className="Fruit-Container">
      <div className="name">{props.name}</div>
      <div className="img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="buttons">
        <button className="deduct" onClick={props.onDeduct}>
          Remove
        </button>
        <button className="add" onClick={props.onAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Fruit;
