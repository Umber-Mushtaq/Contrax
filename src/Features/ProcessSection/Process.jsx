const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Draft",
      desc: "Start from template of import existing documents. Our editor supports dynamic variables for instant customization.",
    },
    {
      id: "02",
      title: "Collaborate",
      desc: "Invite internal teams and external parteners to redline in the shared, version-controlled workspace.",
    },
    {
      id: "03",
      title: "Finalize",
      desc: "Execute with legaly binding signatures and automatically archive to your secure vault.",
    },
  ];

  return (
    <section className='py-24 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20'>
        {steps.map((step) => (
          <div key={step.id} className='flex flex-col gap-4'>
            {/* Step Number */}
            <span className='text-gray-500 text-4xl md:text-5xl font-light tracking-tighter'>
              {step.id}
            </span>

            {/* Step Title */}
            <h3 className='text-white text-2xl md:text-3xl font-bold'>
              {step.title}
            </h3>

            {/* Step Description */}
            <p className='text-gray-400 text-lg leading-relaxed max-w-sm'>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
