export function Info() {
  return (
    <div className=" bg-orange-500 w-full mt-10">
      <div className="flex justify-center items-center py-6 px-8">
        <span className="text-2xl md:text-3xl text-primary">
          Agende seu horário
        </span>
      </div>
      <div className="bg-[#f3b492] flex flex-col items-center py-6 px-8">
        <span className="text-white  text-center text-md md:text-xl lg:text-2xl block mb-6 md:mb-4">
          Rua dos Alecrins, 703 - Cambuí - Campinas, SP
        </span>

        <div className="flex flex-col">
          <div className="flex gap-4 self-start">
            <p className="text-primary md:text-xl ">Segunda - Sexta</p>
            <p className="text-primary md:text-xl ">08:00 - 19:00</p>
          </div>

          <div className="flex gap-4 my-4">
            <p className="text-primary md:text-xl ">Sábado</p>
            <p className="text-primary md:text-xl ">08:00 - 12:00</p>
          </div>

          <div className="flex gap-4">
            <p className="text-primary md:text-xl ">E-mail: </p>
            <p className="text-primary md:text-xl ">belezalarose@gmail.com</p>
          </div>

          <div className="flex gap-4 my-4 items-center">
            <p className="text-primary md:text-xl ">19 3307-0107</p>
            <span className="text-primary hidden md:block">|</span>
            <p className="text-primary md:text-xl ">19 98897-0107</p>
            <span className="text-primary hidden md:block">|</span>
            <p className="text-primary md:text-xl ">19 99407-9027</p>
          </div>
        </div>
      </div>
    </div>
  )
}
