import React from 'react'
import { SquarePlay } from 'lucide-react';
import { Grid2X2 } from 'lucide-react'
import PostReel from './PostReel';


function Icons() {
  return (
    <div className='flex flex-row justify-center gap-14 '>
        <hr className="border-t  border-b-slate-500" />
      <SquarePlay  />
      <Grid2X2  />
      <hr className="border-t  border-b-slate-500" />
    </div>
  )
}

export default Icons
