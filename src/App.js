import "./App.css";
import ToDosList from "./components/todosList/todosList";
import Pagination from "./components/pagination/pagination";
import ModalForm from "./components/modal/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const localTasks = localStorage.getItem("Tasks");
    if (localTasks) {
      setList(JSON.parse(localTasks));
      setIsloading(false);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setList(data);
          setIsloading(false);
          localStorage.setItem("Tasks", JSON.stringify(data));
        });
    }
  }, []);

  function CurrentPageHandler(page) {
    setCurrentPage(page);
  }

  function HiheModal (){
    setModal(false)
  }

  function AddTask(task) {
    const newTask = {
      completed: false,
      title: task,
      id: list.length+1
    };
    list.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(list));
  };

function DellTask (id) {
  const index = list.findIndex((obj)=> obj.id === id);
  const newList = list.filter((task) => task.id !== id);
  setList(newList);
  localStorage.setItem("Tasks", JSON.stringify(newList));
};

  return (
    <div className="container-xl">
      {isloading ? (
        <p>LOADING...</p>
      ) : (
        <div className="container-fluid">
          <ToDosList list={list} dellTask={DellTask} currentPage={currentPage} />
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={()=>setModal(true)}
          >
            Add task
          </button>
          <Pagination
            list={list}
            currentPage={currentPage}
            CurrentPageHandler={CurrentPageHandler}
          />
        </div>
      )}
      {modal? <ModalForm addtask={AddTask} hideModal={HiheModal}/> : <></>}
     </div>
  );
}

export default App;
