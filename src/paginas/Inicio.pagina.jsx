import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters, fetchFiltered } from "../redux/actions";
import { useEffect } from "react";

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

  const { characters, filters } = useSelector((store) => store.personagem);

  function filterCharacters() {
    dispatch(fetchFiltered(filters.byName));
  }

  function getCharacters() {
    dispatch(fetchCharacters());
  }

  useEffect(() => {
    if (filters) {
      filterCharacters();
    } else {
      getCharacters();
    }
  }, [filters]);

  const filterNotFound = "Não foram encontrados personagens com os filtros selecionados"

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens personagens={characters} message={filterNotFound} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
