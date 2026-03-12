import React from 'react'

const ItemDate = (props) => {
  return (
    <div>
      <span>{props.date}</span>
      <span>{props.month}</span>
      <span>{props.year}</span>
    </div>
  )
}

export default ItemDate
