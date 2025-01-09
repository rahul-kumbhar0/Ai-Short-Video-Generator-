"use client"
import React, { useState } from 'react'
import { Button } from '../../@/components/ui/button';
import EmptyState from './_components/EmptyState';
import Link from 'next/link';



function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (

    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
          <Button
            className="bg-[#8B3DFF] hover:bg-[#7c32eb] text-white font-semibold px-6 py-2 rounded-full transition-colors"
          >
            + Create New
          </Button>
        </Link>

      </div>
      {/* Empty State */}
      {videoList?.length == 0 && <div>
        <EmptyState />
      </div>}
    </div>
  )
}

export default Dashboard