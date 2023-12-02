import { Nav, NavLink } from "react-bootstrap";

function Pagination ({list, currentPage, CurrentPageHandler}){
let numberOfPages = Math.floor(list.length/10);
if (list%10!==0) {
    numberOfPages++;
};
const arrayOfNumbers = [];
for (let i = 1; i < numberOfPages; i++) {
    arrayOfNumbers.push(i);
};
console.log(list[3]);

return (
    <Nav>
    {arrayOfNumbers.map((num) => (
      <NavLink
        key={num}
        href="#"
        onClick={() => CurrentPageHandler(num)}
        className={
          num === currentPage
            ? "page-item active"
            : "page-item"
        }
      > {num}
      </NavLink>
    ))}
    <NavLink>of {numberOfPages} Pages</NavLink>
  </Nav>
)

}

export default Pagination