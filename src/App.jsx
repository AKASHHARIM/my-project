import Generators from "./components/Generators"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { useState } from "react"
import  {generateWorkout}  from "./utils/function.js"

function App() {

  const [workout, setWorkout] = useState(null)
    const [poison, setPoison] = useState('individual')
    const[muscles,setMuscles] = useState([])
    const[goals,setGoals] = useState('strength_power')


    function updateWorkout(){
      let newWorkout= generateWorkout({poison,muscles,goals})
      console.log(newWorkout);
      
      setWorkout(newWorkout)
    }
  

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generators
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout}
       />
      {workout && (<Workout workout={workout} setWorkout={setWorkout} />)}
     
    </main>
  )
}

export default App
