import { useContext } from "react";
import { useParams } from "react-router";
import { recipecontext } from "../context/RecipeContext";

const RecipeDetails = () => {

    const params = useParams();
    const { data } = useContext(recipecontext);

    const recipe = data.find((recipe) => recipe.id === params.id);
    const { id, image, title, category, instructions, ingredients, chef } = recipe;

    return (
        <div key={id} className='block h-[100%] w-[100vw] flex p-2 gap-5 bg-gray-300 border-2 border-rose-900' >
            <img className="h-50 w-50 object-cover object-center" src={image} alt="image" />
            <div className="flex flex-col ">
                <h1 className="text-2xl font-bold text-rose-600">{title} Recipe</h1>
                <h3 className="font-normal text-gray-700 text-black">Category: {category}</h3>
                <p className="text-normal text-rose-700">Instructions: {instructions}</p>
                <p className="text-m  text-gray-900">Ingredients: {ingredients}</p>
                <h5 className="font-medium py-2 text-gray-900">Written By: {chef}</h5>
            </div>
        </div >
    )
}

export default RecipeDetails