import React from 'react';
import PropTypes from 'prop-types';

import './CharInfoItem.css';

/**
 * Renders the label on the left and all the values on the right. The values prop must be an array, even if it's only one value.
 *
 * @param {*} props
 */
const charInfoItem = (props) => {
  let dynamicStyle = { height: `${30 * props.values.length}px`, borderBottom: '1px solid #ccc' };

  if (props.first) {
    dynamicStyle = { ...dynamicStyle, borderTop: '1px solid #ccc' };
  }

  return (
    <div className='char-info-item-wrapper' style={dynamicStyle}>
      <div className='grid'>
        <div className='label' style={{ lineHeight: `${30 * props.values.length}px` }}>
          <p>{props.label}</p>
        </div>
        <div className='values'>
          {props.values.map((value) => (
            <p key={value} className='value'>
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

charInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default charInfoItem;
