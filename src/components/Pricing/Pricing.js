import React from 'react';
import PriceCard from '../PriceCard/PriceCard'
 
const pricingOption = [
 {id:1, name:'Free', price: 0, features:[
    '10 users included',
    '2 GB of storage',
    'Email support',
    'Help center access'
 ]},
 {id:2, name:'Pro', price: 15.99, features:[
    '20 users included',
    '10 GB of storage',
    'Priority email support',
    'Help center access'
 ]},
 {id:3, name:'Enterprise', price: 45.99, features:[
    '30 users included',
    '15 GB of storage',
    'Phone and email support',
    'Help center access'
 ]},
];

const Pricing = () => {
    return (
        <div>
            <h3 className="text-6xl rounded-lg text-yellow-200 bg-indigo-400 mx-8 font-bold p-12">Best deal of the Twon!</h3>
           <div className="grid md:grid-cols-3 gap-4">
                 {
                    pricingOption.map(option =><PriceCard key={option.id} option={option}></PriceCard>)
                }
           </div>
        </div>
    );
};

export default Pricing;