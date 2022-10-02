import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div>
            <div className="flex items-center pl-14">
                <p><CheckCircleIcon className="h-6 w-6 text-green-400"/></p>
                <p className="pl-5">{feature}</p>
            </div>
        </div>
    );
};

export default Feature;