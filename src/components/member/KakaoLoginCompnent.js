import React from 'react'
import { getKakaoLoginLink } from '../../api/kakaoAPI'
import { Link } from 'react-router-dom'
import kakaoimage from '../../image/login/kakaoIcon.png'
const link  = getKakaoLoginLink()

export default function KakaoLoginCompnent(props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full">
        <Link to={link}>
          <img src={kakaoimage} />
        </Link>
      </div>
    </div>
  )
}
