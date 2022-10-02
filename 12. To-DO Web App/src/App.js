import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

const VisibilityModeValues = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOTCOMPLETED: "NOTCOMPLETED",
};

function App() {
  const [id, setId] = useState(0);
  const [VisibilityMode, setVisibilityMode] = useState(
    VisibilityModeValues.ALL
  );

  const [itemLeftCount, setItemLeftCount] = useState(0);

  const [todoText, setTodoText] = useState({
    textValue: "",
    completed: false,
    id: id,
  });

  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setTodoText((prevState) => {
      return { ...prevState, textValue: value, id: id };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value !== "") {
      setTodoList((prevState) => [...prevState, todoText]);
      setItemLeftCount(itemLeftCount + 1);
      setId(id + 1);
    }
    event.target[0].value = "";
    // console.log(todoList);
  };

  const checkBoxPressHandler = (id) => {
    setTodoList((prevState) => {
      const arr = prevState.map((item) => {
        if (item.id === Number(id)) {
          if (item.completed === false) {
            setItemLeftCount(itemLeftCount - 1);
            return { ...item, completed: true };
          } else {
            setItemLeftCount(itemLeftCount + 1);
            return { ...item, completed: false };
          }
        }

        return { ...item };
      });
      return arr;
    });
  };

  const toggleAllCompleteHandler = () => {
    let allIsCompleted = false;
    todoList.map((item) => {
      if (!item.completed) {
        setItemLeftCount(0);
        allIsCompleted = true;
      }
    });
    setTodoList((prevState) => {
      const arr = prevState.map((item) => {
        return { ...item, completed: allIsCompleted };
      });
      if (!allIsCompleted) {
        setItemLeftCount(arr.length);
      }
      return arr;
    });
  };

  return (
    <div className="centre">
      <p>todos</p>
      <form onSubmit={submitHandler}>
        <input
          className="todoInputText"
          placeholder="What needs to be done?"
          onChange={handleChange}
        ></input>
        {/* <button type="button" className="todoToggleButton" onClick={toggleAllCompleteHandler}></button> */}
        <i
          className="fas fa-angle-down fa-2x todoToggleButton"
          type="button"
          onClick={toggleAllCompleteHandler}
        ></i>

        <button hidden></button>
      </form>

      {todoList.map((item) => {
        if (VisibilityMode === VisibilityModeValues.COMPLETED) {
          if (item.completed) {
            return (
              <TodoItem
                setTodoList={setTodoList}
                completed={item.completed}
                checked={item.completed}
                onClick={() => checkBoxPressHandler(item.id)}
                id={item.id}
                key={item.id}
                value={item.textValue}
                itemLeftCount={itemLeftCount}
                setItemLeftCount={setItemLeftCount}
              />
            );
          }
        } else if (VisibilityMode === VisibilityModeValues.NOTCOMPLETED) {
          if (!item.completed) {
            return (
              <TodoItem
                setTodoList={setTodoList}
                completed={item.completed}
                checked={item.completed}
                onClick={() => checkBoxPressHandler(item.id)}
                id={item.id}
                key={item.id}
                value={item.textValue}
                itemLeftCount={itemLeftCount}
                setItemLeftCount={setItemLeftCount}
              />
            );
          }
        } else if (VisibilityMode === VisibilityModeValues.ALL || todoList) {
          return (
            <TodoItem
              setTodoList={setTodoList}
              completed={item.completed}
              checked={item.completed}
              onClick={() => checkBoxPressHandler(item.id)}
              id={item.id}
              key={item.id}
              value={item.textValue}
              itemLeftCount={itemLeftCount}
              setItemLeftCount={setItemLeftCount}
            />
          );
        }
      })}
      <Footer
        itemLeftCount={itemLeftCount}
        setTodoList={setTodoList}
        onAllClick={() => setVisibilityMode(VisibilityModeValues.ALL)}
        onActiveClick={() =>
          setVisibilityMode(VisibilityModeValues.NOTCOMPLETED)
        }
        onCompletedClick={() =>
          setVisibilityMode(VisibilityModeValues.COMPLETED)
        }
      />
    </div>
  );
}

export default App;
