// Spread, Rest ...
// Destructring {}, []
function ShowName({ name, about, linkedIn, id, removeStudent }) {
  // add our state
  return <>
    <div>
      <h1>{name}</h1>
      <i>LinkedIn profile: {linkedIn}</i>
      <p>{ about || 'About is not available' }</p>
    </div>
    <button onClick={() => removeStudent(id)}>Remove</button>
    <hr />
  </>
}

export default ShowName;
