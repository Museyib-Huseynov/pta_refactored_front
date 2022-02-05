import { Home, Login, NotFound, Verify, ProtectedRoute } from './pages'
import { IndexRouteElement } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MDH, Horner, Agarwal } from './charts'
import { useGlobalUserContext } from './context/global_user_context'

function App() {
  const { isLoading } = useGlobalUserContext()
  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<IndexRouteElement />} />
          <Route path='mdh' element={<MDH />} />
          <Route path='horner' element={<Horner />} />
          <Route path='agarwal' element={<Agarwal />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/user/verify-email' element={<Verify />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
