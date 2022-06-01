import React from 'react';
import dentalTreatment from '../../../assets/images/treatment.png';

const Review = () => {
    return (
        <div class="hero min-h-screen bg-white">
  <div class="hero-content flex-col lg:flex-row lg:justify-around">
    <img src={dentalTreatment} class="max-w-sm rounded-lg shadow-2xl flex-1" alt='' />
    <div className='flex-1 max-w-xl lg:ml-8'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care,On Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Review;