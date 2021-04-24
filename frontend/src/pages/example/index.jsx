import { useState } from "react";
import { ExampleContainer, ExampleCounterButton } from "./styles";
import Header from '../../components/Header';

const ExamplePage = () => {
  const [counter, setCounter] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);
  const counterClickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
    <ExampleContainer>
      <Header />
      <span> Você clicou {counter} vezes </span>
      {/* Mesma coisa que o example container só que com um button, aqui temos um exemplo de como passar uma prop, basta abrir o styles para entender onde usamos essa props */}
      <ExampleCounterButton
        bdColor="#d4d432"
        textColor="#000"
        onClick={counterClickHandler}
        isAdmin={isAdmin}
        disabled={!isAdmin}
      >
        Clique aqui
      </ExampleCounterButton>
    </ExampleContainer>
  );
};
export default ExamplePage;
