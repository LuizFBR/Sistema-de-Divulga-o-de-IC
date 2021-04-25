import { useState } from "react";
import { ExampleContainer, ExampleCounterButton , CardHolder} from "./styles";
import Header from '../../components/Header';
import CardIc from '../../components/CardIc';
import mockData from '../../mock.data.json';


const ExamplePage = () => {
  const [counter, setCounter] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);

  const counterClickHandler = () => {
    setCounter(counter + 1);
  };

  console.log(mockData[0].index);

  return (
    //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
    <ExampleContainer>
      <Header />
          <div>
            <CardHolder>
              {mockData.map(ic => (<CardIc data={ic} key={ic._id} />))}
            </CardHolder>
          </div>
    </ExampleContainer>
  );
};
export default ExamplePage;
