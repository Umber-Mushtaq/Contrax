const WaitlistSection = () => {
  return (
    <section className='py-20 px-6 flex flex-col items-center text-center'>
      {/* Heading */}
      <h2 className='text-white text-4xl md:text-5xl font-bold mb-10 tracking-tight'>
        Ready for the faster flow?
      </h2>

      {/* Input Group */}
      <div className='w-full max-w-xl relative flex flex-col md:flex-row items-stretch md:items-center p-1.5 bg-white/[0.03] border border-white/10 rounded-sm backdrop-blur-md gap-2 md:gap-0'>
        <input
          type='email'
          placeholder='Enter your email'
          className='flex-1 bg-transparent border-none outline-none text-white px-6 py-4 md:py-3 placeholder:text-gray-600 text-sm md:text-base'
        />

        <button className='bg-[#5a32fa] hover:bg-[#4c28d1] text-white px-8 py-4 md:py-3 rounded-sm font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 whitespace-nowrap'>
          Join Waitlist
        </button>
      </div>
      <p className='mt-6 text-gray-300 text-xs md:text-sm'>
        Join 2,400+ professionals on the list.
      </p>
    </section>
  );
};

export default WaitlistSection;
