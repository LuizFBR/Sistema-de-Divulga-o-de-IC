import { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";

import Header from "../../components/Header";
import CardIc from "../../components/CardIc";
import DetailedCard from "../../components/DetailedCard";
import { getIcs } from "../../service/api.js"

import { ExampleContainer, CardHolder } from "./styles";

const ExamplePage = () => {

  const emptyData = {};
  const [openModal, setOpenModal] = useState(false);
  const [selectedIc, setSelectedIc] = useState(emptyData);
  const [icsData, setIcsData] = useState([]);

  const handleOpenModal = (ic) => {
    setSelectedIc(ic);  
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const fetchData = async () => {
    try {
      const data = await getIcs("ics/")
      if(data) {
        setIcsData(data.data)
        console.log(icsData)
      }
       else {console.log("No data")}
    } catch (e) {
      console.log("Erro: ", e)
    }
  }

  useEffect(() => {
    fetchData()
    console.log("IcsData: ", icsData) 
  }, [])
  

  

  return (
    //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
    <ExampleContainer>
      <Header />
      <div>
        <CardHolder>
          {
          icsData?.map((ic, index) => (
            <CardIc
              data={ic}
              key={`${ic._id}.${index}`}
              showAllContent={false}
              handleClick={() => handleOpenModal(ic)}
            />
          ))}
        </CardHolder>
        <Backdrop style={{ zIndex: 100 }} open={openModal} onClick={closeModal}>
          <DetailedCard data={selectedIc} />
        </Backdrop>
      </div>
    </ExampleContainer>
  );
};
export default ExamplePage;
