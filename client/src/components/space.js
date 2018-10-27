import React from 'react'

const Space = (props) => {
  const {name} = props;
  return (
    <li className={name}>&nbsp;</li>
  )
}

export default Space;
