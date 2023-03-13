import React from 'react';
import me from "../assets/dev.jpeg";
import {FaAward} from "react-icons/fa";

const aboutInfo = () => {
	return (
		<div className="Full">
		<h1>About Me</h1>
		<div className="container about__container">
			<div className="about__content">
				<div className="about__cards">
				<article className="about__card">
					<FaAward className="aboutIcons"/>
					<h5>Competitive Programming</h5>
					<small>Data Structures, Algorithms</small>
				</article>

				<article className="about__card">
					<FaAward className="aboutIcons"/>
					<h5>Web Development</h5>
					<small>Experienced with: HTML/CSS, JavaScript , ReactJS,Bootstrap</small>
				</article>

				<article className="about__card">
					<FaAward className="aboutIcons"/>
					<h5>Projects</h5>
					<small>5+ projects</small>
				</article>
				</div>
				<p>Hello! My name is Nitesh and I enjoy creating things that live on the internet. Currently, I am pursuing my BTech in Mechanical Engineering from IIT Patna.</p>

				<a href="/contact" className="CTA">Let's Talk</a>
				
			</div>
			<div className="about__me">
				<div className="about__me-image">
				<img src={me} alt="me" />
				</div>
			</div>
		</div>
		</div>
	)
}

export default aboutInfo