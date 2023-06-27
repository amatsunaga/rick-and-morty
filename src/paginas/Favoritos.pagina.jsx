import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { fetchFavorite } from "../redux/actions";

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

  const { favoriteIds, favoriteCharacters } = useSelector(
    (store) => store.personagem
  );

  function getFavorite() {
    dispatch(fetchFavorite(favoriteIds));
  }

  useEffect(() => {
    if (favoriteIds) {
      getFavorite();
    }
  }, []);

  console.log("FavoriteIds:", favoriteIds);
  console.log("FavoriteCharacters:", favoriteCharacters);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagens personagens={favoriteCharacters} />
    </div>
  );
};

export default PaginaFavoritos;
