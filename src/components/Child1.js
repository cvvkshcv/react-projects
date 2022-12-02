import { useState } from "react"
import GrandChild1 from "./GrandChild1"

function Child1() {
  return (
    <div className="border">
      <h1>Child1</h1>


      <GrandChild1 />
    </div>
  )
}

export default Child1