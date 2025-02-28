import React from 'react'
import {layout, style}  from "../util/style"
import { card } from '../assets'
import Button from './button'

const Contract = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>Bir necha oson qadamda <br className='sm:block hidden' /> kontrakt tuzish</h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi, 
          ab quisquam mollitia accusamus accusantium error voluptatem explicabo? Magnam, explicabo!</p>
          <Button className={"mt-10"}/>
      </div>
      <div className={`${layout.sectionImage}`}>
        <img className='w-[100%] h-[100%]' src={card} alt="card" />
      </div>
    </section>
  )
}

export default Contract