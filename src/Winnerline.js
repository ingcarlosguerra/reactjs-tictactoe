import React from 'react';

const WinnerLine = ({ winnerLine }) => {
  if (!winnerLine) {
    return null;
  }

  const [start, middle, end] = winnerLine;

  
  const styles = {
    width: '60%',
    height: '8px',
    backgroundColor: '#ee1da5',  // Color de fondo
    position: 'absolute',
    zIndex: 1,
    left: '24%',
    boxShadow: '0 0 10px rgba(190, 9, 127, 0.8), 0 0 20px rgba(190, 9, 127, 0.8), 0 0 40px rgba(190, 9, 127, 0.8), 0 0 60px rgba(190, 9, 127, 0.8), 0 0 80px rgba(190, 9, 127, 0.8)',  // Efecto de resplandor de neón
    border: '2px solid rgba(190, 9, 127, 0.8)',  // Borde del mismo color que el difuminado
    borderRadius: '4px',  // Esquinas redondas
  };
  
  
  // Define las coordenadas de la línea ganadora
  if (start === 0 && middle === 1 && end === 2) {
    styles.top = '17%';  //horizontal  1
    styles.left= '20%'; 
  } else if (start === 3 && middle === 4 && end === 5) {
    styles.top = '47.2%'; // horizontal 2
    styles.left= '20%';
  } else if (start === 6 && middle === 7 && end === 8) {
    styles.top = '77.5%'; // horizontal 3
    styles.left= '20%';
  } else if (start === 0 && middle === 3 && end === 6) {
    styles.width = '40%';
    styles.left = '5.2%';  // vertical 1
    styles.top  = '48%';
    styles.transform = 'rotate(90deg)';
  } else if (start === 1 && middle === 4 && end === 7) {
    styles.width = '40%';
    styles.left = '30%';  // vertical 2
    styles.top  = '48%';
    styles.transform = 'rotate(90deg)';
  } else if (start === 2 && middle === 5 && end === 8) {
    styles.width = '40%';
    styles.left = '55%';  
    styles.top  = '48%'; // vertical 3
    styles.transform = 'rotate(90deg)';
  } else if (start === 0 && middle === 4 && end === 8) {
    styles.transform = 'rotate(35deg)';
    styles.left='20%';
    styles.top ='47.5%';
  } else if (start === 2 && middle === 4 && end === 6) {
    styles.transform = 'rotate(-35deg)';
    styles.left='20%';
    styles.top ='47.5%';
  }

  return <div style={styles}></div>;
};

export default WinnerLine;
