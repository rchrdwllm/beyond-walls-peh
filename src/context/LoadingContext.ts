import { createContext } from "react";

const LoadingContext = createContext<[boolean, () => void]>([false, () => {}]);

export default LoadingContext;
