import starEmpty from "../../assets/star-empty.svg";
import starFull from "../../assets/star-full.svg";
import "./botao-favorito.css";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 * @returns {JSX.Element}
 */

type PropTypes = {
  isFavorito: boolean;
  onClick: () => void;
};

const BotaoFavorito = ({ isFavorito, onClick }: PropTypes) => {
  const src = isFavorito ? starFull : starEmpty;

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
  );
};

export default BotaoFavorito;
