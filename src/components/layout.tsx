import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Layout = (enableScroll: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!enableScroll) {
        window.scrollTo(0, 0);
      }
    };

    if (!enableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [enableScroll, navigate]);
};
