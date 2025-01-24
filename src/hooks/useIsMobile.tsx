import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches); // Tailwind's `sm` breakpoint
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Add resize listener

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Cleanup listener
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
