import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const { data, setdata } = useContext(recipecontext);

    const recipe = data.find((recipe) => recipe.id === params.id);


    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: recipe?.title,
            image: recipe?.image,
            category: recipe?.category,
            instructions: recipe?.instructions,
            ingredients: recipe?.ingredients,
            chef: recipe?.chef
        }
    });

    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => recipe.id === params.id);
        let copyData = [...data];
        copyData[index] = { ...copyData[index], ...recipe };
        setdata(copyData);
        localStorage.setItem("recipes", JSON.stringify(copyData));

        toast.success("Recipe updated successfully.");
    }


    const DeleteHandler = () => {
        const filteredData = data.filter((r) => r.id != params.id);
        setdata(filteredData);
        localStorage.setItem("recipes", JSON.stringify(filteredData));

        toast.success("Recipe deleted successfully.");
        navigate("/recipes");
    }


    return (
        <div key={recipe?.id} className='block h-[100%] w-[100vw] flex' >
            <div className="left flex flex-1 flex-col p-2 gap-5 bg-gray-300 border-2 border-rose-900">

                <img className="h-100 w-200 object-cover object-center" src={recipe?.image} alt="image" />
                <div className="flex flex-col ">
                    <h1 className="text-3xl font-bold text-rose-600">{recipe?.title} Recipe</h1>
                    <h3 className="font-normal text-gray-700 text-black">Category: {recipe?.category}</h3>
                    <p className="text-normal text-rose-700">Instructions: {recipe?.instructions}</p>
                    <p className="text-m  text-gray-900">Ingredients: {recipe?.ingredients}</p>
                    <h5 className="font-medium py-2 text-gray-900">Written By: {recipe?.chef}</h5>
                </div>
            </div>
            <div className="left flex flex-1 flex-col p-2 gap-5  bg-gray-950 border-2 border-rose-900">

                <form>
                    <h1 className='text-rose-600 font-bold text-2xl mb-10'>Add Recipe Details</h1>

                    <small className="text-white font-semibold">Image URL</small>
                    <input {...register("image")} className="block border-2 border-gray-800 w-80 mt-5 outline-0 p-2" type="url" placeholder='Recipe Image URL' />
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <small className="text-white font-semibold">Title</small>
                    <input {...register("title")} className="block border-2 border-gray-800 w-80  mt-5 outline-0 p-2" type="text" placeholder='Recipe Title' />
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <small className="text-white font-semibold">Category</small>
                    <select {...register("category")} className="block border-2 border-gray-800 w-80  mt-5 outline-0 p-2" type="text" placeholder='Recipe Category' >
                        <option className="cat-north-indian text-black">North Indian</option>
                        <option className="cat-south-indian text-black">South Indian</option>
                        <option className="cat-chineese text-black">Chineese</option>
                        <option className="cat-italian text-black">Italian</option>
                        <option className="cat-drinks text-black">Drinks</option>
                    </select>
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <small className="text-white font-semibold">Instructions</small>
                    <textarea {...register("instructions")} className="block border-2 border-gray-800 w-80  mt-5 outline-0 p-2" placeholder='How to create this recipe?' ></textarea>
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <small className="text-white font-semibold">Ingredients</small>
                    <textarea {...register("ingredients")} className="block border-2 border-gray-800 w-80  mt-5 outline-0 p-2" placeholder='Ingredients' ></textarea>
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <small className="text-white font-semibold">Chef</small>
                    <input {...register("chef")} className="block border-2 border-gray-800 w-80  mt-5 outline-0 p-2" type="text" placeholder='Chef' />
                    <small className='block pt-0 pb-5 text-rose-800'>This is how the error shown</small>

                    <div className="btns flex gap-10">
                        <button onClick={handleSubmit(UpdateHandler)} className="cursor-pointer block border-0 outline-0 bg-blue-950 text-white px-6 py-1">Update</button>
                        <button onClick={handleSubmit(DeleteHandler)} className="cursor-pointer block border-0 outline-0 bg-rose-600 text-white px-6 py-1">Delete</button>
                    </div>

                </form>
            </div>
        </div >
    )
}

export default RecipeDetails