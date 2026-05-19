import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Create = () => {
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        let copyData = [...data];
        copyData.push(recipe);
        setdata(copyData);
        localStorage.setItem("recipes", JSON.stringify(copyData));

        toast.success("Recipe created successfully...");
        navigate('/recipes');
    }
    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
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

            <button className="cursor-pointer block border-0 outline-0 bg-rose-600 text-white px-6 py-1">Submit</button>

        </form>
    );
}

export default Create