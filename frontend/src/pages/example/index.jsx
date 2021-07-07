import { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";

import Header from "../../components/Header";
import CardIc from "../../components/CardIc";
import DetailedCard from "../../components/DetailedCard";
import mockData from "../../mock.data.json";
import axios from "axios"
import { getIcs } from "../../service/api.js"

import { ExampleContainer, CardHolder } from "./styles";

const ExamplePage = () => {

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await getIcs()
      if(data) {
        setIcData(data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const emptyData = {};
  const [openModal, setOpenModal] = useState(false);
  const [icData, setIcData] = useState(emptyData);

  const handleOpenModal = (ic) => {
    setIcData(ic);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
    <ExampleContainer>
      <Header />
      <div>
        <CardHolder>
          {mockData.map((ic, index) => (
            <CardIc
              data={ic}
              key={`${ic._id}.${index}`}
              showAllContent={false}
              handleClick={() => handleOpenModal(ic)}
            />
          ))}
        </CardHolder>
        <Backdrop style={{ zIndex: 100 }} open={openModal} onClick={closeModal}>
          <DetailedCard data={icData} />
        </Backdrop>
      </div>
    </ExampleContainer>
  );
};
export default ExamplePage;
