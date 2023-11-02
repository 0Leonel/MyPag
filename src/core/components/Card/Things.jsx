import a from '../../../assets/things/a.jpg'
import { useData } from '../FetchCall/useData'

export const Things = () => {
const [cosas] = useData();
console.log(cosas);
  return (<>
    
  {cosas?.map((item)=>(
               <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8" key={item.id}>
               <div className="relative">
                 <img className="w-full object-cover object-center rounded" alt={item.title} src={item.url} />
                 <div className="text-center py-2 bg-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out absolute inset-0 flex flex-col items-center justify-center">
                   <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-200">{item.title}</h1>
                   <p className="mb-2 leading-relaxed">{item.descripcion}</p>
                 </div>
               </div>
             </div>
             
            
  ))}
  </>     
            
  )
}
