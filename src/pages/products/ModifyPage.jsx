import React from 'react'
import { useParams } from 'react-router-dom'
import ModifyComponent from '../../components/products/ModifyComponent'

export default function ModifyPage(props) {

    const {pno}= useParams()
  return (
      <div>ModifyPage
          
          <ModifyComponent pno = {pno}/>
    </div>
  )
}
