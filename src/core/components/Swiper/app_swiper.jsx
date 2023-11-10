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
    const arr = [
        {"id": '1', "title": "Slide 1"},
        {"id": '2', "title": "Slide 2"},
        {"id": '3', "title": "Slide 3"},
        {"id": '4', "title": "Slide 4"},
        {"id": '5', "title": "Slide 5"},
        {"id": '6', "title": "Slide 6"},
        {"id": '7', "title": "Slide 7"},
        {"id": '8', "title": "Slide 8"},
        {"id": '9', "title": "Slide 9"}, 
        {"id": '10', "title": "Slide 10"},
        {"id": '11', "title": "Slide 11"},
        {"id": '12', "title": "Slide 12"},
        {"id": '13', "title": "Slide 13"},
        {"id": '14', "title": "Slide 14"},
        {"id": '15', "title": "Slide 15"},
        {"id": '16', "title": "Slide 16"},
        {"id": '17', "title": "Slide 17"},
        {"id": '18', "title": "Slide 18"},
        {"id": '19', "title": "Slide 19"},
        {"id": '20', "title": "Slide 20"},
    ];
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
        {/* <SwiperSlide>HOLA</SwiperSlide>
        <SwiperSlide>HOLA 2</SwiperSlide>
        <SwiperSlide>HOLA 3</SwiperSlide> */}
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