import React from 'react'
import { style } from '../util/style'
import { feedback } from '../util/contstants'
import FeedbackCard from './feedbackCard'

const Testimonials = () => {
  return (
    <section id='clients'>
    <div className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
        <div className="w-full flex justify-between  items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={`${style.heading2}`}>
                Odamlar biz haqimizda qanday fikirda
            </h2>
            <div className='max-w-[450px] md:mt-0 mt-6'>
              <p className={`${style.paragraph} text-left`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate reprehenderit odio. Sequi beatae fugit culpa.
              </p>
            </div>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card}/>
          ))}
        </div>
    </div>

    </section>
  )
}

export default Testimonials