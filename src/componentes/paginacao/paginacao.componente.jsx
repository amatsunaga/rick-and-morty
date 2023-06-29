import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, setCurrentPageAction } from "../../redux/actions";
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
  const dispatch = useDispatch();

  const { page } = useSelector((store) => store.personagem);

  function goToPreviousPage() {
    console.log(page.current);

    if (page.current > 1) {
      dispatch(fetchCharacters(page.current - 1));
      dispatch(setCurrentPageAction(page.current - 1));
    }

    // Corrigir paginação com filtro
    // if (filters.byName) {
    //   dispatch(removeFilterAction());
    // }
  }

  function goToNextPage() {
    console.log(page.current);
    console.log(page.total);

    if (page.current < page.total) {
      dispatch(fetchCharacters(page.current + 1));
      dispatch(setCurrentPageAction(page.current + 1));
    }

    // Corrigir paginação com filtro
    // if (filters.byName) {
    //   dispatch(fetchFiltered(filters.byName));
    // }
  }

  return (
    <div className="paginacao">
      <button
        disabled={page.current === 1 ? true : false}
        className={"primary"}
        onClick={() => goToPreviousPage()}
      >
        Anterior
      </button>
      <button
        disabled={page.current === page.total ? true : false}
        className={"primary"}
        onClick={() => goToNextPage()}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
