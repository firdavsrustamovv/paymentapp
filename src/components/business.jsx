import React from 'react'
import { layout, style } from '../util/style'
import Button from './button'
import { features } from '../util/contstants'
import FeutureCard from './feutureCard'

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>Biznes rivojlantiring <br className='sm:block hidden' /> pulni hal qilamz</h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi, 
          ab quisquam mollitia accusamus accusantium error voluptatem explicabo? Magnam, explicabo!</p>
          <Button className={"mt-10"}/>
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, index) => (
            <FeutureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business