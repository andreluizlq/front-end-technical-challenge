import { ReactNode, createContext, useEffect, useState } from "react";
import { IStore } from "../interfaces/store";
import { storeApi } from "../utils/api";

interface IStoreContextState {
  billing: String;
  stores: IStore[];
  filterStoresByName: (name: string) => void;
  handleChangeBilling: (value: string) => void;
}

const initialState = {
  billing: "15.000,00",
  stores: [],
  filterStoresByName: (name: string) => null,
  handleChangeBilling: (value: string) => null,
};

const StoresContext = createContext<IStoreContextState>(initialState);

function StoresProvider({ children }: { children: ReactNode }) {
  const [stores, setStores] = useState<IStore[]>([]);
  const [billing, setBilling] = useState<string>(initialState.billing);
  const [initialStore, setInitialStore] = useState<IStore[]>([]);

  const filterStoresByName = (name: string) => {
    const storeFiltered = initialStore.filter((store) =>
      store.name.includes(name)
    );
    setStores(storeFiltered);
  };

  const handleChangeBilling = (value: string) => {
    setBilling(value);
  };

  useEffect(() => {
    const getStore = async () => {
      const { data } = await storeApi.get("");
      setInitialStore(data.stores);
      setStores(data.stores);
    };
    getStore();
  }, []);

  return (
    <StoresContext.Provider
      value={{
        billing,
        stores,
        handleChangeBilling,
        filterStoresByName,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
}
export { StoresProvider, StoresContext };
