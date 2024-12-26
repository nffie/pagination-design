import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Table from './Table.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Вариант №1</h1>
    <Table variant="first" />
    <h1>Вариант №2</h1>
    <Table variant="second" />
    <h1>Вариант №3</h1>
    <Table variant="third" />
    <h1>Вариант №4</h1>
    <Table variant="forth" />
    <h1>Вариант №5</h1>
    <Table variant="fifth" />
  </StrictMode>
);
