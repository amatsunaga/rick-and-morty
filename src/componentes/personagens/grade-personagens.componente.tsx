import { useAppSelector } from "../../redux/hooks";
import { Character } from "../../redux/reducers/types";
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

type PropTypes = {
  personagens: Character[];
  message: string;
};

const GradePersonagem = ({ personagens, message }: PropTypes) => {
  const { isLoading } = useAppSelector((store) => store.personagem);

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
