import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'

const CorporativeSalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='corporative-sales-page p-5'>
      <div className="content container">
        <div className="top-link d-flex justify-content-start align-items-center gap-3">
          <div className="title-link">
          <Link to="/" className='link text-decoration-none'>Home</Link> <i className="fa-solid fa-angle-right"></i> 
          </div>
          <h4 className='my-1'>Corporate Sales</h4>
        </div>
        <div className="title mt-3">
          <h1>Corporate Sales</h1>
        </div>
        <div className="info mt-5">
          <p>We sell various types of high-quality digital and household appliances, as well as furniture. The number of our corporate clients has already exceeded 2000 and continues to grow every day.</p>

          <p className='mt-5'>We offer you the following opportunities for cooperation:</p>

          <ol>
            <li>Credit sales for corporate clients;</li>
            <li>Transportation of all office equipment, such as: telephone, laptop, air conditioner, microwave oven, dispenser, etc., by transfer;</li>
            <li>Making payments by transfer in cooperation with us;</li>
            <li>Special discounts for companies with which we cooperate;</li>
            <li>Purchasing goods on order, in addition to those presented on our website.</li>
            <li>Order by phone or email.</li>
          </ol>

          <p className='contact'>For cooperation, please contact us in any way convenient for you, as indicated below:</p>

          <ul className='contact-list'>
            <li>+994556801747</li>
            <li>kurbanovsh05@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CorporativeSalesPage;