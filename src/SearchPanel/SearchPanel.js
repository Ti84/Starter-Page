import React, { Component } from 'react';
import './SearchPanel.scss';

class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }
  onSubmit = e => {
    const prefixUrl = 'https://www.google.com/search?q=';
    e.preventDefault();
    const url = `${prefixUrl}${this.state.searchValue}`;
    window.open(url);
    this.setState({
      searchValue: ''
    });
  };

  onChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <div className="search-input mb-50">
        <form onSubmit={this.onSubmit} noValidate>
          <input
            type="text"
            className="lg-text-input"
            name="google-search"
            placeholder="Google"
            value={this.state.searchValue}
            onChange={this.onChange}
          />
          <input type="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default SearchPanel;
