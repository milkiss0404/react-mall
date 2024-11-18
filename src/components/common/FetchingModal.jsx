import React from 'react';
import { Background, LoadingText } from '../../Styles.js';
import Spinner from '../../image/spinner/Spinner@1x-1.0s-200px-200px (1).gif';

const FetchingModal = () => {
    return (
        <Background>
        <div
            className={`fixed top-0 left-0 z-[1055] flex h-full w-full items-center justify-center bg-black bg-opacity-20`}>
                <img src={Spinner} alt="로딩중" width="10%" />
             
            </div>
        </Background>
    );
}
export default FetchingModal;
