import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cabecalho from "./componentes/layout/cabecalho.componente";
import PaginaDetalhe from "./paginas/Detalhe.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaInicio from "./paginas/Inicio.pagina";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Routes>
        <Route
          path="/"
          // element={
          //   <Navigate to={`personagens/1`} replace />
          // }
          element={<PaginaInicio />}
        />
        {/* <PaginaInicio />*/}
        {/* <Route path={`personagens/:pageNumber`} element={<PaginaInicio />} /> */}
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalhe" element={<PaginaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;
