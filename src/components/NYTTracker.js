import React, { Component } from 'react';
import { Input } from 'reactstrap';


import { NYT_API_KEY } from "../config/ApiKeys";
import ArticleList from "./ArticleList";
import SectionSelector from "./SectionSelector";


import './NYTTracker.css';

const NYT_SECTIONS = {
	home: 'Home',
	arts: 'Arts',
	automobiles: 'Automobiles',
	books: 'Books',
	business: 'Business',
	/*fashion,
	food,
	health,
	home,
	insider,
	magazine,
	movies,
	national,
	nyregion,
	obituaries,
	opinion,
	politics,
	realestate,
	science,
	sports,
	sundayreview,
	technology,
	theater,
	tmagazine,
	travel,
	upshot,
	world*/
};

export default class NYTTracker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			displayData: [],
			section: 'home',
			filter: '',
		};

		this.handleSectionSelect = this.handleSectionSelect.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	componentDidMount() {
		this.fetchStories();
	}

	fetchStories() {
		fetch(`https://api.nytimes.com/svc/topstories/v2/${this.state.section}.json?api-key=${NYT_API_KEY}`)
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
				this.setState({data}, () => this.refreshFilteredData());
			});
	}

	handleSectionSelect(value) {
		this.setState({section: value}, () => this.fetchStories());
	}

	handleFilterChange(e) {
		const filter = e.target.value;
		
		this.setState({filter}, () => this.refreshFilteredData());
	}
	
	refreshFilteredData() {
		const ff = this.state.filter.toUpperCase();
		const displayData = this.state.data.filter(item => {
			return (item.title.toUpperCase().includes(ff) || item.abstract.includes(ff) || item.byline.includes(ff))
		});
		this.setState({displayData});
	}

	render() {
		return (<div className="mt-5">
			<h1>New York Times Top Stories</h1>
			
			<div className="filters-group">
			<SectionSelector
				sections={NYT_SECTIONS}
				selected={this.state.section}
				onSelect={this.handleSectionSelect}
			/>
			<Input placeholder="filter" onChange={this.handleFilterChange}/>
			</div>
				
			<ArticleList articles={this.state.displayData}/>
		</div>);
	}
}
