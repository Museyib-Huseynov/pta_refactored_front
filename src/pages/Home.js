import { Outlet, NavLink } from 'react-router-dom'
import { Input } from '../components'
import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import { PressureTime, LogLog } from '../charts'

const Home = () => {
  const { importedData } = useInputContext()

  return (
    <HomeWrapper>
      <Input />
      {importedData.length !== 0 && (
        <>
          <div className='graphs'>
            <PressureTime />
            <nav className='links'>
              <NavLink
                to='/mdh'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                MDH
              </NavLink>
              <NavLink
                to='/horner'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Horner
              </NavLink>
              <NavLink
                to='/agarwal'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Agarwal Equivalent-Time
              </NavLink>
            </nav>
            <Outlet />
          </div>
          <LogLog />
        </>
      )}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 350px 600px auto;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  .graphs {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-row-gap: 1.5rem;
    padding: 30px 10px;
    // grid-gap: 2rem;
  }

  .links {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    // margin-bottom: 2rem;
    // place-items: center;
  }

  .link {
    width: 100%;
    text-align: center;
    border: 2px solid green;
    color: #000;
    padding: 10px 0;
  }

  .link:nth-child(2) {
    border-left: none;
    border-right: none;
  }

  .active {
    background: green;
    color: white;
  }

  .diagnostic {
    width: 80%;
    place-self: center;
    display: grid;
    justify-content: center;
  }
`
export default Home
