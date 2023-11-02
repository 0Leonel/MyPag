
export const Product = (props) => {
  return (
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">{props.title}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Hechas de madera con la esencia de sudor, sangre y gloria, estas creaciones son un reflejo de la pasión y el sacrificio que se invirtieron en su creación, convirtiéndolas en auténticas obras maestras.</p>
    </div>

    <div className="container mx-auto px-5 py-24">
  <div className="flex flex-wrap -mx-4">
   {props.children}
  </div>
</div>


  </div>
</section>

  )
}
