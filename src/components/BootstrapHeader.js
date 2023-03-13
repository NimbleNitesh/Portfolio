import React from "react";
import Typed from "react-typed";
import CV from "./Nitesh_Resume.pdf";

const BootstrapHeader = () => {
	return (
		<div className="header-wrapper">
		<div className="mainInfo">
			<h1>Hi, my name is</h1>
			<h2>Nitesh Srivastava</h2>
			<h3>I'm a </h3>
			<Typed 
				className="typed-text"
				strings={["Competitive Programmer", "Web Developer", "ML Enthusiast"]}
				typeSpeed={100}
				backSpeed={50}
				loop
			/>
			<p>I am a highly motivated and ambitious person, always ready to try out new things. I am highly passionate about Competitive Programming and have been pursuing the sport for about 1.5 years. I am actively looking for summer internships in software engineering domain. </p>
			<a href={CV} download className="CTA">Download CV </a>
		</div>
		</div>
	)
}

export default BootstrapHeader