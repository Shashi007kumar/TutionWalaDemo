import React, { useEffect } from 'react'
import './Contact.css'
import contactUs from '../../images/contact-us-image.jpg'


export default function Contact() {
    useEffect(() => {
      // Instantly jumps to top without showing scroll
      window.scrollTo({
        top: 0,
        behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
      });
    }, []);
  return (
    <>
        <div className="container-fluid contact">
    <div className="container-fluid contact-back">
        <h1>Contact Us</h1>
    </div>
</div>
<div className="container-fluid content">
    <h4>HELLO EVERYONE</h4>
    {/* <h1>"We help to bridging the gap between teaching talent and learning minds."</h1> */}
    <h1>"We’re Here for You-Connect with Our Team"</h1>
    <p>Have a question? Looking to find the right tutor or offer your expertise to eager learners? We’re here to help every step of the way.</p>
</div>
<div className="container-fluid connect d-flex">
     <h1 className="text-center">Get In Touch</h1>
    <div className="d-flex connect2 container">
        <div className="contactImage" ><img src={contactUs} alt=""/></div>
    <div className="connect-details"><h4>Contact Details</h4>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
    </svg> At. Kh No. 61, In Front Of Basera Near Hotel Jaya Pee Palace, Fatehabad Road, Agra.</p>
    <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
    </svg> shiva01829755@gmail.com</p>
    <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/>
    </svg> +91 6387752734  +91 8630881058</p>
    <h2 className='mt-5 pt-2' style={{fontFamily:'', letterSpacing:'1px', color:'lightgray', fontWeight:'700'}}>Lets Begin Your Journey<br/> with TutionDekho</h2>
    </div>
    </div>
</div>
        </>
  )
}
