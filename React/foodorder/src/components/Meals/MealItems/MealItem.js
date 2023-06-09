import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = "$" + props.price.toFixed(2);
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.right}>
        <MealItemForm></MealItemForm>
      </div>
    </div>
  );
};

export default MealItem;
