import { useEffect } from "react";
import { useSelector } from "react-redux";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  fetchCharacters,
  fetchFiltered,
  removeFilterAction,
} from "../redux/actions";
import { RootState } from "../redux/store";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  // console.log(JSON.parse(localStorage.getItem("favoritos")));

  const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch();

  const {
    characters,
    filters,
    page
  } = useSelector((store: RootState) => store.personagem);

  // console.log(filters.byName );

  function filterCharacters() {
    dispatch(fetchFiltered(filters.byName));
  }

  function getCharacters() {
    dispatch(fetchCharacters(page.current));
    // dispatch(fetchCharacters(1));
  }

  function clearFilters() {
    dispatch(removeFilterAction());
  }

  useEffect(() => {
    if (filters.byName) {
      filterCharacters();
    } else {
      getCharacters();
    }
  }, [filters]);

  // Apenas console - APAGAR
  // useEffect(() => {
  //   console.log("getCharacters():", getCharacters());
  // }, []);

  const filterNotFound =
    "Não foram encontrados personagens com os filtros selecionados";

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger" onClick={() => clearFilters()}>
          Limpar Filtros
        </button>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens personagens={characters} message={filterNotFound} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
