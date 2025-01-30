import React, { useState } from 'react'
import Sectionwrapper from './Sectionwrapper'
import Headers from './Headers'
import {SCHEMES, WORKOUTS} from '../utils/swoldier'
import Button from './Button'




export default function Generators(props) {

  const [showModal, setShowModal] = useState(false)
  const {poison,setPoison,muscles,setMuscles,goals,setGoals,updateWorkout} = props


  function toggleModal()  {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

    if (muscles.length > 2) {
        return
    }

    if (poison !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }

}  



  return (
    <>
    <Sectionwrapper id={'generate'} header={"Generate your workout"} title={['it\'s','huge','o\'clock']}>
      <Headers index={'01'} title={'Pick your workout split'} description={'Select the workout you wish to endure'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return (
            <button onClick={()=>
            {
              setMuscles([])
              setPoison(type)


            }} className={'bg-slate-950 py-4 border border-blue-400 rounded-lg duration-400 hover:border-blue-950' + (poison === type ? ' border-blue-950' : 'border-blue-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_',' ')}</p>
            </button>
        )
      })}

      </div>

      <Headers index={'02'} title={'Lock on targets '} description={'Select the muscles judged for annihilation'}/>
      <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col '>
        <button onClick={()=>{toggleModal()}}  className='relative p-3 flex items-center justify-center'>
            <p>{muscles.length === 0 ? 'Select your muscles' : muscles.join(',')}</p>
            <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 fa-xl"></i>

       </button>
      {showModal && (
        <div className='flex flex-col px-3 pb-3'>
          {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
          
        </div>
      )}

      </div>

      <Headers index={'03'} title={'Choose your goal'} description={'Select your ultimate objective.'}/>
      <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return (
          <button onClick={()=>{setGoals(scheme)}} className={'bg-slate-950 py-4 border border-blue-400 rounded-lg sm:px-4 duration-400 hover:border-blue-950' + (goals === scheme ? ' border-blue-950' : 'border-blue-400')} key={schemeIndex}>
          <p className='capitalize'>{scheme.replaceAll('_',' ')}</p>
        </button>
        )
      })}

      </div>
      <Button func={updateWorkout} text={"Generate"}></Button>

    </Sectionwrapper>
    </>
  )
}

 
