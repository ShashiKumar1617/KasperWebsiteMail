import React from 'react'
import HighQuality from '../../../../Assets/Images/Services/WebDevelopment/HighQuality.png'
import Satisfaction from '../../../../Assets/Images/Services/WebDevelopment/Satisfaction.png'
import Unique from '../../../../Assets/Images/Services/WebDevelopment/Unique.png'
// import './ServiceSubComp.css'
const ServiceWhyComp = () => {
  return (
    <>
    <div className="service-whyus">
        <div className="container pt-3 pb-1">
        <div className="highlights-text text-center">
            <h6 className='text-white'>
              OUR STANDARD
              <span className="highlights-text-bg">STANDARD</span>
            </h6>
          </div>
            <p className='fw-bold'>Empower Your Vision with Our Web App Development Experts</p>
            <div className="row py-0">
                <div className="col-12 col-md-4 py-1">
                    <div className="img-container w-10">
                        <img className='w-25 p-2' src={HighQuality} alt="" />
                    </div>
                    <div className="text-container">
                        <p className='text-center py-2 px-3'>We are a team of experienced and knowledgeable web app developers passionate about helping companies to grow. To develop high-quality, secure and scalable web apps that fulfil our clients' objectives.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-1">
                    <div className="img-container  w-10">
                        <img className='w-25 p-2' src={Unique}  alt="" />
                    </div>
                    <div className="text-container">
                        <p className='text-center py-2 px-3'>Every business is unique, so we take the time to understand your needs and goals before we start development. We work with you every step of the way to ensure that your web application is exactly what you want it to be.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-1">
                    <div className="img-container w-10">
                        <img className='w-25 p-2'src={Satisfaction}  alt="" />
                    </div>
                    <div className="text-container">
                        <p className='text-center py-2 px-3'>Additionally, we are dedicated to offering first-rate customer service. We provide a satisfaction guarantee on all our services and are always accessible to address your questions and concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceWhyComp