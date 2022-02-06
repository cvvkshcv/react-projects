import { useEffect, useState } from 'react';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setUsers(json);
    })
  }, []);

  const openWebsite = (user) => {
    console.log(user.website);
    window.location = 'http://' + user.website;
  }

  // let [count, setCount] = useState(0);
  // let [count1, setCount1] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   setCount(count - 1);
  // };

  // const incrementCount1 = () => {
  //   setCount1(count1 + 1);
  // };

  // const decrementCount1 = () => {
  //   setCount1(count1 - 1);
  // };

  return <div className="container">
    <div className="list-group">
      {
        users.map(user => {
          return (
            <a key={user.id} onClick={() => openWebsite(user)} className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ user.name }</h5>
                <small>{ user.website }</small>
              </div>
              <p className="mb-1">{ user.address.suite },{ user.address.street }, { user.address.city } - { user.address.zipcode} </p>
              <small>{ user.phone }</small>
            </a>
          )
        })
      }
    </div>
    {/* <LearnEffect count={count} count1={count1} />
    <div>
      <button className="btn btn-success" onClick={incrementCount}>+</button>
      <button className="btn btn-success" onClick={decrementCount}>-</button>
    </div>
    <hr />
      <button className="btn btn-success" onClick={incrementCount1}>+ 1</button>
      <button className="btn btn-success" onClick={decrementCount1}>- 1</button> */}
  </div>;
}

export default Home;
