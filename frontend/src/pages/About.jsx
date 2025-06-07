import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (

  <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat quibusdam voluptatum autem deserunt adipisci consectetur esse illo, nesciunt reprehenderit vero nam doloremque. Enim dolorem, nemo amet quae vero modi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam nobis nam qui. Quidem debitis consectetur inventore quia non sapiente, dolor placeat cupiditate, voluptate magnam repellat tempora atque odit sequi?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum quaerat eveniet quis ipsa, molestias impedit nesciunt velit eum mollitia unde ipsam praesentium optio natus. Velit officia iusto ut obcaecati.</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis fugit ut placeat perferendis nam eaque unde. Asperiores ipsam, aliquam nulla doloribus dicta, at laudantium, itaque totam laboriosam sapiente eaque.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convinience</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis fugit ut placeat perferendis nam eaque unde. Asperiores ipsam, aliquam nulla doloribus dicta, at laudantium, itaque totam laboriosam sapiente eaque.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis fugit ut placeat perferendis nam eaque unde. Asperiores ipsam, aliquam nulla doloribus dicta, at laudantium, itaque totam laboriosam sapiente eaque.</p>
      </div>
    </div>
    <NewsletterBox/>
  </div>
  )
}

export default About
