import React from 'react'
import { style } from '../util/style'
import { discount, robot } from '../assets'
import Button from './button'

const home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY} `}>
      <div className={`flex-1 ${style.flexStart} md:my-0 my-10 relative `}>
        <img src={robot} alt="robot" className={"w-[100%] h-[90%] relative z-10 rounded-lg"} />
      </div>
        <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center gap-1 py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
                <img src={discount} alt="discount" className="w-[22px] h-[22px]" />
                <p className={`${style.paragraph}`}><span className="text-white">20%</span> chegirma <span className="text-white">1 Oylik</span> Xisob Uchun</p>
            </div>
            <div className="w-full">
              <h1 className={`${style.heading1}`}>Yangi Avlod <br /> <span className="text-gradient">To'lov Usuli</span></h1>
            </div>
            <p className={`${style.paragraph} mt-5 max-w-[500px]`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Cupiditate omnis eius eligendi ipsum nesciunt. Ipsam        
          reprehenderit aliquid modi accusamus itaque.
            </p>
            <Button/>
              {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient"/>
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient"/>
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient"/> */}
        </div>
        
    </section>
  )
}

export default home