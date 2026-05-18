import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const recipes = data.map((recipe) => (
    <RecipeCard recipe={recipe} />
  ));

  return (
    <div className='w-screen min-h-screen bg-gray-950 flex  items-start justify-start gap-5 flex-wrap'>{recipes}</div>
  )
}

export default Recipes