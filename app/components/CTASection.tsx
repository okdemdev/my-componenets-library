const CTASection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col mx-12 items-center mt-32 max-sm:mt-28">
        <h2 className="font-bold text-7xl text-center max-sm:text-4xl max-md:text-6xl">Save time and</h2>
        <span className="text-orange-500 text-6xl text-center max-sm:text-2xl max-md:text-4xl">Stay organized</span>
      </div>
      <div className="items-center flex justify-center">
        <img src="/browser.png" alt="" className="max-sm:mt-10 max-md:mt-32" />
      </div>
    </div>
  )
}

export default CTASection
