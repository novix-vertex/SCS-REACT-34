import { useEffect } from 'react';
import axios from '../utils/axios';

const Home = () => {

  const getRecipes = async () => {
    try {
      const { data } = await axios.get("/recipes");
      console.log(data);

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home