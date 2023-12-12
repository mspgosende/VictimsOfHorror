import { CharacterDetailContainer, CharacterListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FilmListContainer /> } /> 
        <Route path="/character/:status" element={<CharacterListContainer/> } /> 
        <Route path="/character/:id" element={<CharacterDetailContainer /> } /> 
      </Routes>
    </BrowserRouter>  
  );
};