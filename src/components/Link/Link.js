import React from 'react';

const Link = (props) => {
    const {name, path} = props.navigation;
    return (
       <li className="mr-12 font-mono font-bold" >
        <a href={path}> {name} </a>
        </li>
    );
};

export default Link;