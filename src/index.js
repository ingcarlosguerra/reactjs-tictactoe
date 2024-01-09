import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.css';

import Square from './Square';
import ResetButton from './ResetButton';
import WinnerLine from './Winnerline';

class Board extends React.Component {
    
    constructor() {
        super();

        this.state = {
            squares : Array(9).fill(null),
            xIsNext : true,
            winner  : null,
            full    : false
        }
    }

    handleOnClick(index, turn) {

        const newSquares = this.state.squares.slice();
        newSquares[index] = turn;

        var winner = this.calculateWinner(newSquares);

        this.setState({
            xIsNext: ! this.state.xIsNext,
            squares: newSquares,
            winner: winner !== null ? winner : this.state.winner
        });

        if (winner !== null) {
            document.getElementById('titlePemenang').className="animated rotateIn";
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
                if (squares[a] === squares[b] && squares[a] === squares[c] && squares[b] === squares[c]) {
                    return squares[a];
                }
            }
        }

        if (squares.every(function(el) {
            let arg = el !== null ? true : false;
            return arg;
        })) {
            this.setState({
                full: true
            })
        };

        return null;
    }

    handleResetGame() {
        window.location.reload()
    }

    render() {
        const indexSquares = [0,1,2,3,4,5,6,7,8];

        var squares = indexSquares.map(function(indexSquare, i) {
            return (<Square
                value={this.state.squares[i]}
                key={i}
                index={i}
                winner={this.state.winner}
                xIsNext={this.state.xIsNext}
                onClick={this.handleOnClick.bind(this)} />)
        },this)

    // Agrega la variable winnerLine que almacenará la línea ganadora
    let winnerLine = null;
    if (this.state.winner !== null) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      lines.forEach(([a, b, c]) => {
        if (
          this.state.squares[a] &&
          this.state.squares[a] === this.state.squares[b] &&
          this.state.squares[a] === this.state.squares[c]
        ) {
          winnerLine = [a, b, c];
        }
      });
    }

        return (
            <div>
                {/* <h1 style={{textAlign: 'center', fontSize: '46px', color: 'rgba(52, 152, 219,1.0)'}} className="animated flipInY">Tic-Tac-Toe</h1> */}
                <img src='images/Background.png' alt='' style={{position:'absolute',width:'100%',height:'100%'}} />
                <h1 style={{textAlign: 'center',color:'white',fontSize: '60px'}} id="titlePemenang">{this.state.winner !== null ? <span>Ganador: <b>{this.state.winner}</b></span> : ""}</h1>
                <div className="container animated fadeInUp">
                    <div className="row">
                        <br />
                        <div className="col-xs-12">{squares}</div>
                    </div>
                </div>
                <br />
                <WinnerLine winnerLine={winnerLine} /> {/* Agrega el componente WinnerLine */}
                {this.state.winner !== null || this.state.full === true ? <ResetButton onClick={this.handleResetGame.bind(this)} /> : ""}
            </div>
        )
    }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
