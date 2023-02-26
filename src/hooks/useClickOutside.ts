import { useEffect } from "react";

function useClickOutside(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handleClick: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
}

export default useClickOutside;
