// LanguageContainer.js is a component that 
// displays info about the languages I know

import React, { Component } from 'react';
import Language from './Language';
import { Container, Row, Col } from 'react-bootstrap';
import languages from '../static/data/language_data'


class LanguageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: languages
		}
	}

	render() {
		return (
			<Container>
				{this.state.languages.map(lang => (
					<Row>
						<Language language={lang} />
					</Row>
				))}
			</Container>
		)
	}
}

export default LanguageContainer;
