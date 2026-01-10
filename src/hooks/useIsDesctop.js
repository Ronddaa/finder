import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 1024) {
  // Изначально null, чтобы не было несоответствия при гидратации
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isDesktop;
}