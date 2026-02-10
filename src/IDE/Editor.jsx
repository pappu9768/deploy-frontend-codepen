import React, { useRef, useContext } from 'react'
import LanguageSelector from './LanguageSelector'
import { Editor as Ide } from '@monaco-editor/react';
import ApiContext from '../context/ApiContext';


import '../App.css';
const Editor = () => {

  const { codeValue, setCodeValue } = useContext(ApiContext);
  const editorRef = useRef();
  const handleMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }
  return (
    <>
      <div
        className='main-editor'
      >
        <div className='lang-div'>
          <LanguageSelector />
        </div>

        <div className='editor'>
          <Ide
            language="javascript"
            theme="vs-dark"
            height="100%" 
            width="100%"
            value={codeValue}
            onChange={(value) => setCodeValue(value)}
            onMount={handleMount}
          />
        </div>
      </div>

    </>
  )
}

export default Editor
