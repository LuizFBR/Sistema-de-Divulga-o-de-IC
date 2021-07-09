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
        {data.name &&   
          (<Item>
            <ItemText>Nome:</ItemText>
            <ItemTextValue>{data.name}</ItemTextValue>
          </Item>)
        }

        {data.description &&   
          (<Item>
            <ItemText>Descricao:</ItemText>
            <ItemTextValue>{data.description}</ItemTextValue>
          </Item>)
        }

        {data.subject &&   
          (<Item>
            <ItemText>Materia:</ItemText>
            <ItemTextValue>{data.subject}</ItemTextValue>
          </Item>)
        }

        {data.advisor &&   
          (<Item>
            <ItemText>Orientador:</ItemText>
            <ItemTextValue>{data.advisor}</ItemTextValue>
          </Item>)
        }

        {data.endDate &&   
          (<Item>
            <ItemText>Data de Termino:</ItemText>
            <ItemTextValue>{data.endDate}</ItemTextValue>
          </Item>)
        }

        {data.advisor &&   
          (<Item>
            <ItemText>Orientador:</ItemText>
            <ItemTextValue>{data.advisor}</ItemTextValue>
          </Item>)
        }
        {data.requirements &&   
          (<Item>
            <ItemText>Requerimentos:</ItemText>
            <ItemTextValue>{data.requirements}</ItemTextValue>
          </Item>)
        }
        {
          (<Item>
            <ItemText>Bolsa</ItemText>
            <ItemTextValue>{data.has_scholarship?data.scholarship_amount:"Ausente"}</ItemTextValue>
          </Item>)
        }
        {data.workload &&   
          (<Item>
            <ItemText>Carga horaria semanal:</ItemText>
            <ItemTextValue>{data.workload + " hrs"}</ItemTextValue>
          </Item>)
        }
      </DataList>
    </Card>
  );
}

export default CardIc;
