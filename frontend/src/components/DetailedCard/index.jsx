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
    backgroundColor: "#CD9BC7",
    borderRadius: "0.7em",
    fontSize: "1rem",
    color: "#363636",
    padding: "1em",
    textAlign: "center",
    "a": {
      color: "hotpink",
    },
  };

  return (
    <Card style={styles}>
      <DataList>
        {data[0].name &&   
          (<Item>
            <ItemText>Nome:</ItemText>
            <ItemTextValue>{data[0].name}</ItemTextValue>
          </Item>)
        }

        {data[0].description &&   
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

        {data[1]?.email &&   
          (<Item>
            <ItemText>Contato: </ItemText>
            <ItemTextValue><a href = {`mailto: ${data[1]?.email}`}>{data[1]?.email}</a></ItemTextValue>
          </Item>)
        }

        {data[1]?.site &&   
          (<Item>
            <ItemText>Contato: </ItemText>
            <ItemTextValue><a href = {`${data[1]?.site}`}>{data[1]?.site}</a></ItemTextValue>
          </Item>)
        }

        {data[1]?.departament &&   
          (<Item>
            <ItemText>Departamento do professor: </ItemText>
            <ItemTextValue>{data[1]?.departament}</ItemTextValue>
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
