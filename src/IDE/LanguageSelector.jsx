import React, { useContext, useState } from 'react'
import ApiContext from '../context/ApiContext'
import '../App.css'



const LanguageSelector = () => {

    const { setSelectedlang, setSelectedver } = useContext(ApiContext);

    const [selected, setSelected] = useState('')
    const runtime = [
        { language: "javascript", version: "18.15.0" },
        { language: "python", version: "3.10.0" },
        { language: "cpp", version: "10.2.0" }
    ]

    const handleSelect = (e) => {
        const values = JSON.parse(e.target.value);
        setSelected(values);
        console.log(values);
        setSelectedlang(values.language)
        setSelectedver(values.version)
    }
    return (
        <>
            <div style={{ marginBottom: "12px" }}>
                <select
                    onChange={handleSelect}
                    className='langauge-main'
                >
                    <option value="">-- Select Language --</option>
                    {runtime.map((options, index) => (
                        <option
                            key={index}
                            value={JSON.stringify(options)}
                            style={{ background: "#1e1e1e", color: "#fff" }}
                        >
                            {options.language} ({options.version})
                        </option>
                    ))}
                </select>
            </div>


        </>
    )
}

export default LanguageSelector
