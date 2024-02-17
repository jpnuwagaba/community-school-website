import React from 'react'
import GridCols from './GridCols'
import { gilda } from '@/lib/fonts'

const MissionAndVision = () => {
  return (
    <>
      <div className="container">
      <GridCols
          component1={
            <>
              <div className="bg-cultured p-6">
                <h1 className={`${gilda.className} text-2xl md:text-4xl text-oxfordblue mb-4 font-bold`}>
                  Vision
                </h1>
                <p className="text-xl md:text-lg text-oxfordblue mb-4">
                  Our mission is to provide a platform for students to find and
                  connect with their peers. Our vision is to provide a platform
                  for students to find and connect with their peers.
                </p>
              </div>
            </>
          }
          component2={
            <>
              <div className="bg-cultured p-6">
                <h1 className={`${gilda.className} text-2xl md:text-4xl text-oxfordblue mb-4 font-bold`}>
                  Mission
                </h1>
                <p className="text-xl md:text-lg text-oxfordblue mb-4">
                  Our mission is to provide a platform for students to find and
                  connect with their peers. Our vision is to provide a platform
                  for students to find and connect with their peers.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  )
}

export default MissionAndVision