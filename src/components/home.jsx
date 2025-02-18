import React from 'react'
import { style } from '../util/style'
import { discount } from '../assets'

const home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
        <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center gap-1 py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
                <img src={discount} alt="discount" className="w-[22px] h-[22px]" />
                <p className={`${style.paragraph}`}><span className="text-white">20%</span> chegirma <span className="text-white">1 Oylik</span> Xisob Uchun</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </section>
  )
}

export default home