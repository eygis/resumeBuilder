import React, { ReactElement } from 'react';

let Basic = () : ReactElement => {
    return (
<div id='basic'>
    <p className='pageType'>Basic Information</p>
    <input id="firstName" className='basicInput' type='text' placeholder='First Name' required />
    <input id="lastName" className='basicInput' type='text' placeholder='Last Name' required />
    <input id='location' className='basicInput' type='text' placeholder='Full Address (Optional)' />
    <input id="phone" className='basicInput' type='text' placeholder='Phone Number (Optional)' />
</div>
    )}
export default Basic