import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const Treatments = ({date}) => {
    const [treatments,setTreatments] = useState([]);
    const [selectedTreatment,setSelectedTreatment] = useState(null);
    useEffect(()=>{
        fetch('treatments.json').then(res=>res.json()).then(data=>setTreatments(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-primary mb-8'>Available treatments {format(date, 'PP')} </h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
             {
                 treatments?.map(treatment=><Treatment setSelectedTreatment={setSelectedTreatment} treatment={treatment}/>) 
             }
             </div>
            {
                selectedTreatment && <BookingModal selectedTreatment={selectedTreatment} />
            }
        </div>
    );
};

export default Treatments;