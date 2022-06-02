import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import Treatments from './Treatments';

const Appointment = () => {
    const [date,setDate]= useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <Treatments date={date}/>

        </div>
    );
};

export default Appointment;