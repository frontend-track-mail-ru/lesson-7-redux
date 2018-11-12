import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Текущее значение: {props.value}
    </div>
);

export default counterOutput;