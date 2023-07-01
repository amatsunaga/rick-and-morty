import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { fetchFavorites, removeAllFavoritesAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();

  const { favoritesIds, favoriteCharacters } = useAppSelector(
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
