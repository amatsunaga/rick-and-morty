import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { fetchFavorites, removeAllFavoritesAction } from "../redux/actions";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useDispatch();

  const { favoritesIds, favoriteCharacters } = useSelector(
    (store) => store.personagem
  );

  function getFavorites() {
    dispatch(fetchFavorites(favoritesIds));
  }

  function removeFavorites() {
    if (
      window.confirm("Tem certeza de que deseja excluir todos os favoritos?")
    ) {
      dispatch(removeAllFavoritesAction());
    }
  }

  useEffect(() => {
    if (favoritesIds) {
      getFavorites();
    }
  }, []);

  const favoritesNotFound = "Não foram encontrados personagens favoritos";

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={() => removeFavorites()}>
          Remover todos
        </button>
      </div>
      <GradePersonagens
        personagens={favoriteCharacters}
        message={favoritesNotFound}
      />
    </div>
  );
};

export default PaginaFavoritos;
