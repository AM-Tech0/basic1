import React from 'react'
import Item from './Item';
import Date from './ItemDate';
const Card = (props) => {
    const data=props.data;
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
       {/* <h1 className="text-4xl font-bold text-blue-600">
         React 18 + Tailwind CSS Working 🚀
       </h1> */}
       {/* <Item name="Aman"></Item>
       <Date day="08" month="Mar" year="2004"></Date> */}
       <Item name={data[0].name}></Item>
       <Date day={data[0].day} month={data[0].month} year={data[0].year}></Date>
      <Item name={data[1].name}></Item>
       <Date day={data[1].day} month={data[1].month} year={data[1].year}></Date>
       <Item name={data[2].name}></Item>
       <Date day={data[2].day} month={data[2].month} year={data[2].year}></Date>
     </div>
    </div>
  )
}

export default Card
