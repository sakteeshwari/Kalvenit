import React from 'react'
import Solutionspageimg from "../components/Solutionspageimg/Solutionspageimg.jsx"
import Solutionspagecontent from "../components/Solutionspageimg/Solutionspageimg.jsx"
import Solutionstrending from "../components/Solutionspageimg/Solutionspageimg.jsx"
import Solutionsperspectives from "../components/Solutionsperspectives/Solutionsperspectives.jsx"

const solutions = () => {
  return (
    <div>
      <Solutionspageimg></Solutionspageimg>
      <Solutionspagecontent></Solutionspagecontent>
      <Solutionstrending></Solutionstrending>
      <Solutionsperspectives></Solutionsperspectives>

    </div>
  )
}

export default solutions
