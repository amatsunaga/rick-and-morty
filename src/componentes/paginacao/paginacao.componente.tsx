import { fetchCharacters, setCurrentPageAction } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 * @returns {JSX.Element}
 */
const Paginacao = () => {
  const dispatch = useAppDispatch();

  const { currentPage, pagesTotal } = useAppSelector(
    (store) => store.personagem
  );

  function goToPreviousPage() {
    if (currentPage > 1) {
      dispatch(fetchCharacters(currentPage - 1));
      dispatch(setCurrentPageAction(currentPage - 1));
    }
  }

  function goToNextPage() {
    if (currentPage < pagesTotal) {
      dispatch(fetchCharacters(currentPage + 1));
      dispatch(setCurrentPageAction(currentPage + 1));
    }
  }

  return (
    <div className="paginacao">
      <button
        disabled={currentPage === 1 ? true : false}
        className={"primary"}
        onClick={() => goToPreviousPage()}
      >
        Anterior
      </button>
      <button
        disabled={currentPage === pagesTotal ? true : false}
        className={"primary"}
        onClick={() => goToNextPage()}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
