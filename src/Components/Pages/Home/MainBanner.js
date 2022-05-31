import React from 'react';
import banner from '../../../assets/images/chair.png';
import backImg from '../../../assets/images/bg.png';

const MainBanner = () => {
    return (
        <div style={{backgroundImage:`url(${backImg})`}} class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img  className=" max-w-sm" src={banner} alt="chair" />
          <div>
            <h1 class="text-4xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default MainBanner;