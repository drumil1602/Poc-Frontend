import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState();

  // async function handleSubmit(e: any) {
  //   e.preventDefault();
  //   console.log('sumbmitting')
  //   try {
  //     let imageUrl = "";
  //     if (image) {
  //       const formData = new FormData();
  //       formData.append("file", image);
  //       formData.append("upload_preset", import.meta.env.VITE_PRESET_NAME);
  //       const dataRes = await axios.post(
  //         `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
  //         formData
  //       );
  //       console.log(dataRes)
  //       imageUrl = dataRes.data.url;
  //     } else {
  //       console.log('iomg')
  //     }

  //     const submitPost = {
  //       imageUrl: imageUrl,
  //     };
  //     // console.log(selectedCommunity);
  //     await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/images`, submitPost);
  //   } catch (err) {
  //     console.log(err);
  //     // err.response.data.msg && setError(err.response.data.msg);
  //   }
  // }

  const getAllImages = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/images`);
    console.log(response);
  }
  useEffect(() => { getAllImages(); }, []);
  return (
    <>
      {/* 
      <form onSubmit={handleSubmit}>
        <input type="file" name="" id="" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">
          Submit
        </button>
      </form>
      */}
    </>
  )
}

export default App
