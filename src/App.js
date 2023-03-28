import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainPage from './Pages/MainPage';
import TodoLIst from './Pages/TodoLIst';

const App = () => {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/study' element={<MainPage/>}/>
        <Route path='/todoList' element={<TodoLIst/>}/>
      </Routes>
    </>
  );
}

export default App;
