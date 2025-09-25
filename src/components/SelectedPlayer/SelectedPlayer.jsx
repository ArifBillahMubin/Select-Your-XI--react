import React from 'react';
import ChosePlayerCard from './ChosePlayerCard';

const SelectedPlayer = ({ chosePlayer, removePlayer }) => {
    // console.log(chosePlayer);
    return (
        <div className='max-w-[1360px] mx-auto mt-6'>
            {
                chosePlayer.map(chosePlayerData => <ChosePlayerCard removePlayer={removePlayer} key={chosePlayerData.id} chosePlayerData={chosePlayerData}></ChosePlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayer;