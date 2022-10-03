import React from "react";

const Table = ({ table, deleteHandle, updateHandle }) => {
  return (
    <>
      <table class="table mt-5 mx-5">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {table.map((val, index) => {
            return (
              <>
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{val.name}</td>
                  <td>{val.email}</td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-warning me-2"
                      onClick={() => updateHandle(val.id)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteHandle(val.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
