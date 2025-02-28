import React from 'react'
import { layout, style } from '../util/style'
import { apple, billing, google } from '../assets'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img src= {billing} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          Hisob-kitob va fakturial <br className="sm:block hidden" /> osongina boshqaring
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, soluta. 
          Accusamus neque quia aperiam nobis perferendis aut rem provident expedita.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src= {apple} alt="apple" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src= {google} alt="google" className='w-[129px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing