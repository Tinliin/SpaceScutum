
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './todos.css'

function ToDosList ({list, currentPage, dellTask, editTask}) {
return (
    <ListGroup>
      {list.slice((currentPage-1)*10, currentPage*10).map((task) => (
        <ListGroupItem key={task.id}>
          <strong>{task.title}</strong>
          {task.completed ? (
            <span> (выполнено)</span>
          ) : (
            null
          )}
          <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" defaultChecked={task.completed} />
  <label className="form-check-label" for="defaultCheck1">
    Done
  </label>
  <button type="button" class="btn btn-success" onClick={()=>editTask(task.id, task.title)} >EDIT</button>

  <button type="button" className="btn btn-danger" onClick={()=>dellTask(task.id)} >DEL</button>

</div>

        </ListGroupItem>
      ))}
    </ListGroup>
)
}

export default ToDosList