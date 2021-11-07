import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Movie from './pages/moviedetail/moviedetail'
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home/home'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:movieId" element={<Movie />}/>
          </Routes>
        </App>
      </BrowserRouter>,
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
