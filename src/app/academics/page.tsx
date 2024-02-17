import React from 'react'
import PageHeader from '@/components/PageHeader'
import SubjectsAccordion from '@/components/SubjectsAccordion'
import CurriculumCTA from '@/components/CurriculumCTA'

const page = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-8 md:gap-24'>
        <PageHeader
          bg="/assets/academics.jpg"
          title="Academics"
          description="Our academic programs are designed to prepare students for success in their chosen field. Our faculty are dedicated to providing a challenging and supportive learning environment that encourages students to reach their full potential."
        />    
        <CurriculumCTA />
        <SubjectsAccordion />    
      </div>
    </>
  )
}

export default page