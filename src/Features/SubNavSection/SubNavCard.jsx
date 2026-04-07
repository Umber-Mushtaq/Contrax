import {
  IoBarChartOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

const SubNavCard = () => {
  const links = [
    { name: "Business", icon: <IoBarChartOutline /> },
    { name: "Lawyers", icon: <IoPersonOutline /> },
    { name: "Legal Terms", icon: <IoSettingsOutline /> },
    { name: "Operations Team", icon: <IoHelpCircleOutline /> },
  ];

  return (
    <section className='py-20 px-6 flex justify-center'>
      {/* The Glass Container */}
      <div className='w-full max-w-5xl border-5 border-white/10 rounded-[2rem] py-10 px-8 md:px-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {links.map((link, index) => (
            <div
              key={index}
              className='group flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300'
            >
              {/* Purple Icon */}
              <div className='text-purple-500 text-2xl group-hover:scale-110 group-hover:text-purple-400 transition-transform'>
                {link.icon}
              </div>

              {/* Link Name */}
              <span className='text-white text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity'>
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubNavCard;
