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
    <div className="flex flex-wrap items-center lg:justify-between bg-gray-500">
    <div className="flex justify-evenly basis-full flex-wrap">
    {data?.cat?.map((img)=>(
      <a href="#" className="block rounded-lg p-4 shadow-sm shadow-black m-5" key={img.id}>
          <img 
         key={img.id}
         src={img.url}
        alt="cat"
        className="h-56 w-full rounded-md object-cover sm:w-[50%]h-[50%]"
      /> 
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
    {img.id}
  </h3>

  <p className="mt-4 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</a>
    ))}
    </div>
    {isLoading ? (
      <h1 className="text-left text-6xl">Loading...</h1>
    ) : (
      <div className="flex justify-evenly basis-full flex-wrap">
        {data?.dog?.map((img)=>(
      <a href="#" className="block rounded-lg p-4 shadow-sm shadow-black m-5" key={img.id}>
          <img 
         key={img.id}
         src={img.url}
        alt="cat"
        className="h-56 w-full rounded-md object-cover sm:w-[50%]h-[50%]"
      /> 
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
    {img.id}
  </h3>

  <p className="mt-4 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</a>
    ))}
      </div>
    )}
  </div>
  );
};

export default Promesa;