import React, { useRef, useState } from 'react'
import { postAdd } from '../../api/productsApi'
import FetchingModal from '../common/FetchingModal'
import useCustomMove from '../../hooks/useCustomMove'
import ResultModal from '../common/ResultModal'


const initState = {
    pname: '',
    pdesc: '',
    price: 0,
    files: []
}

export default function AddComponent() {

    const [product, setProduct] = useState(initState)
    const uploadRef = useRef() // useState()는 변경 시 컴포넌트가 다시 그려지지만, useRef()는 컴포넌트가 다시 그려지지 않음
            //useRef()는 보통 렌더링에 영향을 주지 않는 값이나 DOM 요소를 다룰 때 쓰고, useState()는 UI를 업데이트하는 상태값을 다룰 때 사용합니다.

    const [fetching ,setFetching] =useState(false)
    const [result ,setResult]= useState(false)

    const {moveToList} = useCustomMove()

    const closeModal = ()=>{
        setResult(null)
        moveToList({page:1})
    }
    

    const handleChangeProduct = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,   // 이전 상태 복사
            [name]: value     // 특정 필드만 업데이트
        }));
    }

    const handleClickAdd = (e) => {
        console.log(product)
        
        const formData = new FormData()
        
        const files = uploadRef.current.files
        
        console.log(files.length) //파일 갯수 구해짐
        
        for (let i = 0; i < files.length; i++) {
            formData.append("files",files[i])
        }
        formData.append("pname",product.pname)
        formData.append("pdesc",product.pdesc)
        formData.append("price",product.price)

        setFetching(true)
        
        //fetching값은 버튼을 누른이상 true이고  then -> false로 ㅇㅇ 
        postAdd(formData).then(data=>{
            setFetching(false)
            setResult(data.RESULT)
        })

    }


    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="pname" type={'text'} value={product.pname} onChange={handleChangeProduct} >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Desc</div>
                    <textarea
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
                        name="pdesc" rows="4" onChange={handleChangeProduct} value={product.pdesc}>
                        {product.pdesc}
                    </textarea>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Price</div>
                    <input
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="price" type={'number'} value={product.price} onChange={handleChangeProduct}>
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Files</div>
                    <input
                        ref={uploadRef}
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        type={'file'} multiple={true}>
                    </input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button"
                        className="rounded p-4 w-36 bg-blue-500 text-xl text-white "
                        onClick={handleClickAdd} >
                        ADD
                    </button>
                </div>
            </div>
            {fetching? <FetchingModal/>:<></>}



            {result ? 
            <ResultModal
            callbackFn = {closeModal} //넘겨줄 함수
            title = {'Product Add Result'}
            content = {`${result}번 상품등록 완료`}
            >

            </ResultModal>:<></>}
        </div>
    );
}