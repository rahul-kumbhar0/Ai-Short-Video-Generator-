import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../@/components/ui/alert-dialog"
import Image from 'next/image';

function CustomLoading({ loading }) {
  console.log("CustomLoading - loading state:", loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Processing</h2>
          <p className="text-gray-600 mb-4">
            Please wait while we generate your video
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Image 
            src='/progress.gif' 
            width={100} 
            height={100} 
            alt="progress" 
            priority
          />
        </div>
        <div className='text-center mt-4'>
          <p className="text-sm text-gray-500">Please don&apos;t close the window</p>
        </div>
      </div>
    </div>
  );
}

export default CustomLoading;