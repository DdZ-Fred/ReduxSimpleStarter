import React, { PropTypes } from 'react';

const propTypes = {
  videos: PropTypes.array.isRequired,
};

function VideoList({ videos }) {
  return (
    <ul className="col-md-4 list-group">
      {`There are ${videos.length} videos`}
    </ul>
  );
}

VideoList.propTypes = propTypes;
export default VideoList;
