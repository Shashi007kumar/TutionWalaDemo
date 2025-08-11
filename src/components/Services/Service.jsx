import React, { useEffect } from 'react'
import './Service.css'

export default function Service() {
  useEffect(() => {
  // Instantly jumps to top without showing scroll
  window.scrollTo({
    top: 0,
    behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
  });
}, []);


  return (
    <>
      <div className="servicesBack">
        <img src="src/images/hometuter.jpg" alt="" />
      </div>
      <div className="services">
        <div className="textBack">
          <h1 className='text-center'>Our Services</h1>
          <p className='text-light text-center'>Explore our services to know more about what we are doing actually</p>
          {/* Explore Our Services—Where Your Goals Shape the Experience */}


        </div>
      </div>
      <div className="service2 pt-5 ">
        <div className="main">
          <ul className="cards">

            <li className="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/tutor.avif" alt="A tutor image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Provide Online and Offline Tutor</h4>
                    <p>Meet your personalized tutor-whether you prefer to learn from the comfort of your home or thrive with face-to-face guidance, this isn’t just tutoring. It’s mentorship molded to fit your lifestyle, your academic goals, and your personal growth aspirations. From exam anxiety to time management, we guide students in both academic and emotional growth.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/skill-test.avif" alt="Skill test image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Organized Skill Test on Regular Basis</h4>
                    <p>Regular Skill Challenges for studends to Keep You Sharp! and it crafted to build confidence, boost problem-solving power, and ignite curiosity. These challenges are catalysts for building habits of curiosity and perseverance. Every session is designed to help students move beyond passive learning and into active exploration.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/report.jpg" alt="Progress Report image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Provide Monthly Progress Report</h4>
                    <p>Our Monthly Student Progress Reports are designed to offer a richly detailed and holistic view of each learner’s academic journey. These reports go far beyond just grades-they map individual progress, highlight strengths, identify areas for improvement, and recommend tailored strategies to enhance learning outcomes.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="main">
          <ul className="cards">

            <li className="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/communication.png" alt="Commuincation module image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Communication Practice Module</h4>
                    <p>Our English communication practice isn’t just about fluency—it’s about finding your rhythm, refining your tone, and owning your words. Choose your challenge: role-play a real-life situation, debate a trending topic, or narrate your own story. With interactive exercises tailored to your pace, every session is a chance to unlock fluency and spark expression.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/emrging_tech_update.jpeg" alt="Emerging tech image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Latest/Emerging Skills and Tech Updates</h4>
                    <p>Dive into the pulse of innovation with our real-time stream of the newest, most relevant skill trends and technology breakthroughs—curated to keep you informed, inspired, and ahead of the curve. A professional navigating rapid change, or a tech enthusiast tracking future possibilities, this feed is your daily dose of forward-thinking insights.</p>
                    
                  </div>
                </div>
              </div>
            </li>
            <li clasNames="cards_item">
              <div className="card" tabindex="0">
                <div className="card_image"><img src="src/images/Academic_growth.jpg" alt="academic growth image" /></div>
                <div className="card_content">
                  <div className="card_text">
                    <h4>Single Solution for Academic & Personal Growth</h4>
                    <p>Our service brings together academic support and skill-building tools under one roof-so students can thrive not just in exams, but in life. From smart study guides, progress tracking, and concept boosters to confidence-building challenges, personality development tips, and communication practice, we offer a unified experience that caters to every aspect of a learner’s journey. </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='suggestion'>
          <section className="get-in-touch">
          <h1 className="title">Feel free to Add any Suggestion or Feedback</h1>
          <form className="contact-form row" to="/" method='post'>
            <div className="form-field col-lg-6">
              <input id="name" className="input-text js-input" type="text" required/>
                <label className="label" for="name">Name</label>
            </div>
            <div className="form-field col-lg-6 ">
              <input id="email" className="input-text js-input" type="email" required/>
                <label className="label" for="email">E-mail</label>
            </div>
            <div className="form-field col-lg-6 ">
              <input id="message" className="input-text js-input" type="text" required/>
                <label className="label" for="message">optional</label>
            </div>
            <div className="form-field col-lg-6 ">
              <input id="phone" className="input-text js-input" type="text" required/>
                <label className="label" for="phone">Contact Number</label>
            </div>
            <div className="form-field col-lg-12">
              <label  htmlFor="message" style={{fontSize:'18px', fontWeight:'400', color:'#2469ab',marginBottom:'5px',marginLeft:'8px'}}>Write Here</label>
              <textarea name="" id="message" cols="131" rows="5" style={{border:'2px solid #2469ab',padding:'4px'}}>write your message</textarea>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" value="Submit"/>
            </div>
          </form>
        </section>
        </div>
      </div>
    </>
  )
}
