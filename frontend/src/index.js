import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/scss/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexView } from './views/IndexView';
import { ReposView } from './views/ReposView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexView/>}></Route>
      <Route path="/repository" element={<ReposView/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
