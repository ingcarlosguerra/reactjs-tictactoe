import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <div>
                <p style={{position:'absolute',left:'45%',top:'90%'}}>
                    <button className="btn btn-lg btn-danger" onClick={this.props.onClick}>
                        Reset Game
                    </button>
                </p>
            </div>
        )
    }
}
