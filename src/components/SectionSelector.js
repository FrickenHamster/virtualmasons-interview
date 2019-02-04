import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


const SelectorOption = ({title, value, onClick, active}) => {
	return (<DropdownItem active={active} onClick={onClick} value={value}>{title}</DropdownItem>)
};

export default class SectionSelector extends Component {

	static propTypes = {
		sections: PropTypes.object,
		selected: PropTypes.string,
		onSelect: PropTypes.func,
	};
	
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		
		this.handleToggle = this.handleToggle.bind(this);
		this.handleOptionClick = this.handleOptionClick.bind(this);
	}
	
	handleToggle() {
		this.setState({open: !this.state.open});
	}
	
	handleOptionClick(e) {
		this.props.onSelect(e.target.value);
	}
	
	render() {
		const children = [];
		for (const key in this.props.sections) {
			const title = this.props.sections[key];
			children.push(<SelectorOption 
				key={key} 
				title={title}
				value={key}
				active={key === this.props.selected}
				onClick={this.handleOptionClick}
			/>)
		}

		return (<Dropdown isOpen={this.state.open} toggle={this.handleToggle} className="mb-3"> 
			<DropdownToggle caret>
				Section: {this.props.sections[this.props.selected]}
			</DropdownToggle>
			<DropdownMenu>
				{children}
			</DropdownMenu>
		</Dropdown>)
	}
}

