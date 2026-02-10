import React from 'react'
import ApiContext from './ApiContext';
const ApiContextProvider = ({children}) => {

    const [selectedlang,setSelectedlang] = React.useState('');
    const [selectedver,setSelectedver] = React.useState('');
    const [codeValue,setCodeValue] = React.useState('')
  return (
    <>
    <ApiContext.Provider value={{selectedlang,setSelectedlang,selectedver,setSelectedver,codeValue,setCodeValue}}>
        {children}
    </ApiContext.Provider>


    </>
  )
}

export default ApiContextProvider
