import styled from 'styled-components'
import { FaUser, FaLock } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

function Login() {
  return (
    <LoginWrapper>
      <form>
        <AiOutlineUser className='main-icon' />
        <h1 className='header-login'>Login</h1>
        <div className='icon-input-container'>
          <FaUser className='icon' />
          <input
            type='text'
            id='username'
            placeholder='Username'
            autoComplete='off'
          />
        </div>
        <div className='icon-input-container'>
          <FaLock className='icon' />
          <input type='password' id='password' placeholder='Password' />
        </div>
        <small>Forgot password?</small>
        <button type='submit' className='submit'>
          Login
        </button>
      </form>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #ffff00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff8000'/%3E%3Cstop offset='1' stop-color='%23ff8000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300ff19'/%3E%3Cstop offset='1' stop-color='%2300ff19' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239900ff'/%3E%3Cstop offset='1' stop-color='%239900ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffff00'/%3E%3Cstop offset='1' stop-color='%23ffff00' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF0000'/%3E%3Cstop offset='1' stop-color='%23FF0000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  form {
    width: 400px;
    height: 60%;
    background: #003;
    color: #fff;
    border-radius: 30px;
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 80%;
    place-content: center;
    gap: 15px;
  }

  input {
    color: #fff;
    background: transparent;
    border: none;
    padding: 15px 20px;
    outline: none;
    caret-color: transparent;
    font-size: 0.9rem;
  }

  input:focus {
    caret-color: #fff;
  }

  input::placeholder {
    caret-color: transparent;
    user-select: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px #003 inset;
  }

  .icon-input-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 40px auto;
    border-bottom: 1px solid #b9b;
  }

  .icon {
    place-self: center;
    font-size: 30px;
    padding: 5px;
  }

  .main-icon {
    font-size: 60px;
    place-self: center;
  }

  .header-login {
    place-self: center;
    margin-bottom: 3rem;
  }

  small {
    place-self: end;
    cursor: pointer;
  }

  .submit {
    color: #fff;
    place-self: center;
    width: 90%;
    padding: 0.8rem;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 2rem;
    background-color: #b644ff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236322ff'/%3E%3Cstop offset='1' stop-color='%236322ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23db3efb'/%3E%3Cstop offset='1' stop-color='%23db3efb' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23871cfb'/%3E%3Cstop offset='1' stop-color='%23871cfb' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23B644FF'/%3E%3Cstop offset='1' stop-color='%23B644FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230F00FF'/%3E%3Cstop offset='1' stop-color='%230F00FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF37F6'/%3E%3Cstop offset='1' stop-color='%23FF37F6' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
`

export default Login
