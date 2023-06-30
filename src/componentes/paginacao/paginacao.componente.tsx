import { fetchCharacters, setCurrentPageAction } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  const dispatch = useAppDispatch();

  const { currentPage, pagesTotal } = useAppSelector(
    (store) => store.personagem
  );

  function goToPreviousPage() {
    console.log(currentPage);

    if (currentPage > 1) {
      dispatch(fetchCharacters(currentPage - 1));
      dispatch(setCurrentPageAction(currentPage - 1));
    }

    // Corrigir paginação com filtro
    // if (filters.byName) {
    //   dispatch(removeFilterAction());
    // }
  }

  function goToNextPage() {
    console.log(currentPage);
    console.log(pagesTotal);

    if (currentPage < pagesTotal) {
      dispatch(fetchCharacters(currentPage + 1));
      dispatch(setCurrentPageAction(currentPage + 1));
    }

    // Corrigir paginação com filtro
    // if (filters.byName) {
    //   dispatch(fetchFiltered(filters.byName));
    // }
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
