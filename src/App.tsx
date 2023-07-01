import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cabecalho from "./componentes/layout/cabecalho.componente";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaInicio from "./paginas/Inicio.pagina";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
      </Routes>
    </div>
  );
}

export default App;
