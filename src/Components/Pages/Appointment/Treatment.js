import React from "react";

const Treatment = ({ treatment,setSelectedTreatment }) => {
  const { name, slots } = treatment;
  return (
    <div class="card lg:max-w-lg  bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date.</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-start">
        <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setSelectedTreatment(treatment)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
