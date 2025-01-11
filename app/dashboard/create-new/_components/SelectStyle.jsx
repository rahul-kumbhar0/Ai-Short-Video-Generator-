import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

function SelectStyle({onUserSelect}) {
    const styleOptions=[
        {
           name:'Realstic',
           image:'/real.png' 
        },
        {
            name:'Cartoon',
            image:'/cartoon.jpg' 
         },
         {
            name:'Comic',
            image:'/comic.jpg' 
         },
         {
            name:'WaterColor',
            image:'/watercolor.jpg' 
         },
         {
            name:'Gta',
            image:'/gta.jpg' 
         },
    ]

    const [selectedOption, setSelectedOption] = useState();

    const handleStyleSelect = (styleName) => {
        console.log("Selected Style:", styleName); // Log the selected style
        setSelectedOption(styleName);
        onUserSelect('imageStyle', styleName);
    };

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Style</h2>
            <p className='text-gray-500'>Select your video style</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item, index) => (
                    <div 
                        key={index} 
                        className={`relative hover:scale-105
                            transition-all cursor-pointer rounded-xl
                            ${selectedOption === item.name && 'border-4 border-primary'}
                        `}
                        onClick={() => handleStyleSelect(item.name)} // Moved click handler to div
                    >
                        <Image 
                            src={item.image} 
                            height={100} 
                            width={100} 
                            alt={`${item.name} style`}
                            className='h-48 object-cover rounded-lg w-full'
                        />
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle