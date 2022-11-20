import React from 'react';

const STestimonial = ({test}) => {
    const {name, info, img, address} = test;
    return (
        <div className={`card card-side  shadow-xl ${bgColor} p-5 text-white`}>
            {/* <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
            </div> */}
        </div>
    );
};

export default STestimonial;