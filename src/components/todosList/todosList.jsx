
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function ToDosList ({list}) {
    console.log(list);
return (
    <ListGroup>
      {list.map((task) => (
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