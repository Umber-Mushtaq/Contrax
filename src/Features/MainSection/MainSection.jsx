import AnimationBackground from "./AnimationBackground";
import contrax from "../../../Images/contrax2.png";
import PrivateButton from "./PrivateButton";
const MainSection = () => {
  return (
    <div className='relative w-full min-h-screen font-sans selection:bg-purple-500 selection:text-white'>
      <AnimationBackground />

      <nav className=' w-full flex justify-between items-center px-6 py-4 md:px-16 md:py-8 z-50 text-white'>
        <div
          className='font-extrabold tracking-widest text-2xl md:text-3xl whitespace-nowrap'
          style={{
            filter:
              "drop-shadow(0px 0px 8px #ffcc00) drop-shadow(0px 0px 15px #ffaa32)",
          }}
        >
          CONTRAX
        </div>
      </nav>

      <main className='flex flex-col  gap-9 lg:flex-row items-center justify-around px-8 pt-15 md:pt-15 md:px-5 text-white'>
        <div className='flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left'>
          <PrivateButton />

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading:tight md:whitespace-nowrap w-fit'>
            Contracts shouldn't <br className='hidden md:block' /> slow down
            business.
          </h1>

          <p className='text-lg md:text-xl opacity-70 w-full lg:w-[80%] mx-auto lg:mx-0'>
            A modern, custom design to build entities, agreements, market
            approach and manager. Engineers, here's the next generation of
            contracts.
          </p>
        </div>

        <div className=' md:block w-full max-w-[400px] max-h-[300px] aspect-square lg:w-[420px] mt-5 lg:mt-0 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10'>
          <img
            src={contrax}
            alt='Dashboard Preview'
            className='w-full h-full object-cover'
          />
        </div>
      </main>
    </div>
  );
};

export default MainSection;
