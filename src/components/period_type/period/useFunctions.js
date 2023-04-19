import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from '../data'

export default function useFunctions() {
    let navigate = useNavigate()

    const [loadding, setloading] = useState(false)

    const [APIPRIZE, setAPIPRIZE] = useState([])
    const [Page_prize, setPage_prize] = useState(1)

    const [APIPERIOD_TYPE, setP_TYPE] = useState([])
    const [Page_period, setPage_period] = useState(1)

    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(url.Mainurl + url.get_prize_type + '?page=' + next_prize_type).then((res) => {
            setAPIPRIZE(res.data.results)
            setPage_prize(res.data.total_pages)
        })

        axios.get(url.Mainurl + url.getpriod_type + '?page=' + next_period_type).then((res) => {
            setP_TYPE(res.data.results)
            setPage_period(res.data.total_pages)
        })
    }, [reducer])

    const [openlist, steOpenList] = useState(false)
    function Click_list() {
        if (openlist == false) {
            steOpenList(true)
        } else {
            steOpenList(false)
        }
    }

    
    function Submit(e) {
        e.preventDefault()
        axios.post(url.Mainurl + url.postperiod, {
            "period": e.target[0].value,
            "open_date": e.target[1].value,
            "close_date": e.target[2].value,
            "is_active": true,
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
            navigate('/period')
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
        console.log(e)
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

    console.log('Items', Items_type, Items)

    const [next_period_type, setnext_period_type] = useState(1)
    function next_period() {
        if (next_period_type < Page_period) {
            setnext_period_type(next_period_type + 1)
            setReducer()
        }
    }

    function black_period() {
        if (next_period_type > 1) {
            setnext_period_type(next_period_type - 1)
            setReducer()
        }
    }

    const [next_prize_type, setnext_prize_type] = useState(1)
    function next_prize() {
        if (next_prize_type < Page_prize) {
            setnext_prize_type(next_prize_type + 1)
            setReducer()
        }
    }

    function black_prize() {
        if (next_prize_type > 1) {
            setnext_prize_type(next_prize_type - 1)
            setReducer()
        }
    }

    return {
        Click_list,
        openlist,
        APIPRIZE,
        plus_items,
        Submit,
        APIPERIOD_TYPE,
        plus_period_type,

        next_period,
        black_period,
        Page_period,
        next_period_type,

        next_prize,
        black_prize,
        Page_prize,
        next_prize_type,

    }
}
