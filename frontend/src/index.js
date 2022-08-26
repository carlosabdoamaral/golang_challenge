import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/scss/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AvenueReposView } from './views/AvenueReposView';
import { AvenueHomeView} from './views/AvenueHomeView';

import { ChallengeHomeView } from './views/ChallengeHomeView';
import { ChallengeInfosView } from './views/ChallengeInfosView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AvenueHomeView/>}/>
      <Route path="/avenue/repository" element={<AvenueReposView/>}/>
      <Route path="/challenge/pannel" element={<ChallengeHomeView/>}/>
      <Route path="/challenge/about" element={<ChallengeInfosView/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
