import Error from '../../../assets/error.svg'
const AppError = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
  <div className="text-center">
   
    <img src={Error}  className ="w-full h-full mx-auto" alt="Error" />
    <h1
      className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      Uh-oh!
    </h1>

    <p className="mt-4  text-gray-500">Soy un falso error 404 XD</p>
  </div>
</div>
  )
}

export default AppError;