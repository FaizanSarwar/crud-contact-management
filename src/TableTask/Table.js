import React from 'react'

const Table = ({table,data}) => {
  return (
    <>
    <table class="table mt-5 mx-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data ? table.map((val,index)=>{
            return(
                <>
                <tr>
             <th scope="row" key={index}>{index+1}</th>
             <td>{val.name}</td>
             <td>{val.email}</td>
             <td>
             <button type="button" class="btn btn-warning me-2">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>          
             </td>
             </tr>         
             </>

       ) }) :  <h1>NO DATA</h1>}
   
        
  </tbody>
</table>
    </>
    
  )
}

export default Table