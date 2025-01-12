import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../@/components/ui/alert-dialog";
import Image from 'next/image';

function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Processing Your Request</AlertDialogTitle>
          <AlertDialogDescription>
            Please wait while we generate your video
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='bg-white flex flex-col items-center my-10 justify-center'>
          <Image
            src={'/progress.gif'}
            width={100}
            height={100}
            alt="Loading animation"
            priority
          />
          <h2 className="mt-4 text-center">
            Generating your video... Please do not refresh the page
          </h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;