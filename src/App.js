import React, { useEffect, useState } from 'react'
import { api_link } from './Api_link'
import { api_link_key } from './Api_link';

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(api_link,{
            method:"GET",
            headers:{
                Authorization:api_link_key
            }
        })
            .then((response) => response.json())
            .then((json) => setData(json.photos));

    }, [])

    const photos = data.map((e,i)=>{
        if(i<=3){
        return(
            <div key={i}>
                <img src={e.src.small} alt=''/>
            </div>
           )
        }
    })

    return (
        <div>{photos}</div>
    )
}

export default App