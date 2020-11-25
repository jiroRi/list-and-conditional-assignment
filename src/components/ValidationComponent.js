import React from 'react';

const ValidationComponent = (props) => {
    const style = {
        fontSize: '12px'
    }

    return (
        <div>
            {(props.length >= 0 && props.length <=4) ? <p>Text too short 😣</p> : <p style={style}>Text long enough 👌</p>}
        </div>
    )
}

export default ValidationComponent;