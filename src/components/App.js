import React from 'react';
import SideBar from './SideBar';
import Footer from './Footer';
import TopBar from './TopBar';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import LastMovieInDb from './LastMovieInDb';
import GenresInDB from './GenresInDb'
import NotFound from './NotFound';
import SearchMovies from './SearchMovies';
import { Routes, Route } from 'react-router-dom';

/* import GenresInDb from './GenresInDb' */

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <div className='content'>
            <TopBar />
            <ContentRowMovies />
            {/* Inicio de campo de muestra */}
            <div className='center'>
              <Routes>
                <Route path='/lastmovie' element={<LastMovieInDb/>}/>
                <Route path='/genres' element={<GenresInDB/>}/>
                <Route path='/content' element={<Chart/>}/>
                <Route path='/search' element={<SearchMovies/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </div>
            {/* Fin de campo de muestra */}
            <Footer />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
