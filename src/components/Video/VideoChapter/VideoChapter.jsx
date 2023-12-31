import PropTypes from 'prop-types';
import scss from './VideoChapter.module.scss';

const VideoChapter = ({ VChapter }) => {
  return <div className={scss.videoChapter}>{VChapter}</div>;
};

export default VideoChapter;

VideoChapter.propTypes = {
  VChapter: PropTypes.string.isRequired,
};
