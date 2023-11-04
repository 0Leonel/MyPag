import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Form = () => {

  const [form,setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: "",
  });

  const handleSubmit =(e) =>{
    e.preventDefault();
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const phone = e.target.user_phone.value;
    const message = e.target.user_message.value;

    const { n } = e.target;
    const validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const validPhone = /^\d{10}$/;
	

    if(email === '' || name === '' || phone === '' || message === ''){
      MySwal.fire({
        icon: 'error',
        title: <p>Debes llenar todos los campos!</p>,
        background: '#FFE4D4',
        confirmButtonColor: '#524A45',
      })
      return;
    }


    if(!validEmail.test(email) ){
      MySwal.fire({
        icon: 'error',
        title: <p>Email invalido</p>,
        background: '#FFE4D4',
        confirmButtonColor: '#524A45',
      })
    return;
    }

    if(!validPhone.test(phone)){
      MySwal.fire({
        icon: 'error',
        title: <p>Celular invalido</p>,
        background: '#FFE4D4',
        confirmButtonColor: '#524A45',
      })
      return;
    }


  emailjs.sendForm('service_ytv9nhs','template_y6u9f1a',e.target,'rXm0sW1nKzsC7Avmr')
  .then(res => {
    console.log(res.text)
  },error => console.log(error.text));
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se envio con exitos!',
    showConfirmButton: false,
    timer: 1500
  })
  setForm({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: '',
  }) 
  }

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log("Nombre: ",name);
    // console.log("Valor: ",value);
    setForm({...form,[name]:value,});
  }

  return (
    <section className="bg-gradient-to-r from-[#102223] via-[#38567A] to-[#101923]">
  <div className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
    <div className='lg:col-span lg:py-12'>
        </div>

      <div className="rounded-lg bg-gradient-to-r from-[#38777A] via-[#38567A] to-[#1E4142] p-8 shadow-lg lg:col-span-3 lg:p-12">
       
        <form onSubmit={handleSubmit} className="space-y-4 text-[#E3E3DC]">
          <div>
            <label
                htmlFor="UserName"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[#D18B60] focus-within:ring-1 focus-within:ring-[#D18B60]"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  name='user_name'
                  onChange={handleChange}
                  value={form.user_name}
                  className="peer h-8 w-full text-[#E3E3DC] border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#E3E3DC] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Nombre
                </span>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="UserEmail"
                className="relative block text-[#E3E3DC] overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[#D18B60] focus-within:ring-1 focus-within:ring-[#D18B60]"
              >
                <input
                  type="email"
                  id="UserEmail"
                  name='user_email'
                  placeholder="Email"
                  onChange={handleChange}
                  value={form.user_email}
                  className="peer h-8 w-full text-[#E3E3DC] border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 text-[#E3E3DC] top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Email
                </span>
              </label>
            </div>

            
            <div>
            
            <label
                htmlFor="PhoneNumber"
                className="relative block text-[#E3E3DC] overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[#D18B60] focus-within:ring-1 focus-within:ring-[#D18B60]"
              >
                <input
                  type="number"
                  id="PhoneNumber"
                  name='user_phone'
                  onChange={handleChange}
                  value={form.user_phone}
                  placeholder="Celular"
                  className=" bg-gray-800 text-[#E3E3DC] back peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#E3E3DC] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  Celular
                </span>
              </label>
            </div>
          </div>
          <div>
          <label
                htmlFor="message"
                className="relative block text-[#E3E3DC] overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[#D18B60] focus-within:ring-1 focus-within:ring-[#D18B60]"
              >
                <textarea
                  id="message"
                  name='user_message'
                  onChange={handleChange}
                  value={form.user_message}
                  placeholder="Mensaje"
                  rows='8'
                  className=" bg-gray-800 text-[#E3E3DC] back peer w-full border-none bg-transparent p-0  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
              </label>
          </div>
          

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-[#E3E3DC] sm:w-auto"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Form;