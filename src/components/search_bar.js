//{} means pull off the property called component as a var called Component
import React, { Component } from 'react';

//gives new class all the functionality of React.component
//render defines methods in a class
//Component replaces React.Component
class SearchBar extends Component {
  //all js classes have special function called constructor. gets called everytime theres a new instance of class.
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // makes input a controlled form element(component), changes after re-render
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
