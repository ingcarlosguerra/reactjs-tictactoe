import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <div>
                <p style={{position:'absolute',left:'33%',top:'80%'}}>
                    <button className="btn btn-lg btn-danger" onClick={this.props.onClick} style={{ fontSize: '70px' }}>
                        Reiniciar Juego
                    </button>
                </p>
            </div>
        )
    }
}
