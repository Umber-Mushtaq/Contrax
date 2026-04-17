import {
  IoDocumentsOutline,
  IoPulseOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { AiOutlineWarning } from "react-icons/ai";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Lost documents",
      desc: "Stop searching through email threads and fragmented cloud folders. Find what you need instantly.",
      icon: <IoDocumentsOutline size={28} className='text-gray-700' />,
    },
    {
      title: "Slow approval",
      desc: "Don't let beurocracy stal your growth. Automated routing gets signatures in hours, not days.",
      icon: <IoPulseOutline size={28} className='text-gray-700' />,
    },
    {
      title: "Version confusion",
      desc: "Single source of truth for every clause, no more 'final_final_v2.docx' filenames or missed edits.",
      icon: <AiOutlineWarning size={28} className='text-gray-700' />,
    },
    {
      title: "No transparency",
      desc: "Real time visibility into every stage of the agreement lifecycle for every stackholder.",
      icon: <IoEyeOutline size={28} className='text-gray-700' />,
    },
  ];
  return (
    <section className='py-24 px-6 md:px-20 overflow-hidden'>
      {/* Section Header */}
      <div className='max-w-6xl mx-auto mb-16'>
        <h2 className='text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight'>
          Legacy systems are broken.
        </h2>
        {/* The purple accent line */}
        <div className='w-30 h-1.5 bg-purple-600 rounded-full'></div>
      </div>

      {/* Grid Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {features.map((item, index) => (
          <div
            key={index}
            className='group bg-white p-12 rounded-[2.5rem] flex flex-col gap-5 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20'
          >
            {/* Icon Wrapper with subtle scale on hover */}
            <div className='bg-gray-100 w-fit p-3 rounded-xl group-hover:bg-purple-50 transition-colors'>
              {item.icon}
            </div>

            <h3 className='text-2xl font-bold text-gray-900 tracking-tight'>
              {item.title}
            </h3>

            <p className='text-gray-500 leading-relaxed text-lg'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
