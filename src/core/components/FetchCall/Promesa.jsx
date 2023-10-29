import axios from "axios";
import React, { useEffect, useState } from "react";
import useMultiFetch from "./useMultiFetch";

export const getCat = () => {
  return axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
};

export const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const adapterCat = (res) => res[0].url;
const Promesa = () => {
  const { data, error, isLoading } = useMultiFetch([
    {
      name: "users",
      initialState: [],
      request: getUsers,
    },
    {
      name: "cat",
      initialState:[] ,
      request: getCat,
      // adapter: adapterCat,
    },
  ]);

  return (
    <div className="flex flex-wrap items-center justify-around bg-gray-500">
    <div>
    {data?.cat?.map((img)=>(
          <img 
         key={img.id}
         src={img.url}
        alt="cat"
        className="w-96 h-96 lg:w-[50%]h-[50%]"
      />      
    ))}
    </div>
    {isLoading ? (
      <h1 className="text-left text-4xl">Loading...</h1>
    ) : (
      <div>
        {data?.users?.map((user) => (
          <div className="flex" key={user.id}>
           
            <h1 className="text-2xl font-mono sm:text-3xl">{user.email}</h1>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default Promesa;