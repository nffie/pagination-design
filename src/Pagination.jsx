import './Pagination.css';

export default function Pagination(props) {
  return (
    <ul className={`pagination ${props.variant}`}>
      <li className="active">
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">...</a>
      </li>
      <li>
        <a href="#">999</a>
      </li>
      <li className="next">
        <a href="#">Следующая</a>
      </li>
    </ul>
  );
}
