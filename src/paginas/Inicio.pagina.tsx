import { useEffect } from "react";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import {
  fetchCharacters,
  fetchFiltered,
  removeFilterAction,
} from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();

  const { characters, filter, currentPage } = useAppSelector(
    (store: RootState) => store.personagem
  );

  function filterCharacters() {
    dispatch(fetchFiltered(filter));
  }

  function getCharacters() {
    dispatch(fetchCharacters(currentPage));
  }

  function clearFilters() {
    dispatch(removeFilterAction());
  }

  useEffect(() => {
    if (filter) {
      filterCharacters();
    } else {
      getCharacters();
    }
  }, [filter]);

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
