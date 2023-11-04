import React from 'react'

const Form = () => {
  const handleSubmit =(e) =>{
    e.preventDefault();
  }
  return (
    <section className="bg-[#8D9286]">
  <div className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
    <div className='lg:col-span lg:py-12'>
        </div>

      <div className="rounded-lg bg-gradient-to-r from-[#205106] via-[#3E4A35] to-[#003738] p-8 shadow-lg lg:col-span-3 lg:p-12">
       
        <form onSubmit={handleSubmit} className="space-y-4 text-[#E3E3DC]">
          <div>
          <label
                htmlFor="UserName"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="UserName"
                  placeholder="Nombre"
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
                className="relative block text-[#E3E3DC] overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
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
                className="relative block text-[#E3E3DC] overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="number"
                  id="PhoneNumber"
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

          

          <div className=''>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full  bg-[#A0CFD0] text-[#E3E3DC] rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
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