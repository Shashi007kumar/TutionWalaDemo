import React, { useEffect } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import mainImage from '../../images/1041.png'
import tutor from '../../images/tutor.avif'
import student from '../../images/students.avif'
import service1 from '../../images/personalized_tutor.jpg'
import service2 from '../../images/skill-test.avif'
import service3 from '../../images/report.jpg'
import thankyou from '../../images/thankyou.jpg'


export default function Home() {
	useEffect(() => {
	  // Instantly jumps to top without showing scroll
	  window.scrollTo({
		top: 0,
		behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
	  });
	}, []);
	return (
		<>
			<div className="container-fluid background">
				<div className="container heading">
					<h1 className='fw-bold'>Welcome to <span style={{color:'rgba(108, 213, 255, 1)', letterSpacing:'-10px', fontSize:'1.5em'}}>T</span>ution<span style={{color:'rgba(108, 213, 255, 1)'}}>W</span>ala where passionate tutors and eager learners discover each other.</h1>
					<p>Empowering Students and Tutors to Discover Their Perfect Match for a Brighter Learning Journey!  Let’s make learning exciting and interactive together!</p>
					<Link to="/services"><button className="btn btn-info my-3 mx-3 fw-semibold text-white" style={{padding:'16px 85px'}}>Explore</button></Link>
					<Link to="/about"><button className="btn btn-outline-secondary my-3 mx-3 fw-semibold text-white" style={{padding:'16px 70px'}}>Know more</button></Link>
				</div>
				<div className="container-fluid image">
					<div className="imageHover">
						<img src={mainImage} className="img-fluid" alt="..." />
					</div>
				</div>
			</div>

			<div className="container-fluid provide">
				<section className="section">
					<div className="container py-1">
						<div className="h1 text-center" id="pageHeaderTitle">WHY CHOOSE US <h1 className='text-dark' style={{fontSize:'2.5em'}}>Specialized to Provide</h1><h3 className='text-center text-dark p-3'>We connect students with the perfect tutors by aligning subject expertise, learning level, teaching style, and schedule. </h3></div>


						<article className="postcard light red">
							<a className="postcard__img_link" href="#">
								<img className="postcard__img" src={tutor} alt="Image Title" />
							</a>
							<div className="postcard__text t-dark">
								<h1 className="postcard__title red"><Link to="/services">Professional Tutors</Link></h1>
								<div className="postcard__subtitle small">
									<time datetime="2020-05-25 12:00:00">
										<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
									</time>
								</div>
								<div className="postcard__bar"></div>
								<div className="postcard__preview-txt"> Empower students while growing your career. Our platform connects skilled tutors with students eager to learn. Whether you're teaching math, science, languages, or art, we'll help you find students near you who match your expertise. Flexible schedules, personalized support, and real income—your teaching journey starts here.</div>
								<Link to="/services"><button className="btn btn-info my-3 fw-semibold px-4 text-white">Apply for Tutoring</button></Link>
							</div>
						</article>
						<article className="postcard light red">
							<a className="postcard__img_link" href="#">
								<img className="postcard__img" src={student} alt="Image Title" />
							</a>
							<div className="postcard__text t-dark">
								<h1 className="postcard__title red"><Link to="/services">Knowledge Seekers</Link></h1>
								<div className="postcard__subtitle small">
									<time datetime="2020-05-25 12:00:00">
										<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
									</time>
								</div>
								<div className="postcard__bar"></div>
								<div className="postcard__preview-txt">Your academic journey deserves the perfect guide. Whether you’re preparing for exams, mastering a subject, or building confidence, our platform matches you with home tutors tailored to your needs. Learn from verified educators who bring patience, experience, and skill directly to your doorstep. Education that adapts to you.</div>
								<Link to="/services"><button className="btn btn-info my-3 fw-semibold px-4 text-white">Apply for Learning</button></Link>

							</div>
						</article>
					</div>
				</section>
			</div>
			<div className="container-fluid serviceSection">
				<div className="h1 text-center container" id="pageHeaderTitle">WHAT WE PROVIDE <h1 className='text-dark' style={{fontSize:'2.5em'}}>Our Services</h1><h3 className='text-center text-dark p-3'>We connect students with the perfect tutors by aligning subject expertise, learning level, teaching style, and schedule. </h3></div>

				<div className="container-fluid px-3 serviceElement">
					<div className="first hero">
						<img className="hero-profile-img" src={service1} alt="" />
						<div className="hero-description-bk"></div>
						<div className="hero-date">
							<div className="card-heading">
								<h4>Provide Online and Offline Tutor</h4>
							</div>
							<p>Meet your personalized tutor-whether you prefer to learn from the comfort of your home or thrive with face-to-face guidance</p>
						</div>
					</div>

					<div className="first hero">
						<img className="hero-profile-img" src={service2} alt="" />
						<div className="hero-description-bk"></div>
						<div className="hero-date">
							<div className="card-heading">
								<h4>Organize Regualar Skill Test</h4>
							</div>
							<p>Regular Skill Challenges for studends to Keep You Sharp! and it crafted to build confidence, boost problem-solving power, and ignite curiosity</p>
						</div>
						
					</div>

					<div className="first hero">
						<img className="hero-profile-img" src={service3} alt="" />
						<div className="hero-description-bk"></div>
						<div className="hero-date">
							<div className="card-heading">
								<h4>Provide Monthly Progress Report </h4>
							</div>
							<p>Monthly Student Progress Reports personalized learning experiences by offering a detailed overview of each learner’s academic development</p>
							{/* "Monthly Student Progress Reports play a vital role in shaping personalized learning experiences by offering a detailed overview of each learner’s academic development, celebrating milestones reached, identifying challenges encountered, and encouraging active collaboration among teachers, students, and parents—all with the goal of nurturing steady improvement and long-term educational success." */}
						</div>
					</div>
				</div>
				<div className="Servicebutton text-center">
				<Link to="/services"><button className="btn btn-info text-light px-5 py-3 rounded-2 fw-bolder" style={{margin:'auto'}}>View all Services</button></Link></div>
			</div>
			<div className="container connectUs p-0">
				<h1 class="text-center">THANK YOU FOR REACH OUT</h1>
				<p class="text-center px-3">We are here to help you connect us for more infomation </p>
				<div className="container connectUsdata">
					<div className="d-flex connect2 container">
        <div className="contactImage"><img src={thankyou} alt=""/></div>
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
	<h2 className='mt-5 pt-2' style={{fontFamily:'', letterSpacing:'1px', color:'lightgray', fontWeight:'700'}}>Lets Begin Your Journey<br/> with TutionWala</h2>
    </div>
    </div>
				</div>
			</div>
		</>
	)
}
