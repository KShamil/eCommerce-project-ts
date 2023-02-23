import React from 'react'
import Accordion from '../components/Accordion/Accordion';
import { useEffect } from 'react'

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='faqs-page container p-5'>
        <h1 className='faqs_title text-start'>Frequently asked questions</h1>
        <div className="faqs_content mt-2">
        <Accordion/>
        </div>
    </div>
  )
}

export default Faqs