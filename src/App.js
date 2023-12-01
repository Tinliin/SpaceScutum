import "./App.css";
import ToDosList from "./components/todosList/todosList";
import Pagination from "./components/pagination/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setIsloading(false);
      });
  }, []);

  function CurrentPageHandler (page) {
    setCurrentPage(page);
  };

  return (
    <div className="container-xl">
      {isloading ? (
        <p>LOADING...</p>
      ) : (
        <div className="container-fluid">
          <ToDosList list={list} currentPage={currentPage} />
          <Pagination list={list} currentPage={currentPage} CurrentPageHandler={CurrentPageHandler}/>
        </div>
      )}
    </div>
  );
}

export default App;
