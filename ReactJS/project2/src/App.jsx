import './App.css'
import Header from './header'

let arr=[
  {
    "id": 101,
    "name": "Raj",
    "age": 22,
    "marks": {
      "maths": 85,
      "python": 90,
      "ml": 78
    },
    "isActive": true
  },
  {
    "id": 102,
    "name": "Amit",
    "age": 23,
    "marks": {
      "maths": 75,
      "python": 88,
      "ml": 82
    },
    "isActive": true
  },
  {
    "id": 103,
    "name": "Sneha",
    "age": 21,
    "marks": {
      "maths": 92,
      "python": 95,
      "ml": 89
    },
    "isActive": true
  },
  {
    "id": 104,
    "name": "Kiran",
    "age": 24,
    "marks": {
      "maths": 68,
      "python": 74,
      "ml": 70
    },
    "isActive": false
  },
  {
    "id": 105,
    "name": "Priya",
    "age": 22,
    "marks": {
      "maths": 88,
      "python": 91,
      "ml": 84
    },
    "isActive": true
  },
  {
    "id": 106,
    "name": "Arjun",
    "age": 23,
    "marks": {
      "maths": 79,
      "python": 85,
      "ml": 80
    },
    "isActive": true
  },
  {
    "id": 107,
    "name": "Meena",
    "age": 21,
    "marks": {
      "maths": 95,
      "python": 97,
      "ml": 93
    },
    "isActive": true
  },
  {
    "id": 108,
    "name": "Rahul",
    "age": 24,
    "marks": {
      "maths": 70,
      "python": 72,
      "ml": 68
    },
    "isActive": false
  },
  {
    "id": 109,
    "name": "Anjali",
    "age": 22,
    "marks": {
      "maths": 84,
      "python": 89,
      "ml": 86
    },
    "isActive": true
  },
  {
    "id": 110,
    "name": "Vikram",
    "age": 23,
    "marks": {
      "maths": 76,
      "python": 81,
      "ml": 79
    },
    "isActive": true
  }
]
let App=()=>{
  return(
    <div>
      <Header/>
      <table border="1px solid black" cellPadding="10px" cellSpacing="0px">
        <tr><th>ID</th><th>Name</th><th>Age</th><th>Maths</th><th>Python</th><th>ML</th><th>IsActive</th></tr>
        {
          arr.map((obj)=>{
            return(<tr key={obj.id}>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.age}</td>
            <td>{obj.marks.maths}</td>
            <td>{obj.marks.python}</td>
            <td>{obj.marks.ml}</td>
            <td>{""+obj.isActive}</td>
          </tr>
          )
        })
      }
    </table></div>
  )
}

export default App



// import { useState } from "react"

// let arr = [
//   { id: 101, name: "Raj", age: 22 },
//   { id: 102, name: "Amit", age: 23 }
// ]

// let App = () => {

//   const [students, setStudents] = useState(arr)

//   return (
//     <div>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((obj) => (
//             <tr key={obj.id}>
//               <td>{obj.id}</td>
//               <td>{obj.name}</td>
//               <td>{obj.age}</td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </div>
//   )
// }

// export default App