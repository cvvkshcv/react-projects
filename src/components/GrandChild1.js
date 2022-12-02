import { useSelector } from "react-redux"

function GrandChild1() {
  const count = useSelector(store => store.count);
  // dispatch
  return (
    <div className="border">
      <h3>GrandChild1 data, count is: {count}</h3>
    </div>
  )
}

export default GrandChild1