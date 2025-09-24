import React, { use } from 'react';
import PlayerCart from './PlayerCart';

const AvailablePlayers = ({ playerPromise }) => {
    const playersData = use(playerPromise);
    // console.log(playersData);
    return (
        <>
            <h1 className='max-w-[1360px] mx-auto text-2xl font-semibold m-2 text-center'>Total Available Player- {playersData.length}</h1>
            <div className='max-w-[1360px] mx-auto grid grid-cols-3 gap-8'>
                {
                    playersData.map(data => <PlayerCart key={data.id} data={data}></PlayerCart>)
                }
                {/* create card */}
            </div>
        </>
    );
};

export default AvailablePlayers;