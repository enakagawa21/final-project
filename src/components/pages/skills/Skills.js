import React from "react";

import { Link } from "react-router-dom";
// import "./Skills.css";

function Skills({
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
				} id='skills'
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
								
									
								
									{description.split("<br>").map((p) => <p className={
										lightTextDescription
											? "home__hero-subtitle"
											: "home__hero-subtitle dark"
									}>{p}</p>)}
							
								<div className="bottom-line">{topLine}</div>

								{/* <Link to={"/sign-up"}>
									<Button buttonSize="btn--wide" buttonColor="red">
										{buttonLabel}
									</Button>
								</Link> */}
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

export default Skills;
