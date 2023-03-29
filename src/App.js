import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainPage from './Pages/MainPage';
import TodoLIst from './Pages/TodoLIst';
import Start from './Pages/Start';

const App = () => {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/study' element={<MainPage/>}/>
        <Route path='/todoList' element={<TodoLIst/>}/>
        <Route path='/' element={<Start/>}/>
      </Routes>
    </>
  );
}

export default App;
