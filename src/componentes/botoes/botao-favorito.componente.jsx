import "./botao-favorito.css";
import starFull from "../../assets/star-full.svg";
import starEmpty from "../../assets/star-empty.svg";

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
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
