import React from 'react'
import { quota } from '../assets'

const FeedbackCard = ({name, title, feedback}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feature-card'>
        <img src={quota} alt="quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-montserrat font-normal text-[18px] leading-[32px] text-white my-10'>{feedback}</p>
        <div className='flex flex-row items-center'>
            <div className='w-[48px] h-[48px] rounded-full flex justify-center items-center bg-slate-400 bg-dark-gradient'>
                <p className='text-[22px] font-semibold text-gradient'>{name.slice(0,1)}</p>
            </div>
            <div className='flex flex-col ml-4'>
                <h4 className='font-montserrat font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
                <p className='font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard