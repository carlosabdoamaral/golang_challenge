import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/scss/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ReposView } from './views/ReposView';
import { HomeView} from './views/HomeView';

import { ChallengeView } from './views/ChallengeView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView/>}/>
      <Route path="/repository" element={<ReposView/>}/>
      <Route path="/challenge" element={<ChallengeView/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
