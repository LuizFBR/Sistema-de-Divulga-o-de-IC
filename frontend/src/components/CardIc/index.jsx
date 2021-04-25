import { Paper } from '@material-ui/core';
import React from 'react';

import { Card } from './styles';

function CardIc({ data }) {

    const styles = { backgroundColor: '#b3b', width: 180, height: 360, margin: 20, padding: 20 }
    const handleCardClick = () => console.log(data);

    return <Card onClick={handleCardClick} style={styles} />;
}


export default CardIc;