import { create } from "zustand";

export interface globalStates {
    singleGlobalDomainData: any;
    setSingleGlobalDomainData: (value: any) => void;
}

const useGlobalStates = create<globalStates>((set) => ({
    singleGlobalDomainData: null,
    setSingleGlobalDomainData(value) {
        set({
            singleGlobalDomainData: value,
        });
    },
}));

export default useGlobalStates;
