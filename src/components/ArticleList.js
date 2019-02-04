import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

const ArticleItem = ({item}) => {
	return (<ListGroupItem>
		<h4><a href={item.url} target="_blank">{item.title}</a></h4>
		<Row>
			<Col xs="4" s="2" m="1">
				<img src={item.tbUrl} style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}}/>
			</Col>
			<Col xs="8" s="10" m="11">
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


