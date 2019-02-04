import React, { Component } from 'react';

import { NYT_API_KEY } from "../config/ApiKeys";
import ArticleList from "./ArticleList";


export default class NYTTracker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	
	componentDidMount() {
		fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYT_API_KEY}`)
			.then(response => response.json())
			.then(json => {
				const data = json.results.map(item => {
					let tbUrl;
					for (const mm of item.multimedia) {
						if (mm.format === 'thumbLarge') {
							tbUrl = mm.url;
							break;
						}
						if (mm.format === 'Standard Thumbnail') {
							tbUrl = mm.url;
						}
					}
					/*if (!tbUrl)
						tbUrl = item.multimedia[0].url;*/
					return {
						id: item.short_url ? item.short_url : item.url,
						title: item.title,
						abstract: item.abstract,
						byline: item.byline,
						tbUrl,
						url: item.short_url ? item.short_url : item.url,
					}
				});
				this.setState({data});
			});
	}
	
	render() {
		return (<div>
			<h1>New York Times Top Stories</h1>
			<ArticleList articles={this.state.data}/>
		</div>);
	}
}
