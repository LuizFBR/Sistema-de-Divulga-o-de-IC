import React from "react";

import {
  Card,
  DataList,
  Item,
  ItemText,
  ItemTextValue,
} from "../CardBaseStyles/styles";

function CardIc({ data, handleClick }) {
  const styles = {
    backgroundColor: "#b3b",
    borderRadius: "0.7em",
    fontSize: "1rem",
    color: "#363636",
    padding: "1em",
    textAlign: "center",
  };

  return (
    <Card onClick={handleClick} style={styles}>
      <DataList>
        <Item>
          <ItemText>Nome:</ItemText>
          <ItemTextValue data-testid="name-value">{data.name}</ItemTextValue>
        </Item>

        <Item>
          <ItemText>Descrição:</ItemText>
          <ItemTextValue data-testid="description-value">
            {data.description}
          </ItemTextValue>
        </Item>

        <Item>
          <ItemText>Matéria:</ItemText>
          <ItemTextValue data-testid="subject-value">
            {data.subject}
          </ItemTextValue>
        </Item>

        <Item>
          <ItemText>Orientador:</ItemText>
          <ItemTextValue data-testid="advisor-value">
            {data?.advisor?.name}
          </ItemTextValue>
        </Item>

        <Item>
          <ItemText>Contato:</ItemText>
          <ItemTextValue data-testid="email-value">
            {data?.advisor?.email}
          </ItemTextValue>
        </Item>
      </DataList>
    </Card>
  );
}

export default CardIc;