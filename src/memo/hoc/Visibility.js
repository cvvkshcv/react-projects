import React from 'react'

function Visibility({ show, component }) {
  if (!show) {
    return null;
  }
  return component;
}

export default Visibility