import './Table-01.css';
import './Table-02.css';
import './Table-03.css';
import './Table-04.css';
import './Table-05.css';

export default function Pagination(props) {
  return (
    <table className={`table ${props.variant}`}>
      <thead>
        <tr>
          <th>Столбец 1</th>
          <th>Столбец 2</th>
          <th>Столбец 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Строка 1, Ячейка 1</td>
          <td>Строка 1, Ячейка 2</td>
          <td>Строка 1, Ячейка 3</td>
        </tr>
        <tr>
          <td>Строка 2, Ячейка 1</td>
          <td>Строка 2, Ячейка 2</td>
          <td>Строка 2, Ячейка 3</td>
        </tr>
      </tbody>
    </table>
  );
}
