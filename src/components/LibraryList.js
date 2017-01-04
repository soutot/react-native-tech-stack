import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	componentWillMount() {
		//Handles the list item update when scrolling 
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		//Gets data to generate the list items
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	//The first argument of renderRow() is the element of
	//the list that its trying to currently render. 
	//You can choose the argument name, like 'library' or 'item'.
	//renderRow() will be called for each this.props.libraries 
	//item. Each item will be named as the argument name.
	renderRow(library) {
		return <ListItem library={library} />;
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
