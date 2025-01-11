import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Button } from '../../../@/components/ui/button';
import Link from 'next/link';

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 p-3 px-5 flex items-center justify-between shadow-md bg-white z-50">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" width={30} height={30} alt="video logo" />
        <h2 className="font-bold text-xl">Ai Short video</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/dashboard">
          <Button className="bg-[#8B3DFF] hover:bg-[#7c32eb] text-white font-semibold px-6 py-2 rounded-full transition-colors">
            Dashboard
          </Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;