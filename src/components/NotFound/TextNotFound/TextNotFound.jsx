import PropTypes from 'prop-types';
import scss from './TextNotFound.module.scss';

const TextNotFound = ({ textNotFound }) => {
  return <p className={scss.textNotFound}>{textNotFound}</p>;
};

TextNotFound.propTypes = {
  textNotFound: PropTypes.string.isRequired,
};

export default TextNotFound;
