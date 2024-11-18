import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAccess, getMemberWithAccessToken } from '../../api/kakaoAPI'
import { useDispatch } from 'react-redux'
import { login } from '../../slices/LoginSlice'
import useCustomLogin from '../../hooks/useCustomLogin'

export default function KakaoRedirectPage() {
const [searchParams] = useSearchParams()

  const authCode = searchParams.get('code') //인가코드 추출
  
  const dispatch = useDispatch()

  const {moveToPath} = useCustomLogin()

useEffect(() => {
  getAccess(authCode).then(accessToken => {
      getMemberWithAccessToken(accessToken).then(result => {
        dispatch(login(result))
        
          moveToPath("/")
            
      })
    })
},[authCode])

    return (
      <div> 
        </div>
  )
}
