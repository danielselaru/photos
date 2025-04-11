import React, { useEffect, useState } from 'react'
import { api_link } from './Api_link'
import { api_link_key } from './Api_link';
import "./style.css"

function App() {

    const [data, setData] = useState([])
    const [img, setimg] = useState(false)

    function extend_img(i) {
         console.log(img)
        // setimg(!img)
        if(img && i===2){
            // setimg((a)=>!a)
             setimg(!img)
        }
    }
    const styleimg = (img)?'big':'small'

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
     
        return(
            <div key={i} >
                <img src={e.src.small} alt='' className={`images ${styleimg}`} onClick={()=>extend_img(i)}/>
            </div>
           )
        }
    )

    return (
        <div className='detalii'>{photos}</div>
    )
}

export default App