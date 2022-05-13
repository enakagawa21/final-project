import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact({
	lightBg,
	topLine,
	lightText,
	lightTextDescription,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	imgStart,
}) {
	return (
		<>
			<div className={
					lightBg ? "home__hero-section" : "home__hero-section darkBg"
				} id='contact'
			>
				<div className="container">
					<div
						className="row home__hero-row"
						style={{
							display: "flex",
							flexDirection:
								imgStart == "start" ? "row-reverse" : "row",
						}}
					>
						<div className="col">
							<div className="home__hero-text-wrapper">
								<div className="top-line">{topLine}</div>
								<h1
									className={lightText ? "heading" : "heading dark"}
								>
									{headline}
								</h1>
								<div className='hero__form-container'>
								<form className='form-contact'>
									<input type="text" className='name-input' placeholder='FIRST NAME' name='userFirstName'/>
									<input type="text" className='name-input' placeholder='LAST NAME' name='userLastName'/>
									<input type="text" className='email-input' placeholder='E-MAIL' name='userEmail'/>
									<input type="text" className='message-input' placeholder='MESSAGE' name='userMessage'/>
									
								</form><div className="bottom-line">{topLine}</div>

								<a href={"/sign-up"}>
									<Button buttonSize="btn--wide" buttonColor="red">
										{buttonLabel}
									</Button>
								</a>
							</div>
								</div>
								
						</div>
						<div className="col">
							<div className="home__hero-img-wrapper">
								<img src={img} alt={alt} className="home__hero-img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
