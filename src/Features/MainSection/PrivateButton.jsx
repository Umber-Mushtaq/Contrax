import { useEffect, useRef } from "react";
import gsap from "gsap";

function PrivateButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.to(btnRef.current, {
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <button
      ref={btnRef}
      className='pointer-events-auto text-[#b8860b] border border-gray-400 font-bold bg-[#011f14] px-6 py-1 w-fit rounded-full mx-auto lg:mx-0 text-xs uppercase tracking-wider'
    >
      Private Access
    </button>
  );
}

export default PrivateButton;
