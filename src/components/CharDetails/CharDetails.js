import React from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import './CharDetails.css';

const charDetails = (props) => {
  return <div>{'CHAR DETAILS ' + props.match.params.idx}</div>;
};

// charDetails.propTypes = {

// };

export default withRouter(charDetails);
