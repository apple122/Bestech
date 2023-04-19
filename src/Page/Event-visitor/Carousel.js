import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../../service/server'

export default function Carousel() {
    const [ CarouselERROR , setERROR ] = useState(false)
    const [ GETBANER, setBaner ] = useState([])
    useEffect(() => {
        axios.get(url.Mainurl + url.GETBANNER).then((res) => {
            setBaner(res.data)
            setERROR(true)
        }).catch((err) => {setERROR(false)})
    }, [])

    return (
      <>
        {CarouselERROR == true ? 
          <div className='mb-5'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                {GETBANER.map((item, index) => (
                  <li data-target="#carouselExampleIndicators" data-slide-to={index} class={`${index == 0 ? 'active' : ''}`}></li>
                ))}
              </ol>
              <div class="carousel-inner" id='carousel-border'>
                {GETBANER.map((item, index) => (
                    <div class={`carousel-item ${index == 0 ? 'active' : ''}`}>
                      <img class="d-block w-100" id='carousel-img' src={url.file + item.image}/>
                    </div>
                ))}
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div> : ''
        }
      </>
    )
}
