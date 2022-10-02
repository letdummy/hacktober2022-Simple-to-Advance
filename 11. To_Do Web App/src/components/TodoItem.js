import React, { useState } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [deleteIconShow, setDeleteIconShow] = useState(false);
  const [prevTodoValue, setPrevTodoValue] = useState("");
  const [editModeIsOn, setEditModeIsOn] = useState(false);

  const deleteHandler = (event) => {
    props.setTodoList((prevState) => {
      const arr = prevState.filter((item) => {
        if (item.id === Number(event.target.id)) {
          if (!item.completed) {
            props.setItemLeftCount(props.itemLeftCount - 1);
          }
        }
        return item.id !== Number(event.target.id);
      });
      return arr;
    });
  };

  const onDoubleClickHandler = (event) => {
    setPrevTodoValue(event.target.value); //For Esc button
    setEditModeIsOn(true);
  };

  const inputBlurHandler = (event) => {
    setEditModeIsOn(false);

    if (event.target.value === "") {
      deleteHandler(event);
    }
  };

  const keyPressHandler = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      setEditModeIsOn(false);

      if(event.target.value === ''){
        deleteHandler(event);
      }
    }

    if (editModeIsOn) {
      if (event.key === "Escape") {
        props.setTodoList((prevState) => {
          const arr = prevState.map((todo) => {
            if (todo.id === Number(event.target.id)) {
              return { ...todo, textValue: prevTodoValue };
            } else {
              return { ...todo };
            }
          });

          return arr;
        });
      }
    }
  };

  const handleOnChange = (event) => {
    if (editModeIsOn) {
      props.setTodoList((prevState) => {
        const arr = prevState.map((todo) => {
          if (todo.id === Number(event.target.id)) {
            return { ...todo, textValue: event.target.value };
          } else {
            return { ...todo };
          }
        });
        return arr;
      });
    }
  };

  const MouseEnterHandler = () => {
    setDeleteIconShow(true);
  };

  const MouseLeaveHandler = () => {
    setDeleteIconShow(false);
  };

  return (
    <div
      style={{ display: "flex" }}
      className={classes.round}
      onMouseEnter={MouseEnterHandler}
      onMouseLeave={MouseLeaveHandler}
    >
      <input
        className={classes.checkbox}
        checked={props.checked}
        onClick={props.onClick}
        id={props.id}
        type="checkbox"
      ></input>
      <label htmlFor={props.id}></label>

      {!props.completed && (
        <input
          className={classes.todoList}
          onChange={handleOnChange}
          onDoubleClick={onDoubleClickHandler}
          onKeyUp={keyPressHandler}
          onBlur={inputBlurHandler}
          id={props.id}
          style={
            editModeIsOn
              ? { caretColor: "auto", backgroundColor: "#F5F5F5" }
              : { caretColor: "transparent" }
          }
          type="text"
          value={props.value}
        ></input>
      )}
      {props.completed && (
        <input
          className={classes.todoList}
          onChange={handleOnChange}
          onDoubleClick={onDoubleClickHandler}
          onKeyUp={keyPressHandler}
          onBlur={inputBlurHandler}
          id={props.id}
          style={
            editModeIsOn
              ? { caretColor: "auto", backgroundColor: "#F5F5F5" }
              : {
                  caretColor: "transparent",
                  textDecoration: "line-through",
                  color: "#ccc",
                }
          }
          type="text"
          value={props.value}
        ></input>
      )}
      {deleteIconShow && !editModeIsOn && (
        <i className={classes.delete} id={props.id} onClick={deleteHandler}>
          x
        </i>
      )}
    </div>
  );
};

export default TodoItem;
