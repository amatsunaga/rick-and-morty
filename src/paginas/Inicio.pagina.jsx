import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import {
  fetchCharacters,
  fetchFiltered,
  removeFilterAction,
} from "../redux/actions";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const dispatch = useDispatch();

  const { characters, filters, page } = useSelector(
    (store) => store.personagem
  );

  function filterCharacters() {
    dispatch(fetchFiltered(filters.byName));
  }

  function getCharacters() {
    dispatch(fetchCharacters(page.current));
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
