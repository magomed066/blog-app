import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TestPage = lazy(() => import('./test'))
const NotFound = lazy(() => import('./404'))

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<TestPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default Routing
