import React, { Component } from 'react';
class App extends Component {
  state ={count:0};
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  // }
  increment=()=> {
    this.setState({ count: this.state.count + 1 });

  }
  decrement=()=> {
    if(this.state.count>0){
       this.setState({ count: this.state.count - 1 });
    }
   
  }
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind CSS is working 🚀
        </h1>
        <div className='flex flex-col m-6 gap-5  '>
          <h1  className="text-3xl font-bold text-center">Count :{this.state.count}</h1>
          <div className='flex gap-2'>
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={this.increment}>Increment</button>
          <button  className="px-4 py-2 bg-red-500 text-white rounded" onClick={this.decrement}>Decrement</button>
          </div> 
        </div>
      </div>
    );
  }

}

export default App;
// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center gap-4">
//         <h1 className="text-3xl font-bold">Count: {this.state.count}</h1>

//         <button
//           onClick={this.increment}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Increment
//         </button>

//         <button
//           onClick={this.decrement}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
