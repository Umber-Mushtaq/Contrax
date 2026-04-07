import { IoLockClosedOutline } from "react-icons/io5";

const ActionCard = () => {
  return (
    <section className='py-10 px-6 flex justify-center'>
      =
      <div className='w-full max-w-4xl bg-white/[0.03] border-5 border-white/10 backdrop-blur-md rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center'>
        <div className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8'>
          <IoLockClosedOutline className='text-white/70 text-xl' />
        </div>

        <h2 className='text-white text-xl md:text-2xl leading-relaxed max-w-2xl mb-10 font-medium'>
          Currently in private access. We're working with a limited group of
          partners to refine the experience before a wider roll-out.
        </h2>

        {/* <button className='bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95'>
          Request Invite
        </button> */}
      </div>
    </section>
  );
};

export default ActionCard;
