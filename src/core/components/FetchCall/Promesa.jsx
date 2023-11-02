import axios from "axios";
import useMultiFetch from "./useMultiFetch";

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
    <div className="flex flex-wrap items-center lg:justify-between bg-black ">
    <div className="flex justify-evenly basis-full flex-wrap bg-indigo-900 bg-opacity-40 ">
    {data?.cat?.map((img)=>(
      <a href="#" className="block rounded-lg p-4 shadow-sm shadow-white m-5 " key={img.id} >
          <img 
         key={img.id}
         src={img.url}
        alt="cat"
        className="h-56 w-full rounded-md object-cover sm:w-[50%]h-[50%]"
      /> 
     

 
</a>
    ))}
    </div>
    {isLoading ? (
      <h1 className="text-left text-6xl">Loading...</h1>
    ) : (
      <div className="flex justify-evenly basis-full flex-wrap bg-indigo-900 bg-opacity-40 ">
        {data?.dog?.map((img)=>(
      <a href="#" className="block rounded-lg p-4 shadow-sm shadow-white m-5" key={img.id}>
          <img 
         key={img.id}
         src={img.url}
        alt="cat"
        className="h-56 w-full rounded-md object-cover sm:w-[50%]h-[50%]"
      /> 
     
</a>
    ))}
      </div>
    )}
  </div>
  );
};

export default Promesa;