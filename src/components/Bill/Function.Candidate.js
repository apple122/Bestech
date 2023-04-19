import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from '../candidate/data'

export default function Function_Candidate() {

    let navigate = useNavigate()

    function Submit(e) {
        e.preventDefault()
        if (e.target[2, 3, 4].value !== '') {
            if (Loadnumber == 'info') {
                axios.post(url.Mainurl + url.postcandidate, {
                    "full_name": e.target[1].value,
                    "phone_number": e.target[0].value,
                    "is_active": true,
                    "province": e.target[2].value,
                    "district": e.target[3].value,
                    "village": e.target[4].value
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
                    navigate('/add-bil', {state: res.data})
                    Toast.fire({
                        icon: 'success',
                        title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                    })
                })
            } else {
                alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນເບີໂທໃຫ້ຄົບຖ້ວນ ~~')
            }

        } else {
            if (Loadnumber == 'Success') {
                navigate('/add-bil', {state: Items})
            } else {
                alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນເບີໂທໃຫ້ຄົບຖ້ວນ ~~')
            }
        }
    }

    const [Loadnumber, setLoadnumber] = useState('false')
    const [LegnhtNumber, setLnumber] = useState(0)
    const [Items, setItems] = useState([])
    function Number_phone(e) {
        setLnumber(e.target.value.substring(2, 0))
        if (e.target.value.length > 9) {
            setLoadnumber('warning')
            axios.get(url.Mainurl + url.getcandidate + '&phone_number=' + e.target.value).then((res) => {
                if (res.data.results.length > 0) {
                    setLoadnumber('Success')
                    setItems(res.data.results[0])
                } else {
                    setItems('')
                    setLoadnumber('info')
                }
            }).catch((err) => { setLoadnumber('info') })
        } else if (e.target.value.length > 0) {
            setLoadnumber('true')
        } else {
            setLoadnumber('false')
        }
    }

    return {
        Submit,
        Number_phone,
        Loadnumber,
        Items,
    }
}
