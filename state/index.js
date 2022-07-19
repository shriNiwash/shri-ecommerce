import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState} = createGlobalState({
    username: 'Geuest',
    productName: "name",
});

export {useGlobalState,setGlobalState};