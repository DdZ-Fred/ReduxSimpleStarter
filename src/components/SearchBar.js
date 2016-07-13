import React, { Component, PropTypes } from 'react';

const propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}/>
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;
export default SearchBar;
