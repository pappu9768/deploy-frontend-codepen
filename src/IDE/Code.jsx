import Editor from './Editor'
import Output from './Output'
import '../App.css'
import Navbar from './Navbar'
const Code = () => {
    return (
        <>
            <Navbar/>
            <div className='Code'>
                <Editor />
                <Output />
            </div>


        </>
    )
}

export default Code
