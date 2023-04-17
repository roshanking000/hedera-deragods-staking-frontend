import React, { useState } from 'react'

const NftCard = ({
    nftInfo,
    onClickUnStake,
    onClickStake,
}) => {
    const [imageloadingState, setImageloadingState] = useState(false);

    return (
        <>
            <div className="min-w-[170px] text-white rounded-lg shadow">
                <img
                    className="rounded-xl"
                    loading="lazy"
                    src={imageloadingState ? nftInfo.imageUrl : "/images/loading.gif"}
                    alt=""
                    onLoad={() => {
                        setImageloadingState(true);
                    }}
                />
                {
                    nftInfo.status == "unstaked" &&
                    <div className="p-2">
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <div className='flex flex-row items-center'>
                                <h5 className="text-md text-amber-400">5/ day</h5>
                                <img width="36" height="36" loading="lazy" src="/images/iconzap.png" />
                            </div>
                            <div className='flex flex-row items-center'>
                                <img width="24" loading="lazy" src="/images/dot.png" />
                                <h5 className="text-md truncate ...">{nftInfo.name}</h5>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <button type="button" className='bottom-3 w-48 inline-flex items-center justify-center py-2 tracking-wide text-xl font-bold text-center text-grey-200 bg-lime-500 rounded-full hover:scale-[0.95] hover:bg-lime-800'
                                onClick={() => {
                                    onClickStake(nftInfo);
                                }}
                            >
                                STAKE
                            </button>
                        </div>
                    </div>
                }
                {
                    nftInfo.status == "staked" &&
                    <div className="p-2">
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <div className='flex flex-row items-center'>
                                <img width="36" height="36" loading="lazy" src="/images/iconzap.png" />
                                <h5 className="text-md text-amber-400">{nftInfo.point + nftInfo.reward}</h5>
                            </div>
                            <div className='flex flex-row items-center'>
                                <img width="24" loading="lazy" src="/images/dot.png" />
                                <h5 className="text-md truncate ...">{nftInfo.name}</h5>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <button type="button" className='bottom-3 w-48 inline-flex items-center justify-center py-2 tracking-wide text-xl font-bold text-center text-grey-200 bg-lime-500 rounded-full hover:scale-[0.95] hover:bg-lime-800'
                                onClick={() => {
                                    onClickUnStake(nftInfo);
                                }}
                            >
                                UnStake
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default NftCard
