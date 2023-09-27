import React from "react";

import { Link } from "react-router-dom";

import jsonImg from "../assets/json.jpg";
import jsImg from "../assets/js.jpg";
import dnsImg from "../assets/dns.jpg";
import pos from "../assets/ps.jpg";

const article_1 = () => {
	return {
		date: "11 July 2023",
		title: "JSON: A Comprehensive Guide to JavaScript Object Notation",
		description:
			"JSON, short for JavaScript Object Notation, is a popular data format used for structuring and transmitting data in web applications. It is a light weight and human-readable format that is easy to understand and work with.",
		keywords: [
			"JSON",
			"JavaScript",
			"Web development Tutorial",
			"Odo Peter Ebere",
		],

		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							JSON, short for JavaScript Object Notation, is a
							popular data format used for structuring and
							transmitting data in web applications. It is a light
							weight and human-readable format that is easy to
							understand and work with. In this comprehensive
							guide, we will explore all aspects of JSON,
							including its syntax, characteristics, and practical
							applications. Read full article here{" "}
							<Link
								to="https://dev.to/odopeter/json-a-comprehensive-guide-to-javascript-object-notation-267k"
								style={{
									color: "#098d7e",
								}}
							>
								Read full article here...
							</Link>
						</p>
					</div>
					<img
						src={jsonImg}
						alt="json-img"
						style={{ width: "80%" }}
					/>
				</div>
			</React.Fragment>
		),
	};
};

const article_2 = () => {
	return {
		date: "3 July 2023",
		title: "Mastering the JavaScript Console Log Method: Your Ultimate Guide to Error-Free Debugging",
		description:
			"When it comes to JavaScript debugging, the console.log() method is a developer's best friend. It allows you to output messages and information to the browser's debugging console, making it an essential tool for troubleshooting and understanding the behavior of your code.",
		style: ``,
		keywords: [
			"JavaScript",
			"Debugging",
			"Console Methods",
			"Odo Peter Ebere",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							When it comes to JavaScript debugging, the
							console.log() method is a developer's best friend.
							It allows you to output messages and information to
							the browser's debugging console, making it an
							essential tool for troubleshooting and understanding
							the behavior of your code. In this article, we will
							dive deep into the various features and techniques
							associated with the console.log() method, going
							beyond the basics and uncovering tips and tricks
							that you won't find in most tutorials. Read full
							article here{" "}
							<Link
								to="https://dev.to/odopeter/mastering-the-javascript-console-log-method-your-ultimate-guide-to-error-free-debugging-2j00"
								style={{
									color: "#098d7e",
								}}
							>
								Read full article here...
							</Link>
						</p>
					</div>
					<img src={jsImg} alt="js-img" style={{ width: "80%" }} />
				</div>
			</React.Fragment>
		),
	};
};

const article_3 = () => {
	return {
		date: "12 September 2023",
		title: "Maintaining a positive mindset",
		description:
			"Maintaining a positive mindset is crucial for overall well-being and success in life. Let's explore some effective strategies to stay positive amidst challenges and uncertainties, especially in these perilous times.",
		style: ``,
		keywords: ["Positivity", "Mindset", "Thinking"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							Maintaining a positive mindset is crucial for
							overall well-being and success in life. Let's
							explore some effective strategies to stay positive
							amidst challenges and uncertainties, especially in
							these perilous times. 💬 One of the first steps
							towards cultivating positivity is practicing
							gratitude. Taking the time to acknowledge and
							appreciate the things we have in our lives can shift
							our focus from what's lacking to what's abundant.
							This simple act can help reframe our perspective and
							foster a more positive outlook.{" "}
							<Link
								to="https://www.linkedin.com/posts/peter-odo-254aa026b_maintaining-a-positive-mindset-is-crucial-activity-7104948932614467585-FmxK?utm_source=share&utm_medium=member_desktop"
								style={{
									color: "#098d7e",
								}}
							>
								Read full article here...
							</Link>
						</p>
					</div>
					<img src={pos} alt="dns-img" style={{ width: "80%" }} />
				</div>
			</React.Fragment>
		),
	};
};

const article_4 = () => {
	return {
		date: "19 September 2023",
		title: "What happens when you type 'google.com' in your browser and press Enter",
		description:
			"Have you ever wondered what happens when you type “google.com” into your browser and press enter? It may seem like a simple task, but there is actually quite a bit of activity going on behind the scenes. Let us look at some of the activities.",
		style: ``,
		keywords: ["Programming", "Google", "IP address", "Domain Name System"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							Have you ever wondered what happens when you type
							“google.com” into your browser and press enter? It
							may seem like a simple task, but there is actually
							quite a bit of activity going on behind the scenes.
							Let us look at some of the activities. When you type
							in google.com into your web browser and hit enter,
							it triggers something called a DNS (Domain Name
							System) lookup which helps to translate that URL
							address from words to numbers (the IP address
							associated with Google’s website – is 74.125.239.2)
							so computers can understand it better.{" "}
							<Link
								to="https://www.linkedin.com/posts/peter-odo-254aa026b_what-happens-when-you-type-googlecom-in-activity-7109303571002589184-oStf?utm_source=share&utm_medium=member_desktop"
								style={{
									color: "#098d7e",
								}}
							>
								Read full article here...
							</Link>
						</p>
					</div>
					<img
						src={dnsImg}
						alt="positive-img"
						style={{ width: "80%" }}
					/>
				</div>
			</React.Fragment>
		),
	};
};

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
