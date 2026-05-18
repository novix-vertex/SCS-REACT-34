import { Link } from "react-router";

const RecipeCard = (props) => {

    const { id, image, title, category, chef } = props.recipe;
    return (
        <Link to={`/recipe/details/${id}`} key={id} className='block h-[100%] w-[100vw] flex p-2 gap-5 bg-gray-300 border-2 border-rose-900' >
            <img className="h-50 w-50 object-cover object-center" src={image} alt="image" />
            <div className="flex flex-col ">
                <h1 className="text-2xl font-bold text-rose-600">{title} Recipe</h1>
                <h3 className="font-normal text-gray-700 text-black">Category: {category}</h3>
                <h5 className="font-medium py-2 text-gray-900">Written By: {chef}</h5>
            </div>
        </Link >
    );
}

export default RecipeCard