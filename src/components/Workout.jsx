import React from 'react'
import Sectionwrapper from './Sectionwrapper'
import Exercisecard from './Exercisecard'

function Workout(props) {

  const{workout} = props
  return (
    <Sectionwrapper header={"Welcome to "} title={['The','DANGER','Zone']}>
        <div className='flex flex-col gap-4'>
          {
            workout.map((exercise,i)=>{
              return(
                <Exercisecard exercise={exercise} i={i} key={i}/>
              )
            })
          }

        </div>
    </Sectionwrapper>
  )
}

export default Workout