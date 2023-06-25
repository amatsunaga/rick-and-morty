import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/actions";
import CardPersonagem from "./card-personagem.componente";
import "./grade-personagem.css";
import { useEffect } from "react";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {
  const dispatch = useDispatch();

  const { personagens } = useSelector((store) => store.personagem);

  function getCharacters() {
    dispatch(fetchCharacters());
  }

  useEffect(() => getCharacters(), []);

  console.log("GradePersonagem:", personagens);

  return (
    <div className="grade-personagens">
      {personagens.map((personagem) => (
        <CardPersonagem key={personagem.id} personagem={personagem} />
      ))}
      <CardPersonagem />
      <CardPersonagem />
      <CardPersonagem />
    </div>
  );
};

export default GradePersonagem;
