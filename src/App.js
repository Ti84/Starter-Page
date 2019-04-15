import React, { Component } from 'react';
import './App.scss';
import LinkList from './LinkList/LinkList';
import { listOfLinks } from './data/Links';
import TimePanel from './TimePanel/TimePanel';
import SearchPanel from './SearchPanel/SearchPanel';

class App extends Component {
  state = {
    date: '',
    time: ''
  };
  componentDidMount() {
    setInterval(() => {
      const dt = new Date();
      this.setState({
        date: dt.toLocaleDateString(),
        time: dt.toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <TimePanel date={this.state.date} time={this.state.time} />
          <SearchPanel />
          <LinkList links={listOfLinks} />
        </div>
      </div>
    );
  }
}

export default App;
