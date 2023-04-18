import React, { createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'

const NftCard = ({
    nftInfo,
    onClickUnStake,
    onClickStake,
}) => {
    const ref = createRef(null)
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 2.0
    })

    const download = (image, { name = "img", extension = "png" } = {}) => {
        const a = document.createElement("a")
        a.href = image
        a.download = createFileName(extension, name)
        a.click()
    }

    const getImage = () => takeScreenShot(ref.current).then(download)

    return (
        <>
            <div ref={ref} className="relative min-w-[170px] text-white rounded-lg shadow">
                <img
                    className="rounded-xl"
                    loading="lazy"
                    src={nftInfo.imageUrl}
                />
                {
                    nftInfo.status == "unstaked" &&
                    <div className="p-2">
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <div className='flex flex-row items-center'>
                                <h5 className="font-sans text-md text-amber-400">5/ day</h5>
                                <img width="36" height="36" loading="lazy" src="/images/iconzap.png" />
                            </div>
                            <div className='flex flex-row items-center'>
                                <img width="24" loading="lazy" src="/images/dot.png" />
                                <h5 className="font-sans text-md truncate ...">{nftInfo.name}</h5>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-4'>
                            <button type="button" className='font-mono font-bold text-2xl bottom-3 w-48 inline-flex items-center justify-center py-2 tracking-wide text-center text-grey-200 bg-[#c1fe9c] rounded-xl hover:scale-[0.95] hover:bg-lime-800'
                                onClick={() => {
                                    onClickStake(nftInfo);
                                }}
                            >
                                STAKE
                            </button>
                            <img className='hover:cursor-pointer' width="36" height="36" loading="lazy" src="/images/screenshotic.png" onClick={getImage} />
                        </div>
                    </div>
                }
                {
                    nftInfo.status == "staked" &&
                    <div className="p-2">
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <div className='flex flex-row items-center'>
                                <img width="36" height="36" loading="lazy" src="/images/iconzap.png" />
                                <h5 className="font-sans text-md text-amber-400">{nftInfo.point + nftInfo.reward}</h5>
                            </div>
                            <div className='flex flex-row items-center'>
                                <img width="24" loading="lazy" src="/images/dot.png" />
                                <h5 className="font-sans text-md truncate ...">{nftInfo.name}</h5>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-4'>
                            <button type="button" className='font-mono font-bold text-2xl bottom-3 w-48 inline-flex items-center justify-center py-2 tracking-wide text-center text-grey-200 bg-red-500 rounded-xl hover:scale-[0.95] hover:bg-red-900'
                                onClick={() => {
                                    onClickUnStake(nftInfo);
                                }}
                            >
                                UNSTAKE
                            </button>
                            <img className='hover:cursor-pointer' width="36" height="36" loading="lazy" src="/images/screenshotic.png" onClick={getImage} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default NftCard
