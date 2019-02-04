import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

import './ArticleList.css';

const ArticleItem = ({item}) => {
	return (<ListGroupItem className="mb-2">
		<h4><a href={item.url} target="_blank">{item.title}</a></h4>
		<Row>
			<Col sm="3" m="1">
				<img src={item.tbUrl} className="articleItem-image"/>
			</Col>
			<Col sm="9" m="11">
				<h6>{item.abstract}</h6>
				<div>{item.byline}</div>
			</Col>
		</Row>
	</ListGroupItem>)
};

class ArticleList extends Component {
	
	static propTypes = {
		articles: PropTypes.array
	};
	
	render() {
		const children = this.props.articles.slice(0, 30).map(item => (<ArticleItem key={item.id} item={item}/>));
		return (
			<ListGroup>
				{children}
			</ListGroup>
		);
	}
}

export default ArticleList;


