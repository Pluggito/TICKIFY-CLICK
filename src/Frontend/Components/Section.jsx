const Section = ({section}) => {
  return (
    <div className="item-center flex mt-6">
      <div className="flex flex-row gap-4 text-center items-center justify-center font-semibold w-full py-5">
        <hr className="w-32 border-t border-black" />
        <p className="text-center font-[Poppins] text-3xl">{section}</p>
        <hr className="w-32 border-t border-black" />
      </div>
    </div>
  )
}

export default Section
