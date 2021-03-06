import React, { ReactElement } from 'react';

let History = () : ReactElement => {
    return (
<div id='history'>
    <p className='pageType'>Job History</p>    
    <input id="companyName" className='basicInput' type='text' placeholder='Company Name' required />
    <input id="jobTitle" className='basicInput' type='text' placeholder='Job Title' required />
    <input id='years' className='basicInput' type='text' placeholder='Dates Between Which You Held the Position' required />
    <input id="jobDescription" className='basicInput' type='text' placeholder='Job Description' required />
</div>
    )}
export default History