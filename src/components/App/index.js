import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SearchPage from '../SearchPage'
import SearchResults from '../SearchResults'
import PhotoResults from '../PhotoResults'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SearchPage />}>
					<Route index element={<p>Enter a search to begin</p>} />
					<Route path='/search/:queryText' element={<SearchResults />} />
				</Route>
				<Route path='/photo/:photoId' element={<PhotoResults />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
