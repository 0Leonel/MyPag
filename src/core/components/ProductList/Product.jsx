
export const Product = (props) => {
  return (
    <body className="bg-[#43483E]"> 
      <section className="bg-[#1E4E4E] bg-opacity-40 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-[#E3E3DC] ">{props.title}</h1>
      <p className="lg:w-2/3 mx-auto text-[#C3C8BB] leading-relaxed text-xl">Hechas de madera con la esencia de sudor, sangre y gloria, estas creaciones son un reflejo de la pasión y el sacrificio que se invirtieron en su creación, convirtiéndolas en auténticas obras maestras.</p>
    </div>

    <div className="container mx-auto px-5 py-24">
  <div className="flex justify-center flex-wrap -mx-4">
   {props.children}
  </div>
</div>
  </div>
</section>
    </body>
    

  )
}
