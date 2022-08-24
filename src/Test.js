import React, { useState } from 'react'
import axios from 'axios';

function Test() {

  const [name, setName] = useState('');
  const [response, setResponse] = useState();

  const search = (e) => {
    e.preventDefault();
    setResponse(null);
    axios.get('https://api.nationalize.io/?name=' + name).then(res => {
      setResponse(res.data);
    });
  };

  return (
    <div className='vh-100 container d-flex justify-content-center align-items-center'>
      <div className="card shadow border-0" style={{ width: '25rem' }}>
        <nav className="navbar navbar-light navbar-dark bg-dark">
          <div className="container-fluid">
            <form className="d-flex w-100" onSubmit={search}>
              <input 
                value={name}
                onChange={(e) => {
                  const name = e.target.value;
                  setName(name);
                  if (name.length === 0) {
                    setResponse(null);
                  }
                }}
                
                type="search"
                aria-label="Search"
                className="form-control me-2"
                placeholder="Enter your name"
              />
              <button className="btn btn-outline-light">
                Predict
              </button>
            </form>
          </div>
        </nav>

        <h3 className='text-center my-2 px-3'>Tell your name, I will predict your country</h3>
        <hr />
        {
          (response?.country.length > 0) ?
            <img
              alt="..."
              className="card-img-top w-50 p-3 center mx-auto rounded-circle"
              src="https://media4.giphy.com/media/VDMaWsMMU8yEryB1fQ/giphy.gif"
            />
          :
            <img
              alt="..."
              className="card-img-top w-50 p-3 center mx-auto rounded-circle"
              src="https://pluspng.com/img-png/png-user-icon-person-icon-png-people-person-user-icon-2240.png"
            />
        }

        <div className="card-body">
          {
            (response?.country.length === 0) ?
              <h3>No result found</h3>
            :
            <>
              <ul className="list-group mb-2">
                {
                  (response?.country || []).map(country => {
                    return (
                      <li
                        className="list-group-item d-flex justify-content-between"
                        key={country.country_id}
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{ country.country_id }</div>
                        </div>
                        <span className="badge bg-primary rounded-pill">
                          { (country.probability * 100).toFixed(2) } %
                        </span>
                      </li>)
                    
                  })
                }
              </ul>
            </>
          }
        </div>

      </div>
    </div>
  )
}

export default Test