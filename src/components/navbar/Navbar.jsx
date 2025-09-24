import React from 'react';
import dollarImg from '../../assets/dollar1.png'
import navImg from '../../assets/logo-footer.png'

const Navbar = () => {
    return (
        <div className="navbar max-w-[1360px] mx-auto pt-8">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-[72px]' src={navImg} alt="" />
                </a>
            </div>
            <div>
                <ul className='flex gap-5 items-center'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <li className='flex gap-1 items-center border-1 border-gray-300 p-2 shadow rounded-2xl'>
                        <span>6000000000</span>coin<img className='w-[20px] h-[20px]' src={dollarImg} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;