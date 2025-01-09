import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Button } from '../../../@/components/ui/button'
function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" width={30} height={30} alt="video logo" />
        <h2 className="font-bold text-xl">Ai Short video</h2>
      </div>
      <div className='flex gap-3 items-center'>
        <Button
          className="bg-[#8B3DFF] hover:bg-[#7c32eb] text-white font-semibold px-6 py-2 rounded-full transition-colors"
        >
          Dashboard
        </Button>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;



