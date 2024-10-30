import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAccess } from '../../api/kakaoAPI'


const [searchParams] = useSearchParams()

const authCode = searchParams.get('code') //인가코드 추출

useEffect(() => {
    getAccess(authCode).then(data => {
        
    })
},[authCode])


export default function KakaoRedirectPage() {
    return (
      <div>
      <div>KakaoRedirectPage</div>
            <div>{authCode}</div>
        </div>
  )
}
