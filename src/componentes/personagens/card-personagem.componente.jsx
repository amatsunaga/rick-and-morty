import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ personagem }) => {
  return (
    <div className="card-personagem">
      <img src={personagem?.image} alt="Rick Sanchez" />
      <div className="card-personagem-body">
        <span>{personagem?.name}</span>
        <BotaoFavorito isFavorito={false} />
      </div>
    </div>
  );
};

export default CardPersonagem;
