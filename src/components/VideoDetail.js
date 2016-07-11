import React, { PropTypes } from 'react';

const propTypes = {
  video: PropTypes.object.isRequired,
};

function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

VideoDetail.propTypes = propTypes;
export default VideoDetail;
