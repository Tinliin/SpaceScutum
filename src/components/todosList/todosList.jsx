
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function ToDosList ({list, currentPage}) {
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
        </ListGroupItem>
      ))}
    </ListGroup>
)
}

export default ToDosList