import axios from "axios"
import { useEffect, useState } from "react"

let Display = () => {
    let [disp, setDisp] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then((res) => {
                console.log("DATA:", res.data)
                if (Array.isArray(res.data)) {
                    setDisp(res.data)
                } else {
                    setError("Backend did not return array: ")
                }
            })
    }, [])

    return (
        <div>
            {disp.length > 0 ? (
                disp.map((obj,int) => (
                    <div key={obj._id}>
                        <h1>{int+1}</h1>
                        <h3>{obj._id}</h3>
                        <h3>{obj.pname}</h3>
                        <p>{obj.category}</p>
                        <h2>{obj.price}</h2>
                    </div>
                ))
            ) : (
                <h2>No Data Found</h2>
            )}
        </div>
    )
}

export default Display