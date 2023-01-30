import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Blogs } from './pages/Blogs';


function App() {
  
  
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path={'/'} element={<Navigate to={'blogs'}/>}/>
            <Route path={'/blogs'} element={<Blogs />}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
