import React, { useEffect, useState } from 'react'
import { API_SERVER_HOST } from '../../api/todoApi'
import { getOne } from '../../api/productsApi'
import FetchingModal from '../common/FetchingModal'
import useCustomMove from '../../hooks/useCustomMove'



const initState = {
  pno: 0,
  pname: '',
  pdesc: '',
  price: 0,
  uploadedFileNames: []
}
const host = API_SERVER_HOST

export default function ReadComponent({ pno }) {

  const [product, setProduct] = useState(initState)

  const [fetching, setFetching] = useState(false)

  const { moveToList, moveToModify,page,size } = useCustomMove()

  useEffect(() => {
    setFetching(true)
    getOne(pno).then(data => {
      console.log(data)
      setFetching(false)
      setProduct(data)
    })
  }, [pno])

  return (
    <div className="border-2 border-sky-50  ">
      {fetching ? <FetchingModal /> : <></>}
      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">PNO</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.pno}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">PNAME</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.pname}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DESC</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.desc}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">PRICE</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {product.price}
          </div>
        </div>
      </div>
``
      <div className='w-full justify-center flex flex-col m-auto items-center'>
        {product.uploadedFileNames.map((imgFile, i) =>   ///map메서드의 첫번쨰 인자는 배열의 각 요소(값)을 나타냄 , 두번쨰인자는 순서를 나타냄
          <img
            alt="product"
            key={i}
            className='p-4 w-28'
            src={`${host}/api/products/view/${imgFile}`} />
        )}


        <div className='flex justify-end p-4'>
          <button type='button' className= 'rounded p-4 m-2 text-xl w-32 text-white bg-red-600'
            onClick={() => moveToModify(pno)} >Modify</button>
  
     
          <button type='button' className=' rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
            onClick={() => moveToList({page,size})} >List</button>

        </div>

      </div>


      
    </div >
  )
}
