import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

function Login() {
  return (
    <LoginWrapper>
      <form>
        <FaUser className='icon' />
        <input type='text' id='username' placeholder='Username' />
        <input type='password' id='password' placeholder='Password' />
      </form>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: #fdb;

  form {
    width: 400px;
    height: 60%;
    background: #003;
    color: #fff;
    border-radius: 10px;
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 80%;
    place-content: center;
    gap: 20px;
  }

  input {
    color: #fff;
    background: transparent;
    border: none;
    border-bottom: 1px solid #b9b;
    padding: 15px 20px;
    outline: none;
    caret-color: transparent;
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
`

export default Login
