import { Route, Routes } from 'react-router-dom'
import { StakingPage } from './pages'

import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StakingPage />} />
    </Routes>
  )
}

export default App
