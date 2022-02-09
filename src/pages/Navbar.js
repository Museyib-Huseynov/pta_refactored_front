import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai'
import { useGlobalUserContext } from '../context/global_user_context'
import { HiUserCircle } from 'react-icons/hi'
import { IoMdLogOut } from 'react-icons/io'
import axios from 'axios'
import { useInputContext } from '../context/input_context'

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [wells, setWells] = useState([])
  const dropdownRef = useRef(null)
  const { user, logoutUser } = useGlobalUserContext()
  const { loadWellData, ...state } = useInputContext()

  const handleDropdownOpen = () => {
    setDropdownOpen(true)
    dropdownRef.current.style.display = 'grid'
  }
  const handleDropdownClose = () => {
    setDropdownOpen(false)
    dropdownRef.current.style.display = 'none'
  }

  const save = async () => {
    await axios.post(
      'http://localhost:5000/api/v1/well',
      { ...state },
      { withCredentials: true }
    )
  }

  const fetchWells = async () => {
    const { data } = await axios.get('http://localhost:5000/api/v1/well', {
      withCredentials: true,
    })

    const newData = data.wells.map((item) => {
      return { well: item.well, wellID: item._id }
    })

    setWells(newData)
  }

  const getSingleWell = async (wellID) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/well/${wellID}`,
      {
        withCredentials: true,
      }
    )
    // loadWellData(data.well[0])
    console.log(data.well[0].mdhRegression)
  }

  useEffect(() => {
    fetchWells()
  }, [])

  return (
    <NavbarWrapper>
      <nav className='nav'>
        <p className='logo'>PBU interpreter</p>
        <div className='dropdown'>
          <div className='dropdown-btn-icon'>
            <button className='dropdown-btn'>Wells</button>
            {dropdownOpen ? (
              <AiOutlineUpCircle
                className='dropdown-icon'
                onMouseLeave={handleDropdownClose}
              />
            ) : (
              <AiOutlineDownCircle
                className='dropdown-icon'
                onMouseEnter={handleDropdownOpen}
              />
            )}
            <div
              className='dropdown-content'
              ref={dropdownRef}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              {wells.length > 0
                ? wells.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className='wellLinks'
                        onClick={() => {
                          getSingleWell(item.wellID)
                        }}
                      >
                        {item.well}
                      </p>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
        <p className='new'>New well</p>
        <p className='save' onClick={save}>
          Save
        </p>
        <div className='user-info'>
          <HiUserCircle className='user-icon' />
          {user?.name}
        </div>
        <div className='logout' onClick={logoutUser}>
          <IoMdLogOut className='logout-icon' />
          Logout
        </div>
      </nav>
      <Outlet />
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.main`
  .nav {
    height: 5rem;
    width: 100vw;
    background-image: linear-gradient(to right, #080, #02bf02, #d8fbd7);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    display: grid;
    grid-template-columns: 300px repeat(3, 200px) auto 250px;
    place-items: center;
  }

  .logo {
    width: 100%;
    height: 60%;
    text-align: center;
    line-height: 3rem;
    border-right: 2px solid #fff;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: 900;
    user-select: none;
  }

  .dropdown {
    background: transparent;
    display: grid;
    grid-auto-flow: columns;
    grid-auto-rows: 30px;
  }

  .dropdown-btn-icon {
    display: grid;
    grid-template-columns: 60px 30px;
    place-items: center;
    position: relative;
  }

  .dropdown-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    user-select: none;
  }

  .dropdown-icon {
    color: #fff;
    font-size: 1.2rem;
  }

  .dropdown-icon:hover {
    font-size: 1.5rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 85%;
    grid-template-columns: 90px;
    place-items: center;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    overflow: auto;
  }

  .wellLinks {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    user-select: none;
    letter-spacing: 1px;
  }

  .wellLinks:hover {
    background: #ff7000;
  }

  .new,
  .save {
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    // border-bottom: 1px solid #fff;
    padding: 0.3rem;
    cursor: pointer;
    user-select: none;
  }

  .new:hover {
    font-size: 1.3rem;
  }

  .save {
    width: 4rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
  }

  .save:hover {
    background: #000;
  }

  .user-info,
  .logout {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    justify-self: end;
    font-size: 1.5rem;
    user-select: none;
  }

  .logout {
    justify-self: center;
    cursor: pointer;
  }

  .user-icon,
  .logout-icon {
    font-size: 3rem;
    fill: rgba(0, 0, 0, 0.5);
  }
`

export default Navbar
