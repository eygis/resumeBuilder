import React, { ReactElement } from 'react';

let Objective = () : ReactElement => {
    return (
<div id='objective'>
    <p className='pageType'>Objective</p>
    <textarea id='objectiveTextArea' placeholder='Please write a brief summary of yourself and your career objectives.' />
</div>
    )}
export default Objective