import React from 'react';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
