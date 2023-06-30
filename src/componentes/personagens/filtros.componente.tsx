import { useDispatch } from "react-redux";
import { addFilterAction } from "../../redux/actions";
import { useAppSelector } from "../../redux/hooks";
import "./filtros.css";

const Filtros = () => {
  const dispatch = useDispatch();

  const { filter } = useAppSelector((store) => store.personagem);

  function setFilter(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(addFilterAction(e.target.value));
  }

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        value={filter}
        onChange={(e) => setFilter(e)}
      />
    </div>
  );
};

export default Filtros;
