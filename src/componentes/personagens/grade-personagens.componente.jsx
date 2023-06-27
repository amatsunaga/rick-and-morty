import CardPersonagem from "./card-personagem.componente";
import "./grade-personagem.css";

import { useState, useEffect } from "react";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ personagens }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="grade-personagens">
      {isLoading ? (
        <h2>Carregando personagens...</h2>
      ) : personagens.length > 0 ? (
        personagens.map((personagem) => (
          <CardPersonagem key={personagem.id} personagem={personagem} />
        ))
      ) : (
        <h2>Não há personagens favoritos selecionados</h2>
      )}
    </div>
  );
};

export default GradePersonagem;
