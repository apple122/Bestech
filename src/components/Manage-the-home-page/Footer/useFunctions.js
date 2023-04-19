import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from '../data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [reducer, setRedeuce] = useReducer(x => x + 1, 0)

    useEffect(() => {
        axios.get(url.Mainurl + url.getfooter).then((res) => {
            setAPI(res.data.results.reverse())
        })
    }, [reducer])

    let Items = API[0]

    function onSUbmit(e) {
        e.preventDefault()
        if (API.length > 0) {
            axios.patch(url.Mainurl + url.patchfooter + API[0]?.id + '/', {
                "address": e.target[4].value,
                "email": e.target[2].value,
                "instagram_url": e.target[1].value,
                "facebook_url": e.target[0].value,
                "whatsapp": e.target[3].value,
                "is_active": true
            }).then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                setRedeuce()
                Toast.fire({
                    icon: 'success',
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            axios.post(url.Mainurl + url.createfooter + '/', {
                "address": e.target[4].value,
                "email": e.target[2].value,
                "instagram_url": e.target[1].value,
                "facebook_url": e.target[0].value,
                "whatsapp": e.target[3].value,
                "is_active": true
            }).then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                setRedeuce()
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        }
    }

    return {
        Items,
        onSUbmit,
    }
}
