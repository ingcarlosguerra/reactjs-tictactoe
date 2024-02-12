import React from 'react';

const WinnerLine = ({ winnerLine }) => {
  if (!winnerLine) {
    return null;
  }

  const [start, middle, end] = winnerLine;

  // Calcula la posición de la línea ganadora
  const styles = {
    width: '60%',
    height: '20px',
    backgroundColor: '#FAB627', // Cambia el color de la línea como desees
    position: 'absolute',
    zIndex: 1,
    left:'24%'
  };

  // Define las coordenadas de la línea ganadora
  if (start === 0 && middle === 1 && end === 2) {
    styles.top = '16%';  //horizontal  1
    styles.left= '20%'; 
  } else if (start === 3 && middle === 4 && end === 5) {
    styles.top = '46%'; // horizontal 2
    styles.left= '20%';
  } else if (start === 6 && middle === 7 && end === 8) {
    styles.top = '76%'; // horizontal 3
    styles.left= '20%';
  } else if (start === 0 && middle === 3 && end === 6) {
    styles.width = '40%';
    styles.left = '5.5%';  // vertical 1
    styles.top  = '45%';
    styles.transform = 'rotate(90deg)';
  } else if (start === 1 && middle === 4 && end === 7) {
    styles.width = '40%';
    styles.left = '30%';  // vertical 2
    styles.top  = '45%';
    styles.transform = 'rotate(90deg)';
  } else if (start === 2 && middle === 5 && end === 8) {
    styles.width = '40%';
    styles.left = '55%';  
    styles.top  = '45%'; // vertical 3
    styles.transform = 'rotate(90deg)';
  } else if (start === 0 && middle === 4 && end === 8) {
    styles.transform = 'rotate(35deg)';
    styles.left='20%';
    styles.top ='46%';
  } else if (start === 2 && middle === 4 && end === 6) {
    styles.transform = 'rotate(-35deg)';
    styles.left='20%';
    styles.top ='46%';
  }

  return <div style={styles}></div>;
};

export default WinnerLine;
