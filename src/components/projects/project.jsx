import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, liveUrl, sourceCode } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						{logo.map((l, i) => (
							<img key={i} src={l} alt="logo" />
						))}
					</div>

					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-text">
							<Link to={liveUrl} target="_blank">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
									<p>live demo</p>
								</div>
							</Link>

							<Link to={sourceCode} target="_blank">
								<div className="project-link-icon1">
									<FontAwesomeIcon icon={faLink} />
									<p>source code</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
