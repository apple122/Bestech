import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import url from '../service/server'
import axios from "axios";
import { Link } from "react-router-dom";
import InterNetServer from "../Component/InterNetServer";

export default function About() {

    const [ GETAPIA, setAPIA ] = useState('')
    const [ Display, setDisplay ] = useState(false)
    useEffect(() => {
        axios.get(url.Mainurl + url.getAbout).then((res) => {
            setAPIA(res.data[0])
            console.log(res.data[0])
            setDisplay(true)
        }).catch((err) => {
            setDisplay(true)
        })
    }, [])

  return (
    <>
        <div className="container container-padding">
            {GETAPIA !== undefined ? <div className="card card-body">
                <div className="header-img text-center">
                    <img src={url.file + (GETAPIA == undefined ? '' : GETAPIA.image)} width='300'/>
                </div>
                <div className="card-title">
                    <h4><strong># {GETAPIA == undefined ? '' : GETAPIA.title}</strong></h4><hr/>
                    <strong>{GETAPIA == undefined ? '' : GETAPIA.description}</strong>
                </div>
            </div> : 
            <div className="card card-body text-center">
                <label>ບໍ່ມີຂໍ້ມູນ ກ່ຽວກັບ</label>
            </div> 
            }
        </div>
        {Display == false ? <InterNetServer /> : ''}
    </>
  )
}
