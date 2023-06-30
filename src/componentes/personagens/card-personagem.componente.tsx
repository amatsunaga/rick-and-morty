import { useDispatch } from "react-redux";
import { addFavoriteAction, removeFavoriteAction } from "../../redux/actions";
import { useAppSelector } from "../../redux/hooks";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { Character } from "../../redux/reducers/types";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

type PropTypes = {
  personagem: Character;
};

const CardPersonagem = ({ personagem }: PropTypes) => {
  const dispatch = useDispatch();

  const { favoritesIds } = useAppSelector((store) => store.personagem);

  const index = favoritesIds.indexOf(personagem.id);
  let isFavorito: boolean | null = null;
  index < 0 ? (isFavorito = false) : (isFavorito = true);

  function toggleFavorite() {
    isFavorito
      ? dispatch(removeFavoriteAction(index, personagem.id))
      : dispatch(addFavoriteAction(personagem.id));
  }

  return (
    <div className="card-personagem">
      <img src={personagem?.image} alt="Rick Sanchez" />
      <div className="card-personagem-body">
        <span>{personagem?.name}</span>
        <BotaoFavorito isFavorito={isFavorito} onClick={toggleFavorite} />
      </div>
    </div>
  );
};

export default CardPersonagem;
