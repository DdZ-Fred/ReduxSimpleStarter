import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

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
    YTSearch({
      key: API_KEY,
      term: 'surfboards',
    }, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos,
      });
    });

    // handlers bindings
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
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
