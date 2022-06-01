import React from 'react';

const Service = ({service}) => {
    const {name,img} = service;
    return (
        <div class="card max-w-sm bg-base-100 shadow-xl mt-8">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    );
};

export default Service;