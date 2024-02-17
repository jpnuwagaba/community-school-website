import React from 'react'
import PersonCard from './PersonCard'
import { gilda } from '@/lib/fonts'

const Administration = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-bold text-oxfordblue mb-4 ${gilda.className}`}>Administration</h2>
          <p className="text-lg lg:w-[1100px] m-auto">
            Our administration team is dedicated to providing a safe and nurturing environment for our students, faculty, and staff. They are committed to fostering a culture of excellence and continuous improvement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:w-[1100px] m-auto">
          <PersonCard
            image="/assets/asaph.jpg"
            name="Dr. Jane Doe"
            title="Principal"
            link="/administration/principal"
          />
          <PersonCard
            image="/assets/asaph.jpg"
            name="Mr. John Doe"
            title="Vice Principal"
            link="/administration/vice-principal"
          />
          <PersonCard
            image="/assets/asaph.jpg"
            name="Ms. Jane Smith"
            title="Secretary"
            link="/administration/secretary"
          />
        </div>
      </div>
    </>
  )
}

export default Administration