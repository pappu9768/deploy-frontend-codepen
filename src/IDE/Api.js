import { toast } from "react-toastify";
export const Api = async (selectedlang, selectedver, code) => {

    try {
        const url = 'https://emkc.org/api/v2/piston/execute'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                language: selectedlang,
                version: selectedver,
                files: [{
                    // name:'main.js',
                    content: code
                }]
            })
        })
        const result = await res.json();
        // console.log(result.run.stdout);
        return result
    } catch (error) {
        // console.log(error)
        toast.error("Api error",error)
    }
}