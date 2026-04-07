import {
  IoCheckmark,
  IoShieldCheckmarkOutline,
  IoGitPullRequestOutline,
  IoTerminalOutline,
} from "react-icons/io5";

const PrecisionSection = () => {
  const items = [
    {
      title: "Smart Workflows",
      desc: "Logic based routing that ensures the right person sees the right terms at the right time.",
      icon: <IoCheckmark className='text-gray-800' size={24} />,
    },
    {
      title: "Secure Records",
      desc: "Immutable storage with end-to-end encryption, for your historical version and final execution.",
      icon: <IoShieldCheckmarkOutline className='text-gray-800' size={24} />,
    },
    {
      title: "Seamless Approvals",
      desc: "One click internal sign-offs and legal reviews without leaving the workspace.",
      icon: <IoGitPullRequestOutline className='text-gray-800' size={24} />,
    },
    {
      title: "Intelligent Insights",
      desc: "Turn static pdfs into dynamic data points. Monitor expiry, obligations and risk profiles.",
      icon: <IoTerminalOutline className='text-gray-800' size={24} />,
    },
  ];

  return (
    <section className=' py-24 px-6 md:px-20'>
      <div className='max-w-4xl mx-auto flex flex-col items-center text-center mb-16'>
        <h2 className='text-white text-4xl md:text-5xl font-bold mb-4'>
          Precision Engineering.
        </h2>
        <p className='text-gray-500 text-xs md:text-sm font-bold mt-3 tracking-[0.3em] uppercase font-mono'>
          Four pillers of contrax experience.
        </p>
      </div>

      <div className='max-w-4xl mx-auto flex flex-col gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className='group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 flex items-start md:items-center gap-6 transition-all duration-300 hover:scale-[1.01]'
          >
            {/* Square Icon Box */}
            <div className='flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors'>
              {item.icon}
            </div>

            {/* Text Content */}
            <div className='flex flex-col text-left'>
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-1'>
                {item.title}
              </h3>
              <p className='text-gray-500 text-sm md:text-base leading-relaxed'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrecisionSection;
