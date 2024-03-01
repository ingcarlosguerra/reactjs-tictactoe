import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <div>
                <p style={{position:'absolute',left:'33%',top:'42%',zIndex: '1'}}>
                    <button className="btn btn-lg btn-danger" onClick={this.props.onClick} style={{ fontSize: '70px',backgroundColor:'#931ae6',borderBlockColor:'transparent',borderColor:'white',fontFamily:'Arial Rounded MT Bold, sans-serif' }}>
                        Reiniciar Juego
                    </button>
                </p>
            </div>
        )
    }
}
