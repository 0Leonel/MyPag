import axios from "axios";
import useMultiFetch from "./useMultiFetch";
import { useState } from "react";

export const getCat = () => {
  return axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
};

export const getDog = () => {
  return axios.get("https://api.thedogapi.com/v1/images/search?limit=10");
};

export const adapterCat = (res) => res[0].url;
const Promesa = () => {
 
  const { data, isLoading } = useMultiFetch([
    {
      name: "dog",
      initialState: [],
      request: getDog,
    },
    {
      name: "cat",
      initialState:[] ,
      request: getCat,
      // adapter: adapterCat,
    },
  ]);

  return (
    <section className="w-full  grid place-items-center bg-[#271A12] ">
    <div className="grid  w-[90%] h-full  grid-cols-[repeat(auto-fill,minmax(250px,2fr))] justify-center content-center">
    {data?.cat?.map((img)=>(
      <a href={`#${img.id}`} className="m-2 rounded-lg  shadow-sm shadow-white p-2  lg:focus:col-span-2 lg:focus:row-span-2" key={img.id} >
          <img 
         src={img.url}
        alt={img.id}
        className="h-full w-full  rounded-md object-cover object-center"
      /> 
     </a>
    ))}
    </div>

    {isLoading ? (
      <h1 className="text-left text-6xl text-white">Loading...</h1>
    ) : (
      <div  className="grid w-[90%]  h-full  grid-cols-[repeat(auto-fill,minmax(250px,2fr))]    ">
        {data?.dog?.map((img) => (
          <a href={`#${img.id}`} className="relative m-2 rounded-lg shadow-sm shadow-white p-2 lg:focus:col-span-2 lg:focus:row-span-2" key={img.id}>
            <div className="grid h-full">
              <img
                src={img.url}
                alt={img.id}
                className="h-full w-full rounded-md object-cover object-center"
              />
              <div className="grid place-items-center absolute lg:focus:col-span-2 lg:focus:row-span-2 inset-0 text-white text-2xl bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:bg-[#271A12] transition-opacity duration-300">
                <h1 className="text-base">{img.id}</h1>
                <p className="text-white text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia veniam neque maiores impedit at, rem, voluptate numquam aperiam molestias obcaecati tenetur saepe illo beatae harum laudantium repudiandae corrupti, eaque accusamus.</p>
              </div>
            </div>
          </a>
        ))}

      </div>
    )}
  </section>
  );
};

export default Promesa;