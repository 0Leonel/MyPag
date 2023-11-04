
import Data from '../../services/data.json'

export const appTitle =()=>{
  return <p>LAmparas</p>;
}
export const Card = () => {

  return (
    <>
    {Data?.lamp?.map(item=>(
      
      <div className="min-h-full w-full max-w-xs  xl:w-1/4 lg:w-80  sm:w-2/4 sm:max-w-lg p-4 " key={item.id}>
        <div className="flex relative">
          <img  alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center" src={item.url}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-[#A0CFD0] bg-[#344A44] opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">{item.price}</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
            <p className=" text-xl leading-relaxed ">{item.description}</p>
          </div>
        </div>
      </div>
      
    ))
    
}
<appTitle/>
    </>
    
  )
}
