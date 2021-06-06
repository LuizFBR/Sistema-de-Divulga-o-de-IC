import { Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";

export const Card = styled(Paper).attrs({
  elevation: 4,
})`
  width: 28em;
  min-height: 15em;
  min-width: 10em;
  margin: 1em;
  border-radius: 0.7em;
`;

export const DataList = styled(List).attrs({})``;
export const Item = styled(ListItem).attrs({ border: false })`
  flex: 1;
`;
export const ItemText = styled.span`
  font-weight: bold;
`;
export const ItemTextValue = styled(ListItemText).attrs({})`
  text-align: end;
  font-size: 1em;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
