import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Hero1.css";


import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin
   } from 'react-icons/fa';


function Hero1({
	lightBg,
	topLine,
	lightText,
	lightTextDescription,
	headline,
	description,
	img,
	alt,
	imgStart,
}) {
	return (
		<>
			<div className={
					lightBg ? "home__hero-section1" : "home__hero-section1 darkBg1"
				}
			>
				<div className="container1">
					<div
						className="row1 home__hero-row1"
						style={{
							display: "flex",
							flexDirection:
								imgStart == "start" ? "row-reverse" : "row",
						}}
					>
						<div className="col1">
							<div className="home__hero-text-wrapper1">
								<div className="top-line1">{topLine}</div>
								<h1
									className={lightText ? "heading1" : "heading1 dark"}
								>
									{headline}
								</h1>
								<p
									className={
										lightTextDescription
											? "home__hero-subtitle1"
											: "home__hero-subtitle dark1"
									}
								>
									{description}
								</p>
								<div className='social-icons'>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              to='https://www.linkedin.com/in/enakagawa21/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>




								{/* <Link to={"/sign-up"}>
									<Button buttonSize="btn--wide" buttonColor="red">
										{buttonLabel}
									</Button>
								</Link> */}
							</div>
						</div>
						<div className="col1">
							<div className="home__hero-img-wrapper1">
								<img src={img} alt={alt} className="home__hero-img1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero1;
