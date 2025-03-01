import React from 'react'
import { style } from '../util/style'
import Button from './button'

const Cta = () => {
  return (
    <div className={`${style.flexCenter} ${style.marginY} ${style.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-dark-gradient`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={`${style.heading2}`}>Xizmatlarni sinab ko'rish</h2>
            <p className={`${style.paragraph} max-w-[550px]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nihil sit doloribus nisi ratione non possimus pariatur.
            </p>
        </div>
        <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
        </div>
    </div>
  )
}

export default Cta