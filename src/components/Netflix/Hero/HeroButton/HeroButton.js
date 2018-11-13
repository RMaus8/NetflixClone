import React from 'react';

const heroButton = (props) => {
    return (
        <a href="/" className="Button" data-primary={props.primary}>{props.text}</a>
    )
}

export default heroButton;