import starEmpty from "../../assets/star-empty.svg";
import starFull from "../../assets/star-full.svg";
import "./botao-favorito.css";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick }) => {
  const src = isFavorito ? starFull : starEmpty;

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
  );
};

export default BotaoFavorito;
