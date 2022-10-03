import { Alert } from "bootstrap";
import React, { useState ,useEffect } from "react";
import { v4 as uuid } from "uuid";
import Table from "./Table";

//get localdata from local storage
const getLocalData = () => {
  const list = localStorage.getItem("mylist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const InputFeilds = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [table, setTable] = useState([]);
  const [storeIdForUpdate, setStoreIdForUpdate] = useState();
  const[changeBtn,setChangeBtn] =useState(false)

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preventValue) => {
      return {
        ...preventValue,
        [name]: value,
      };
    });
    // console.log(data)
  };

  const handleButton = () => {
    if(!data ){
        alert("please fill all feilds")
    }
    else if (data &&changeBtn ){
        setTable(
        table.map((val)=>{
          
            if(val.id === storeIdForUpdate){
                return {...val,name:data.name,email:data.email}
            }
            return val;
            
        }))
        setData({  name: " ", email: " " })
        setChangeBtn(false)
        console.log("inside if")
    }
    else{
    data.id = uuid();
    setTable([...table, data]);
    setData({ name: " ", email: " " });
    
    console.log("inside else")

   }
  };
  const deleteHandle = (id) => {
    const updatedList = table.filter((curData) => {
      return curData.id !== id;
    });
    setTable(updatedList);
  };

  const updateHandle = (id) => {
    const findd = table.find((val) => {
      return val.id === id;
    });
    setData({
      name: findd.name,
      email: findd.email,
    });
   setStoreIdForUpdate(id);
   setChangeBtn(true)
  
  };


   //set data in local storage...
  //  useEffect(() => {
  //   localStorage.setItem("mylist", JSON.stringify(table));
  // }, [table]);


  return (
    <div className="tbl d-flex">
      <div className="container col-lg-4 mt-5 ms-5 bg-dark py-5 px-5 ">
        <div className="mb-3">
          <label className="form-label text-white">Name :</label>
          <input
            type="text"
            className="form-control"
            onChange={inputEvent}
            value={data.name}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email :</label>
          <input
            type="email"
            className="form-control"
            onChange={inputEvent}
            value={data.email}
            name="email"
          />
        </div>
        {changeBtn ?  <button
          className="btn btn-secondary col-lg-12 mt-3"
          onClick={handleButton}
        >
          Update
        </button> :
        <button
          className="btn btn-primary col-lg-12 mt-3"
          onClick={handleButton}
        >
          Submit
        </button>
        }
      </div>

      <Table
        data={data}
        table={table}
        deleteHandle={deleteHandle}
        updateHandle={updateHandle}
      />
    </div>
  );
};

export default InputFeilds;
