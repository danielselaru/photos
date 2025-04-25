import React, { useEffect, useState } from 'react'
// import { api_link } from './Api_link'
import { api_link_key } from './Api_link';
import "./style.css"

function App() {
   
    const [data, setData] = useState([])
    const [img, setimg] = useState(null)
    const [type,settype] = useState('dog')
    
    const api_link =  `https://api.pexels.com/v1/search?query=${type}`

    function extend_img(i) {
            setimg(i) 
    }
      
    console.log(api_link)

    useEffect(() => {
        fetch(api_link, {
            method: "GET",
            headers: {
                Authorization: api_link_key
            }
        })
            .then((response) => response.json())
            .then((json) => setData(json.photos));

    }, [api_link])

    const photos = data.map((e, i) => {

        return (
            <div key={i} >
                <img src={e.src.small} alt='' className={`images ${img === i ? 'big' : 'small'}`} onClick={() => extend_img(i)} key={i} />
            </div>
        )
    }
    )

    return (
        <div>
            
            <div className='buttons'>
                <button onClick={() => settype('ocean')}>Ocean</button>
                <button onClick={() => settype('tigers')}>Tigers</button>
                <button onClick={() => settype('pears')}>Pears</button>
                <button onClick={() => settype('back')}>Back</button>
            </div>
            <div className='detalii'>{photos}</div>
        </div>
    )
}

export default App