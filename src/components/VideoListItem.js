import React, { PropTypes } from 'react';

const propTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

function VideoListItem({ video, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

VideoListItem.propTypes = propTypes;
export default VideoListItem;
