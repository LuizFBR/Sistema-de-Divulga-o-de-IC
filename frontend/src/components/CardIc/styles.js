import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Card = styled(Paper).attrs({
  elevation: 4,
})`
  width: 180px;
  height: 360px;
  margin: 20;
  padding: 20;
`;
