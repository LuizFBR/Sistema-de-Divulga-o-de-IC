import { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";

import Header from "../../components/Header";
import CardIc from "../../components/CardIc";
import DetailedCard from "../../components/DetailedCard";
import { getIcs } from "../../service/api.js";

import { ExampleContainer, CardHolder } from "./styles";

const ExamplePage = () => {
  const emptyData = {};
  const [openModal, setOpenModal] = useState(false);
  const [selectedIc, setSelectedIc] = useState(emptyData);
  const [icsData, setIcsData] = useState([]);
  const [advisors, setAdvisors] = useState([]);

  const [shouldDisplaySearchResults, setShouldDisplayResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (shouldDisplayResults, results) => {
    setSearchResults(results);
    setShouldDisplayResults(shouldDisplayResults);
  };

  const handleOpenModal = (ic) => {
    setSelectedIc(ic);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const fetchDataIcs = async () => {
    try {
      const ics = await getIcs("ics/");
      if (ics) {
        setIcsData(ics.data);
      }
    } catch (e) {
      console.log("Erro: ", e);
    }
  };

  const fetchDataAdvisors = async () => {
    try {
      const advs = await getIcs("advisors/");
      if (advs) {
        setAdvisors(advs.data);
      }
    } catch (e) {
      console.log("Erro: ", e);
    }
  };

  useEffect(() => {
    fetchDataIcs();
    fetchDataAdvisors();
  }, []);

  return (
    //   Example Container é uma div definida no arquivo styles, criamos um componente para o javascript mas no dom vira uma div
    <ExampleContainer>
      <Header handleSearchResults={handleSearchResults} />
      <div>
        <CardHolder>
          {shouldDisplaySearchResults
            ? searchResults?.map((ic, index) => (
                <CardIc
                  data={[ic, advisors.find((adv) => adv.id === ic.advisor)]}
                  key={`${ic._id}.${index}`}
                  showAllContent={false}
                  handleClick={() => handleOpenModal(ic)}
                />
              ))
            : icsData?.map((ic, index) => (
                <CardIc
                  data={[ic, advisors.find((adv) => adv.id === ic.advisor)]}
                  key={`${ic._id}.${index}`}
                  showAllContent={false}
                  handleClick={() => handleOpenModal(ic)}
                />
              ))}
        </CardHolder>
        <Backdrop style={{ zIndex: 100 }} open={openModal} onClick={closeModal}>
          <DetailedCard
            data={[
              selectedIc,
              advisors.find((adv) => adv.id === selectedIc.advisor),
            ]}
          />
        </Backdrop>
      </div>
    </ExampleContainer>
  );
};
export default ExamplePage;
