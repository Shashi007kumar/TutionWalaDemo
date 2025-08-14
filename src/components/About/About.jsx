import React, { useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import boyImage from '../../images/about_st-removebg.png'

export default function About() {
  useEffect(() => {
    // Instantly jumps to top without showing scroll
    window.scrollTo({
      top: 0,
      behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
    });
  }, []);
  return (
    <>
      <div classNameName="conatiner-fluid aboutsection">
        <section class="about-section">
          <div className="container">
            <div className="row" style={{marginBottom:'70px'}}>
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span class="title">About TutionWala</span>
                    <h2>Our mission is to connect passionate educators with curious minds.</h2>
                  </div>
                  <div className="text">At TutionWala, we’ve built something deeply human: a space where passionate tutors and curious students come together, not just to teach and learn, but to grow through meaningful one-on-one interaction. Whether you're a seasoned educator looking to inspire locally or a student searching for guidance beyond the classroom, you're home here.
</div>
                  <div className="text">
                    At the heart of TutionWala is a dream: to see every neighborhood buzzing with learning, to witness homes turning into mini classrooms filled with laughter and insight, and to help people realize that meaningful education doesn’t require big buildings—just big hearts.

                  </div>
                  <div className="btn-box">
                    <Link to="/contact" class="theme-btn btn-style-one btn-info">Contact Us</Link>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <figure class="image-1"><Link href="" class="lightbox-image" data-fancybox="images"><img src={boyImage} alt=""/></Link></figure>

                </div>
              </div>

            </div>
            <div className="sec-title">
              <span class="title">Our Purpose</span>
            </div>
            <div className="text">
              We recognized a need—one that often goes unnoticed. Brilliant tutors are scattered across neighborhoods, ready to share their skills and wisdom, while countless learners seek support that feels personal, patient, and tailored. Our platform bridges this gap by making learning local again, and by turning homes into hubs of knowledge and curiosity.<br/>
              <i>Through our network:</i>
            </div>
            <div className="text">
               🎓 Tutors can teach on their own terms, with full autonomy and purpose.<br/>
               🧠 Students gain access to mentors who connect with their pace and ambitions.<br/>
               👨‍👩‍👧 Families find trustworthy, nearby educators—eliminating long commutes and generic learning solutions.

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
