import React from "react";
import { Routes, Route } from 'react-router-dom';

import GetUsers from './routes/GetUsers';
import CreateUsers from './routes/CreateUsers';
import PatchUsers from './routes/PacthUsers';
import DeleteUsers from './routes/DeleteUsers';
import GetArticles from './routes/GetArticles';
import CreateArticles from './routes/CreateArticles';
import PatchArticles from './routes/PacthArticles';
import DeleteArticles from './routes/DeleteArticles';
import GetSubjects from './routes/GetSubjects';
import CreateSubjects from './routes/CreateSubjects';
import PatchSubjects from './routes/PacthSubjects';
import DeleteSubjects from './routes/DeleteSubject';
import GetProfessions from './routes/GetProfessions';
import CreateProfessions from './routes/CreateProfessions';
import PatchProfessions from './routes/PacthProfessions';
import DeleteProfessions from './routes/DeleteProfessions';
import '../styles/body.css';



function Body(){
    return (
      <div id="body">
        <Routes>
          <Route path="/getUsers" element={<GetUsers/>} />
          <Route path="/CreateUsers" element={<CreateUsers/>} />
          <Route path="/PatchUsers" element={<PatchUsers/>} />
          <Route path="/DeleteUsers" element={<DeleteUsers/>} />
          <Route path="/GetArticles" element={<GetArticles/>} />
          <Route path="/CreateArticles" element={<CreateArticles/>} />
          <Route path="/PatchArticles" element={<PatchArticles/>} />
          <Route path="/DeleteArticles" element={<DeleteArticles/>} />
          <Route path="/GetSubjects" element={<GetSubjects/>} />
          <Route path="/CreateSubjects" element={<CreateSubjects/>} />
          <Route path="/PatchSubjects" element={<PatchSubjects/>} />
          <Route path="/DeleteSubjects" element={<DeleteSubjects/>} />
          <Route path="/GetProfessions" element={<GetProfessions/>} />
          <Route path="/CreateProfessions" element={<CreateProfessions/>} />
          <Route path="/PatchProfessions" element={<PatchProfessions/>} />
          <Route path="/DeleteProfessions" element={<DeleteProfessions/>} />
        </Routes>
      </div>
    )
}

export default Body;