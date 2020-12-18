import React,{createContext,useState} from 'react';


export const ModalContext=createContext();

const ModalProvider = (props) => {

    const [idReceta,guardarIdReceta]=useState({})
    

    return (  

        <ModalContext.Provider
            vale={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>

    );
}
 
export default ModalProvider;