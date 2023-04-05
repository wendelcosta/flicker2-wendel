import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'

function SearchPage() {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`/search/${query}`)
	}
	return (
		<Container maxWidth='md' sx={{ textAlign: 'center' }}>
			<h1>Flickr Search</h1>
			<form onSubmit={handleSubmit}>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={2}
				>
					{/* <input
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						type='text'
					/> */}
					<TextField
						id='search-field'
						size='small'
						label='Search'
						variant='outlined'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					{/* <button>Search</button> */}
					<Button
						// disabled={isSubmitDisabled}
						type='submit'
						variant='contained'
						size='large'
					>
						Search
					</Button>
				</Stack>
			</form>
			<Outlet />
		</Container>
	)
}

export default SearchPage
