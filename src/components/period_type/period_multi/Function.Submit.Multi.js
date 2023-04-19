import React, { useState } from 'react'
import data from '../../../pages/Period/Period_Multi/data'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Function_Submit_Multi() {

    const navigate = useNavigate()

    function Submit(e) {
        e.preventDefault()
        axios.post(data.Mainurl + data.postperiod_multi, {
            "multi_period": e.target[0].value,
            "open_date": e.target[3].value,
            "close_date": e.target[7].value,
            "is_active": true,
            "period_id": Items_Period,
            "prize_type": Items,
            "period_type": Items_type
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
            navigate('/period_multi')
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    const [Items, setItems] = useState()
    function plus_items(e) {
        let array_plus = []
        setItems(array_plus)
        for (let x = 0; x < e.length; x++) {
            array_plus.push(e[x].value)
        }
        return array_plus
    }

    const [Items_type, setItems_type] = useState()
    function plus_period_type(e) {
        let array_Ptype = []
        setItems_type(array_Ptype)
        for (let x = 0; x < e.length; x++) {
            array_Ptype.push(e[x].value)
        }
        return array_Ptype
    }

    const [Items_Period, setItems_Period] = useState()
    function plus_period(e) {
        let array_Period = []
        setItems_Period(array_Period)
        for (let x = 0; x < e.length; x++) {
            array_Period.push(e[x].value)
        }
        return array_Period
    }

    return {
        Submit,
        plus_period_type,
        plus_items,
        plus_period,
    }
}
