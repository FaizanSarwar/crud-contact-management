import React, {  useState } from 'react'
import Table from './Table'


const InputFeilds = () => {
    const [data, setData] = useState({
        name: '',
        email: '',

    })
    const [table, setTable] = useState([])

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preventValue) => {
            return {
                ...preventValue,
                [name]: value,
            }
        })
        // console.log(data)

    }

    const handleButton = () => { 
        setTable([...table, data])
        setData({  name: " ", email: " " })

    }


    return (
        <div className='tbl d-flex'>
            <div className='container col-lg-4 mt-5 ms-5 bg-dark py-5 px-5 '>
                <div className="mb-3">
                    <label className="form-label text-white">Name :</label>
                    <input type="text" className="form-control" onChange={inputEvent} value={data.name} name="name" />

                </div>
                <div className="mb-3">
                    <label className="form-label text-white" >Email :</label>
                    <input type="email" className="form-control" onChange={inputEvent} value={data.email} name="email" />

                </div>
                <button className="btn btn-primary col-lg-12 mt-3" onClick={handleButton}>Submit</button>
            </div>
            
            <Table table={table} data={data} />

        </div>

    )
}

export default InputFeilds