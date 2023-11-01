
export const Product = ({children}) => {
  return (
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">Lamparas de madera</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Hechas de madera con la esencia de sudor, sangre y gloria, estas creaciones son un reflejo de la pasión y el sacrificio que se invirtieron en su creación, convirtiéndolas en auténticas obras maestras.</p>
    </div>

    <div className="flex items-stretch justify-center flex-wrap -m-4">
      {children}
    </div>

  </div>
</section>

  )
}
