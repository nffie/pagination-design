import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Pagination from './Pagination.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Вариант №1</h1>
    <Pagination variant="first" />
    <h1>Вариант №2</h1>
    <Pagination variant="second" />
    <h1>Вариант №3</h1>
    <Pagination variant="third" />
    <h1>Вариант №4</h1>
    <Pagination variant="forth" />
    <h1>Вариант №5</h1>
    <Pagination variant="fifth" />
  </StrictMode>
);
