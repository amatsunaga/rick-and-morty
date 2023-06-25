import { useDispatch } from "react-redux";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { addFavoriteAction, removeFavoriteAction } from "../../redux/actions";
import { useSelector } from "react-redux";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ personagem }) => {
  const dispatch = useDispatch();

  const { favoritos } = useSelector((store) => store.personagem);

  const index = favoritos.indexOf(personagem);
  let isFavorito = null;
  index < 0 ? (isFavorito = false) : (isFavorito = true);

  function toggleFavorite() {
    isFavorito
      ? dispatch(removeFavoriteAction(index))
      : dispatch(addFavoriteAction(personagem));
  }

  return (
    <div className="card-personagem">
      <img src={personagem?.image} alt="Rick Sanchez" />
      <div className="card-personagem-body">
        <span>{personagem?.name}</span>
        <BotaoFavorito
          isFavorito={isFavorito}
          onClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default CardPersonagem;
