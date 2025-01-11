import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../@/components/ui/select";

function SelectDuration({ onUserSelect }) {
    const handleDurationChange = (value) => {
        console.log("Selected Duration:", value); // Log the selected duration
        onUserSelect('duration', value);
    };

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Duration</h2>
            <p className='text-gray-500'>Select the duration of video</p>
            
            <Select 
                defaultValue="60 Seconds"
                onValueChange={handleDurationChange}
            >
                <SelectTrigger 
                    className="w-full mt-2 p-4 text-lg bg-white rounded-md border"
                >
                    <SelectValue />
                </SelectTrigger>

                <SelectContent 
                    position="popper"
                    className="w-[var(--radix-select-trigger-width)] bg-white rounded-md shadow-lg"
                >
                    <SelectItem 
                        value="30 Seconds"
                        className="py-3 px-4 text-base cursor-pointer hover:bg-gray-50"
                        onClick={() => console.log("Clicked: 30 Seconds")} // Optional: log click event
                    >
                        30 Seconds
                    </SelectItem>
                    <SelectItem 
                        value="60 Seconds"
                        className="py-3 px-4 text-base cursor-pointer hover:bg-gray-50"
                        onClick={() => console.log("Clicked: 60 Seconds")} // Optional: log click event
                    >
                        60 Seconds
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectDuration