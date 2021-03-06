import { useLocation } from 'react-router'
import { useFetch } from '../../hooks/useFetch'

//components
import RecipeList from '../../components/RecipeList'

//styles
import './Search.css'


export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const URL = 'http://localhost:3000/recipes?q=' + query
    const { error, isPending, data} = useFetch(URL)

    return (
        <div>
            <h2 className="page-title">Recipes inluding "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
