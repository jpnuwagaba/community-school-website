import React from 'react'
import InfoSection from './InfoSection'
import { Button } from "@/components/ui/button";
import { gilda } from '@/lib/fonts';

const WhoWeAre = () => {
  return (
    <>
      <InfoSection
          image="/assets/school.jpg"
          component={
            <div className="p-4">
              <h1
                className={`text-3xl lg:text-5xl font-bold mb-4 text-oxfordblue ${gilda.className}`}
              >
                Who we are
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget sapien in arcu tincidunt pharetra. Nullam nec odio in dolor
                pharetra luctus. Curabitur et nunc vel ligula facilisis bibendum
                ac in arcu. Pellentesque habitant morbi tristique senectus et
                net us et malesuada fames ac turpis egestas.
              </p>
              <Button size={'lg'} variant={"link"} className="mt-5 p-0 text-oxfordblue">
                Learn More
              </Button>
            </div>
          }
        />
    </>
  )
}

export default WhoWeAre