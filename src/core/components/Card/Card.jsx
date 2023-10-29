
import Data from '../../services/data.json'

export const Card = () => {

  console.log(Data.lamp.map(item=>(item.url)));
  return (
    <>
    {Data?.lamp?.map(item=>(
      
      <div className="w-10/12  xl:w-1/4 lg:w-80  sm:w-2/4  p-4" key={item.id}>
        <div className="flex relative">
          <img  alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.url}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">{item.tittle}</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">{item.price}</h1>
            <p className=" text-xl sm:leading-relaxed ">{item.description}</p>
          </div>
        </div>
      </div>
      
    ))
    
}
    </>
    
  )
}
