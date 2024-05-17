import React from 'react';
import { TbError404 } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

function ErrorPage() {

  return (
    <>
      <div className='error-container'>

        <div className='error-container-first'>
          <h1>ERROR</h1>
          <div className='error-404'>
            <TbError404 className='error-404-icon' />
          </div>
          <div className='page-not-found'>
            <span>ERROR REASON : PAGE NOT FOUND</span>
          </div>
        </div>

        <div className='error-container-second'>
          <div className='exclamation'>
            <BiSolidError className='exclamation-icon' />
          </div>
          <h2>Error Type</h2>
          <span className='error-reason'>
            The content you requested cannot be found or may have been removed.
          </span>

          <div className='exit-btns-from-error-page'>
            <button className='go-back-btn'><IoArrowBack className='go-back-btn-icon' />Go Back</button>
            <button className='go-to-home-page-btn'><FaHome className='go-to-home-page-btn-icon' />Homepage</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage;