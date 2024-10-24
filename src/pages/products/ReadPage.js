import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReadComponent from '../../components/products/ReadComponent'



export default function ReadPage() {

    const {pno} =  useParams()
    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div><ReadComponent pno={pno} /></div>
            </div>
  )
}
