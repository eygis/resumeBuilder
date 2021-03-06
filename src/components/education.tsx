import React, { ReactElement } from 'react';

let Education = () : ReactElement => {
    return (
<div id='education'>
    <p className='pageType'>Educational Information</p>
    <input id="eduName" className='basicInput' type='text' placeholder='Educational Institution Name' required />
    <input id="eduDegree" className='basicInput' type='text' placeholder='Field of Study' required /><select id='degreeLevel'>
        <option value='noValue'>Please select your highest attained educational level.</option>
        <option value='HS'>High School Diploma</option>
        <option value='AA/AS'>Associate's Degree</option>
        <option value='BA/BS'>Bachelor's Degree</option>
        <option value='MA/MS'>Master's Degree</option>
        <option value='PhD'>Doctoral Degree</option>
        <option value='Other'>Other</option>
    </select>
    <input id='eduDates' className='basicInput' type='text' placeholder='Dates Attended' required />
</div>
    )}
export default Education