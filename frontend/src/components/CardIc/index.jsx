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
    backgroundColor: "#CD39C7",
    borderRadius: "0.7em",
    fontSize: "1rem",
    color: "#2d0644",
    padding: "1em",
    textAlign: "center",
    '&:hover': {
      background: '#000',
    },
  };

  return (
    <Card onClick={handleClick} style={styles} >
      <DataList>
        {data[0].name &&   
          (<Item>
            <ItemText>Nome:</ItemText>
            <ItemTextValue>{data[0].name}</ItemTextValue>
          </Item>)
        }

        {false && data[0].description &&   
          (<Item>
            <ItemText>Descricao:</ItemText>
            <ItemTextValue>{data[0].description}</ItemTextValue>
          </Item>)
        }

        {data[0].subject &&   
          (<Item>
            <ItemText>Materia:</ItemText>
            <ItemTextValue>{data[0].subject}</ItemTextValue>
          </Item>)
        }

        {data[1] &&   
          (<Item>
            <ItemText>Orientador:</ItemText>
            <ItemTextValue>{data[1]?.name}</ItemTextValue>
          </Item>)
        }

        {data[0].endDate &&   
          (<Item>
            <ItemText>Data de Termino:</ItemText>
            <ItemTextValue>{data[0].endDate}</ItemTextValue>
          </Item>)
        }
        {data[0].requirements &&   
          (<Item>
            <ItemText>Requerimentos:</ItemText>
            <ItemTextValue>{data[0].requirements}</ItemTextValue>
          </Item>)
        }
        {
          (<Item>
            <ItemText>Bolsa</ItemText>
            <ItemTextValue>{data[0].has_scholarship?data[0].scholarship_amount:"Ausente"}</ItemTextValue>
          </Item>)
        }
        {data[0].workload &&   
          (<Item>
            <ItemText>Carga horaria semanal:</ItemText>
            <ItemTextValue>{data[0].workload + " hrs"}</ItemTextValue>
          </Item>)
        }
      </DataList>
    </Card>
  );
}

export default CardIc;
