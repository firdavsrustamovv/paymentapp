import React from 'react'
import { style } from '../util/style'
import { logo } from '../assets'
import { footerLinks } from '../util/contstants'

const Footer = () => {
  return (
    <div className={`${style.flexCenter} ${style.paddingY} flex-col`}>
        <div className={`${style.flexCenter} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-start ml-10'>
                <img src={logo} alt="logo" className='w-[150px] object-contain' />
                <p className={`${style.paragraph} mt-4 max-w-[350px]`}>
                    To'lovlarni oson, ishonchli va xafsiz qilishning yangi usuli
                </p>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between mr-5 flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((link) => (
                    <div key={link.title} className={`flex flex-col ss:my-0 my-4 min-w-150px`}>
                        <h4 className='font-montserrat font-medium text-white text-[18px] leading-[27px]'>{link.title}</h4>
                        <ul className='list-none mt-4'>
                            {link.links.map((item, idx) => (
                                <li key={item.name} className='text-lightWhite cursor-pointer text-[16px] mb-2 font-normal leading-[24px] hover:text-secondary'>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 mr-12 ml-12 border-t-[1px] border-t-slate-400'>
            <p className='font-montserrat font-normal text-lightWhite text-[18px] ml-10 leading-[32px]'>@2024 PaymentApp. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer