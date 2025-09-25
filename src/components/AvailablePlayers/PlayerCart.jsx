import React, { useState } from 'react';
import group from '../../assets/Group.png'
import flag from '../../assets/Group-flag.png'
import { toast } from 'react-toastify';

const PlayerCart = ({ data, setAvailableBalance, availableBalance, chosePlayer, setChosePlayer }) => {
    const [isSelected,setIsSelected] = useState(true);
    const handleChosePlayer = (price, availableBalance)=>{
        if(availableBalance<price){
            toast("no available balance...");
            return;
        }
        if (chosePlayer.length>5){
            toast("only select 6 player...");
            return;
        }

        setIsSelected(false);
        setAvailableBalance(availableBalance-price);
        setChosePlayer([...chosePlayer,data])
    }
    // console.log(data);
    const { image, playerName, country, role, rating, ballStyle, batStyle, price } = data;
    return (
        
        <>
        <div className="card bg-base-100 shadow-lg p-4 mb-4">
            <figure>
                <img className='rounded-2xl mb-4 h-[240px] w-full object-cover object-top'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="">
                <h2 className="card-title">
                    <img className='w-[20px] h-[20px] mr-1' src={group} alt="" /> {playerName}
                </h2>
                <div className='flex justify-between items-center mt-2 border-b-1 border-gray-300 pb-4'>
                    <div className='flex gap-1 items-center text-gray-500'>
                        <img className='w-[14px] h-[14px] ' src={flag} alt="" />
                        <p>{country}</p>
                    </div>
                    <div className='rounded-sm px-2 bg-gray-100 shadow-sm'>
                        {role}
                    </div>
                </div>
                <div className='flex justify-between items-center mt-1'>
                    <h1 className='font-semibold'>Rating</h1>
                    <h1 className='font-semibold'>{rating}</h1>
                </div>
                <div className='flex justify-between items-center mt-1'>
                    <h1 className='font-semibold'>{batStyle}</h1>
                    <h1 className=''>{ballStyle}</h1>
                </div>
                <div className='flex justify-between items-center mt-1'>
                    <h1 className='font-semibold'>Price: $<span>{price}</span></h1>
                        <button disabled={isSelected === false} onClick={() => { handleChosePlayer(price, availableBalance)}} className='btn'>{isSelected ?"Choose Player":"Selected"}</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default PlayerCart;