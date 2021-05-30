import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

type KeyProps = {
    keyAction:(val:string)=>void,
    keyType:string,
    keyValue:string
}

export const Key = ({ keyAction, keyType, keyValue }:KeyProps) => (
  <div
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
  >
    <p className="key-value">
      {keyValue}
    </p>
  </div>
);


Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
}

export default Key;