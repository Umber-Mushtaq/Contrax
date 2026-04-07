import MainSection from "./Features/MainSection/MainSection";
import FeaturesGrid from "./Features/FeaturesSection/FeaturesGrid";
import "./App.css";
import ManagementSection from "./Features/ManagementSection/Management";
import PrecisionSection from "./Features/PrecisionSection/Precision";
import ProcessSection from "./Features/ProcessSection/Process";
import SubNavCard from "./Features/SubNavSection/SubNavCard";
import ActionCard from "./Features/ActionCardSection/ActionCard";
import WaitlistSection from "./Features/WaitListSection/WaitList";
import Footer from "./Features/FooterSection/Footer";

function App() {
  return (
    <>
      <MainSection />
      <section className='bg-[radial-gradient(circle_at_70%_40%,#3a1c71_0%,#160a2c_40%,#05050a_100%)]'>
        {/* <hr className='border border-gray-500' />
        <section className='flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 text-white'>
          <p className='text-center text-gray-300 text-sm md:text-1xl py-4 tracking-tight md:tracking-wide w-full md:w-[50%]'>
            BUILT FOR MODERN TEAMS, HANDLING CRITICAL AGREEMENTS.
          </p>
          <ul className='flex justify-center gap-3 md:gap-6 mx-3 md:mx-0 w-full md:w-auto'>
            <li className='text-center text-gray-400 text-xs md:text-2xl font-bold'>
              FORGE
            </li>
            <li className='text-center text-gray-400 text-xs md:text-2xl font-bold'>
              NOMAD
            </li>
            <li className='text-center text-gray-400 text-xs md:text-2xl font-bold'>
              QUARTZ
            </li>
            <li className='text-center text-gray-400 text-xs md:text-2xl font-bold'>
              VANTAGE
            </li>
          </ul>
        </section>
        <hr className='border border-gray-500' /> */}
        <FeaturesGrid />
        <ManagementSection />
        <PrecisionSection />
        <ProcessSection />
        <SubNavCard />
        <ActionCard />
        {/* <WaitlistSection /> */}
        <Footer />
      </section>
    </>
  );
}

export default App;
