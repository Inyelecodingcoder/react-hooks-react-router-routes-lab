import React from "react";
import { BrowserRouter,Routes,Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { ReactDOM } from "react";

function App() {
  return {/*{code here}*/} (
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={NavBar}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/directors' element={<Directors/>}/>
      <Route path='/actors' element={<Actors/>}/>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
  )
  )

  }

export default App;
