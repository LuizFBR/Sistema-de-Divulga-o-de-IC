import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-items: center;
  align-items: center;
`;

export const CustomToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-items: space-between;
`;

export const ItensSection = styled.div`
    flex-direction: row;
`;