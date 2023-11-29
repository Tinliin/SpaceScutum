import "./App.css";
import ToDosList from "./components/todosList/todosList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setIsloading(true);
      });
  }, []);

  if (isloading === false) {
    return <p>LOADING...</p>;
  }
  return <ToDosList list={list} />;
}

export default App;
