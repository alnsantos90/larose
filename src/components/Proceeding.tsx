type Image = {
  src: string
  title: string
  text: string
}

type ProceedingProps = {
  items: Image[]
}

export default function ProceedingComponent({ items }: ProceedingProps) {
  return (
    <div id="about" className="w-full flex flex-col items-center my-12 gap-3">
      <strong className="block text-2xl font-light ">Procedimentos</strong>
      <span className="block text-3xl px-6 text-center text-secondary">
        Garantia de qualidade dos produtos
      </span>

      <div className=" mt-8 px-8 lg:px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
          {items.map((proceeding) => (
            <div
              className="lg:w-[230px] xl:w-[300px] h-full bg-primary rounded-xl overflow-hidden shadow-lg outline-none border-none cursor-pointer hover:scale-[1.03] hover:outline-1 hover:outline-secondary hover:animate-pulse hover:outline-offset-4"
              key={proceeding.src}
            >
              <img
                src={proceeding.src}
                alt=""
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 flex flex-col ">
                <strong>{proceeding.title}</strong>
                <span className="block">{proceeding.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
