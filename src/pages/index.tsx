import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const NotFound = lazy(() => import('./404'))

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default Routing
