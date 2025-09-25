import React from 'react';
import delateImg from '../../assets/delate.png'
const ChosePlayerCard = ({ chosePlayerData, removePlayer }) => {
    // console.log(chosePlayerData);
    const handleRemove = ()=>{
        removePlayer(chosePlayerData);
    }
    return (
        <div className='border-1 border-gray-200 rounded-3xl shadow-sm p-6 flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <div className=''>
                    <img className='object-cover object-top w-[60px] h-[60px] rounded-2xl' src={chosePlayerData.image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>{chosePlayerData.playerName}</h1>
                    <h1 className='font-light'>{chosePlayerData.role}</h1>
                </div>
            </div>
            <div>
                <img onClick={handleRemove} src={delateImg} alt="" />
            </div>
        </div>
    );
};

export default ChosePlayerCard;