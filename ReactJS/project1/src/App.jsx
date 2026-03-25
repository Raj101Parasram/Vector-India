import './App.css'
let App=()=>{
  let obj={
    'name':'amar',
    "age":25,
    "dept":'ME',
    "marks":87
  }
  return(<div className="card">
    <p>Name:{obj.name}</p>
    <p>Age:{obj.age}</p>
    <p>Dept:{obj.dept}</p>
    <p>Marks:{obj.marks}</p>
    <button>Update</button>
  </div>)
}
export default App