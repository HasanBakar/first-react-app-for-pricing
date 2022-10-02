import React from 'react';
import Link from '../Link/Link';
import {  Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import {useState} from 'react'
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const navigations = [
        {id:1, name:'Home', path:'/Home'},
        {id:2, name:'Products', path:'/Products'},
        {id:3, name:'Orders', path:'/Orders'},
        {id:4, name:'Contact', path:'/Contact'},
        {id:5, name:'About', path:'/About'}
    ]
    return (
        <nav className="bg-purple-300 w-full py-4 mb-3">
            <div onClick  = {() =>setOpen(!open)} className="h-12 w-12 md:hidden ">
             {
                open ? <XMarkIcon/>  : <Bars3Icon/>
             }
            </div>
            <ul className={`bg-purple-300 w-full md:flex justify-center text-xl absolute md:static duration-500 ease-in ${open ? 'top-12' : 'top-[-150px]'}`} >
                {
                    navigations.map(navigation=> <Link
                         key={navigation.id} navigation={navigation}
                         ></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;