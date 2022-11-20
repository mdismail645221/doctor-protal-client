import React from 'react';

const Service = ({ singleService }) => {
    const {img, title, info} = singleService;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default Service;