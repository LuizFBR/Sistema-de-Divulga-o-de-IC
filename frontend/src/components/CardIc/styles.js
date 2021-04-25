import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Card = styled(Paper).attrs({
  elevation: 4,
})`
  width: 28em;
  height: 20em;
  min-width: 10em;
  margin: 1em;
  border-radius: 0.7em;

`;
