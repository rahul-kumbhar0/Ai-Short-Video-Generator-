import React from 'react'
import SelectTopic from './_components/SelectTopic'

function CreateNew() {
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary text-center'></h2>

        <div>
            {/* Select Topic */}
                <SelectTopic/>
            {/* Select Style */}

            {/* Duration */}

            {/* Create Button */}
        </div>
    </div>
  )
}

export default CreateNew
