import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const AppSwiper = () => {

    const [item, setItem] = useState(null)
    useEffect(() => {
        const fetchImg = async () => {
            axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data)
                setItem(res.data);
            })
        }
        fetchImg();
    },[]);
    
console.log(item)
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={15}
    breakpoints={{
      480: { slidesPerView: 2 },
      740: { slidesPerView: 2 },
      1275: { slidesPerView: 4 },
    }}
    >
    
        {item?.map((item) => (
            <SwiperSlide key={item.id} className='grid h-[700px] sm:h-[500px] w-full grid-rows-[repeat(2,minmax(250px,1fr))] rounded-xl border-4 border-[#B3B3B3]'> 
            <div className=''>
                <img src={item.image}  className='h-full w-full object-scale-down object-center rounded-md '  />
            <div className=''>
            <h3 className='text-sm basis-full text-center  font-bold sm:text-3xl '>{item.title}</h3>
            <h4 className='text-sm text-[#c9df25] basis-full text-center  font-bold sm:text-2xl sm:bg-[#4F4F4F] '>${item.price}</h4>
 
            <p className='text-base text-justify leading-tight align-baseline'>{item.description}</p>
            </div>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
  );
};


export default AppSwiper;