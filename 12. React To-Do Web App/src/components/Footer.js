import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  const clearCompletedHandler = () => {
    props.setTodoList(prevState => {
      const arr = prevState.filter((todo) => {
        return !todo.completed;
      });

      return arr;
    });
  }

  return (
    <div className={classes.footer}>
      <div className={classes.left}>{props.itemLeftCount} item left</div>
      <div className={classes.btns}>
      <button className={classes.btn} type="button" onClick={props.onAllClick}>
        All
      </button>
      <button className={classes.btn} type="button" onClick={props.onActiveClick}>
        Active
      </button>
      <button className={classes.btn} type="button" onClick={props.onCompletedClick}>
        Completed
      </button>

      </div>
      <div>
        <i onClick={clearCompletedHandler} className={classes.clear}>Clear Completed</i>
      </div>
    </div>
  );
};

export default Footer;
