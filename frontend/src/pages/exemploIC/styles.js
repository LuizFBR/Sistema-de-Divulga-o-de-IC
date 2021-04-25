import styled from "styled-components";

export const ExampleContainer = styled.div`
  
`;
// Os Styles são constantes exportadas que chamam a lib do styled components, gerando um elemento no dom de acordo com que é passado após styled.
export const ExampleCounterButton = styled.button`
  padding: 20px 40px;
  margin: 25px;
  /*  Para pegar a props basta usar template string e chamar uma arrow func que recebe props (vindas no index.js) e utiliza a props */
  background-color: ${(props) => props.bdColor};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
`;

export const LoginContainer= styled.div`
`;


export const ConteinerProfIC = styled.div`
  display: flex;
`;

export const ConteinerInfo = styled.div`
  color: 'red';
  align: center;
`;