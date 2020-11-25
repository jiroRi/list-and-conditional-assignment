import React from 'react';

const CharComponent = (props) => {

    const randomColor = (color) => {
        switch(color) {
            case 0:
                return '#114B5F';

            case 1:
                return '#456990';
            
            case 2:
                return '#F45B69';

            default:
                return '#6B2737';
        }
    }

    const style = {
        display: 'inline-block',
        padding: '24px',
        textAlign: 'center',
        margin: '16px',
        border: '2px solid gray',
        backgroundColor: `${randomColor(props.color)}`,
        color: '#ffffff',
        boxSizing: 'border-box',
        width: '64px',
        height: '64px',
    };

    const letter = {
        margin: '0 auto',
        boxSizing: 'border-box',
        fontSize: '16px',
        lineHeight: '16px',
        height: '16px',
        color: 'white',
        textTransform: 'uppercase',
        textShadow: '2px 2px green'
    };

    return (
        <div style={style}>
            <p style={letter} onClick={props.click}><b>{props.character}</b></p>
        </div>
    );
}

export default CharComponent;