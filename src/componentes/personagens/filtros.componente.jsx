import { useDispatch } from "react-redux";
import {
  addFilterAction
} from "../../redux/actions";
import "./filtros.css";

const Filtros = () => {
  const dispatch = useDispatch();

  function setFilter(e) {
    dispatch(addFilterAction(e.target.value));
  }

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={(e) => setFilter(e)}
      />
    </div>
  );
};

export default Filtros;
