import React from 'react';
import Feature from '../Feature/Feature'
const PriceCard = ({option}) => {
    return (
        <div className="bg-blue-300 m-8  pt-4 rounded-2xl">
            <h3 className="font-extrabold text-4xl pb-3"> {option.name} </h3>
            <p>
                <span className="text-2xl font-semibold">${option.price}</span>
                <span>/mon</span>
             </p>
            {
                option.features.map((feature,idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className="my-4 hover:bg-sky-400 hover:text-yellow-400 text-lg font-bold bg-lime-500 w-full rounded-xl px-12 py-3">Buy Now</button>
        </div>
    );
};

export default PriceCard;