import React from 'react'
import './ServiceSubComp.css'
import { Link } from 'react-router-dom'


const ServiceTopHeader = (props) => {
  return (
    <>
    <div style={{height:'69vh'}} className="service-Header d-flex flex-column justify-content-center aline-items-center">
          <img style={{position:'absolute', top:'0', left:'0', width:'100%', height:'80%', zIndex:'-1', opacity:'100%'}} src={props.TopBanner} alt="" />
        <div className="container d-flex flex-column justify-content-center aline-center">                      
            <h1 className='text-center text-white fw-bold text-uppercase w-100 fs-2 fs-md-1 w-md-75 m-auto'>
            {props.title}
            </h1>
            <p className='text-center text-white my-3 fw-bold m-auto'>{props.disc}</p>
            <Link to='/Contact-us' className='btn btn-success fw-bold mt-2'>Get in Touch</Link>
        </div>
    </div>
    </>
  )
}

export default ServiceTopHeader