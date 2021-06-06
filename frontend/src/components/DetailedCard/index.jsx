import React from "react";

import { formatMoney } from "../../utils/IC";

import {
  Card,
  DataList,
  Item,
  ItemText,
  ItemTextValue,
  Column,
} from "../CardBaseStyles/styles";

function CardIc({ data }) {
  const styles = {
    backgroundColor: "#fff",
    borderRadius: "0.7em",
    fontSize: "1rem",
    color: "#363636",
    padding: "1em",
    textAlign: "center",
  };

  return (
    <Card style={styles}>
      <DataList>
        <Item>
          <ItemText>Nome:</ItemText>
          <ItemTextValue>{data.name}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Descrição:</ItemText>
          <ItemTextValue>{data.description}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Matéria:</ItemText>
          <ItemTextValue>{data.subject}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Orientador:</ItemText>
          <ItemTextValue>{data?.advisor?.name}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Contato:</ItemText>
          <ItemTextValue>{data?.advisor?.email}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Site:</ItemText>
          <ItemTextValue>{data?.advisor?.site}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Departamento:</ItemText>
          <ItemTextValue>{data?.advisor?.department}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Data Limite:</ItemText>
          <ItemTextValue>{data?.endDate}</ItemTextValue>
        </Item>
        {data.hasScholarship && (
          <Item>
            <ItemText>Bolsa</ItemText>{" "}
            <ItemTextValue>
              {formatMoney(data.scholarship_amount)}
            </ItemTextValue>
          </Item>
        )}
        <Item>
          <ItemText>Carga horária:</ItemText>
          <ItemTextValue>{data.workload}</ItemTextValue>
        </Item>
        <Item>
          <ItemText>Requisitos:</ItemText>
          <Column>
            {data?.requirements?.map((req) => (
              <ItemTextValue>{req}</ItemTextValue>
            ))}
          </Column>
        </Item>
      </DataList>
    </Card>
  );
}

export default CardIc;
