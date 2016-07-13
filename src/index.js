import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBUp9TWyft53-1XUS621_XmgQBuo6jRe8Q';


class App extends Component {
  constructor(props) {
    super(props);

    // State default
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // State initial update
    this.videoSearch('surfboards');

    // handlers bindings
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term,
    }, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos,
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}/>
        <VideoDetail
          video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
