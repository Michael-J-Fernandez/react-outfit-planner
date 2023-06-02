import { useState } from "react"

export const useRerender = () => {
  const [state, setState] = useState(true);

  return () => setState(!state);
};