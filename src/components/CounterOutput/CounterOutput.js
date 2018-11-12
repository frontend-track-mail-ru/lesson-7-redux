import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Текущеее значение: {props.value}
    </div>
);

export default counterOutput;