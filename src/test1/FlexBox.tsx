import React from 'react';
import './styles.css'
const FlexBox = () => {
    return (
        <div className="container">
            <div className="container__item side">Start</div>
            <div className="container__item middle-1">middle flex 1</div>
            <div className="container__item middle-2">middle flex 2</div>
            <div className="container__item side">End</div>
        </div>
    );
};

export default FlexBox;
