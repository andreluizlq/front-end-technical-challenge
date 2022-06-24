import { useContext } from "react";
import { StoresContext } from "../context/StoreContext";

const useStores = () => useContext(StoresContext);

export default useStores;
