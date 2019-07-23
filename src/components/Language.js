// Language.js is a functional component for displaying a language
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Language = (props) => {
	let stars = []
	for(let i=0; i<props.language.level; i++) {
		stars.push(i);
	}

	return [
		<Col xs={4}>
			{props.language.name}
		</Col>,
		<Col xs={4}>
			{stars.map(i => '*')}
		</Col>,
		<Col xs={4}>
			<Image src={props.language.logo} fluid/>
		</Col>
	];
}

export default Language;