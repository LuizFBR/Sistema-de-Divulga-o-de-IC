import { Paper } from '@material-ui/core';
import React from 'react';

import { Card } from './styles';

function CardIc({ data }) {

    const styles = { backgroundColor: '#b3b', borderRadius: '0.7em',
     fontSize: '1.2em', color: '#363636', padding: '1em', textAlign: 'center'}
    const handleCardClick = () => console.log(data);

    return (<Card onClick={handleCardClick} style={styles}>
        <h1>{data.title}</h1>
    </Card>);
}


export default CardIc;