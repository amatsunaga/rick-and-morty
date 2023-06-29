import { useSelector } from "react-redux";
import CardPersonagem from "./card-personagem.componente";
import "./grade-personagem.css";


/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ personagens, message }) => {
  const { isLoading } = useSelector((store) => store.personagem);

  return (
    <div className="grade-personagens">
      {isLoading ? (
        <h2>Carregando personagens...</h2>
      ) : personagens.length > 0 ? (
        personagens.map((personagem) => (
          <CardPersonagem key={personagem.id} personagem={personagem} />
        ))
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
};

export default GradePersonagem;
