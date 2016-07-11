import React, { Component, PropTypes } from 'react';

const propTypes = {

};

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}/>
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;
export default SearchBar;
