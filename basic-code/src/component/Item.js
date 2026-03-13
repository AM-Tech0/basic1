import React from 'react'

const Item = (props) => {
  return (
    <div class="flex flex-col bg-slate-700 w-full text-white justify-center items-center gap-2 m-2">
      {/* <h1>Nirma</h1> */}
      <p>{props.name}</p>
    </div>
  )
}

export default Item
