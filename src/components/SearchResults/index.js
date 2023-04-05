import { useParams } from 'react-router-dom'

const SearchResults = () => {
	const params = useParams()
	return <p>Search results for {params.queryText}</p>
}

export default SearchResults
