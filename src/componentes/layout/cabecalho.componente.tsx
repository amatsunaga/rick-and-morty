import { Link } from "react-router-dom";
import "./cabecalho.css";
import { useDispatch } from "react-redux";
import { removeFilterAction } from "../../redux/actions";

/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */
const Cabecalho = () => {
  const dispatch = useDispatch();

  function clearFilters() {
    dispatch(removeFilterAction());
  }

  return (
    <header>
      <div>
        <div>
          <h2>Exame Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => clearFilters()}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe">Detalhe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
