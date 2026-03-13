import React from 'react';
const ItemDate = (props) => {
  return (
    <div class="flex justify-center items-center bg-slate-500 w-full">
      {/* <span>20</span>
      <span>June</span>
      <span>2000</span> */}
      <span>{props.day}</span>
      <span>{props.month}</span>
      <span>{props.year}</span>
    </div>
  )
}
export default ItemDate;
