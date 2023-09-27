import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faGraduationCap,
	faCode,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<FontAwesomeIcon icon={faGraduationCap} />
							<div className="work-title">
								Universty of Helsinki
							</div>
							<div className="work-subtitle">
								Web Developer Student
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<FontAwesomeIcon icon={faGraduationCap} />
							<div className="work-title">ALX Africa</div>
							<div className="work-subtitle">
								Software Engineer Student
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<FontAwesomeIcon icon={faCode} />
							<div className="work-title">HNGx</div>
							<div className="work-subtitle">
								Fronted Developer Internship
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
