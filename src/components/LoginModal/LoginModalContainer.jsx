import React from 'react'
import LoginModalPresenter from './LoginModalPresenter'

const LoginModalContainer = () => {
    return (
        <LoginModalPresenter />
    )
}

export default LoginModalContainer


// 로그인 모달을 header 밖으로 빼고
// modal toggle을 context에 넣어주기