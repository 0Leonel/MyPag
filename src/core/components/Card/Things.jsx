import a from '../../../assets/things/a.jpg'
import { useData } from '../FetchCall/useData'

export const Things = () => {
const [cosas] = useData();
console.log(cosas);
  return (<>
    
  {cosas?.map((item)=>(
                <div className=" h-full mx-auto  lg:w-2/6 md:w-3/6 w-5/6 mb-10 px-5 py-24 " key={item.id}>
                <div className="flex relative ">
                    <img className="absolute h-full w-full  inset-0 object-cover object-center rounded" 
                    alt={item.title} 
                    src={item.url}/>
                    <div className="px-8 py-10 relative text-base w-full h-full bg-gray-900 border-gray-800 border-4 rounded opacity-0 hover:opacity-100">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">{item.title}</h1>
                        <p className="mb-8 leading-relaxed">
                            {item.descripcion}</p>
                    </div>
                </div>
            </div>
  ))}
            
            

     
    
  </>
            
            
            
  )
}
