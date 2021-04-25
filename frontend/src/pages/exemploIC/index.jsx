import React from 'react'
import { useState } from "react";
import { ExampleContainer , ConteinerProfIC, ConteinerInfo} from "./styles";
import Header from '../../components/Header';
import mockData from '../../mock.data.json';


const PageIC = () => {
    const [counter, setCounter] = useState(0);
    const [isAdmin, setIsAdmin] = useState(true);

    const counterClickHandler = () => {
        setCounter(counter + 1);
    };

    return (
      //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
      <ExampleContainer>
        <Header />
            <div>
              <section nameClass="Imagem"></section>
              <div><h1>{mockData[1].title}</h1></div>
              <ConteinerProfIC>
                <div>
                  <ConteinerInfo>
                    <h2>Descricao: </h2>
                    <p>{mockData[1].about}</p>
                      <h2>Caracteristicas gerais: </h2>
                      <ul>
                        <li>Prazo: </li>
                        <li>Bolsa: </li>
                        <li>Area: </li>
                      </ul>
                    </ConteinerInfo>
                  </div>
                <div>
                  <div>
                    <h2>Progessor: </h2>
                    <h3>{mockData[1].name.first} {mockData[1].name.last}</h3>
                    <ul>
                      <li>Departamento: </li>
                      <li>Email: {mockData[1].email}</li>
                      <li>Celular: {mockData[1].phone}</li>
                    </ul>
                    <p>Descricao geral do professor</p>
                  </div>
                </div>
              </ConteinerProfIC>
            </div>
      </ExampleContainer>
    );
  };
  export default PageIC;