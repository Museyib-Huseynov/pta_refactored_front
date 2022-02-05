import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSearchParams, Link } from 'react-router-dom'
import axios from 'axios'

function Verify() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  const verifyToken = async () => {
    setLoading(true)
    try {
      const data = await axios.post(
        'http://localhost:5000/api/v1/auth/verify-email',
        {
          verificationToken: searchParams.get('token'),
          email: searchParams.get('email'),
        }
      )
    } catch (error) {
      console.log(error)
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    verifyToken()
  }, [])

  if (loading) {
    return (
      <VerifyWrapper>
        <h2>Loading...</h2>
      </VerifyWrapper>
    )
  }

  if (error) {
    return (
      <VerifyWrapper>
        <h4>There was an error, please double check your verification link </h4>
      </VerifyWrapper>
    )
  }

  return (
    <VerifyWrapper>
      <h2>Account Confirmed</h2>
      <Link to='/login'>Please login</Link>
    </VerifyWrapper>
  )
}

const VerifyWrapper = styled.div``

export default Verify
