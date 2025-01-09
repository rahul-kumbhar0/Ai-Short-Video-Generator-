
import Link from 'next/link'
import React from 'react'
import { Button } from '../../../@/components/ui/button'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted'>
        <h2>You don't have any short video created</h2>
        <Link href={'/dashboard/create-new'}>
        <Button className="bg-[#8B3DFF] hover:bg-[#7c32eb] text-white font-semibold px-6 py-2 mt-5 rounded-full transition-colors">Create New Short Video</Button>
        </Link>
    </div>
  )
}

export default EmptyState