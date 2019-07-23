// Language.js is a functional component for displaying a language
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Language = (props) => {
	return [
		<Row>
			<Col xs={2}>
				Sample Text
			</Col>
		</Row>,
		<Row>
			<Col xs={3}>
				Sample Text 3
			</Col>
			<Col xs={2}>
				Sample Text 2
			</Col>
			<Col xs={5}>
				Sample Text 5
			</Col>
			<Col xs={1}>
				Sample Text 1
			</Col>

		</Row>,
	]
}

export default Language;