import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import url from "../data";
import Swal from 'sweetalert2';

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Page, setPage] = useState(0)

    const [Count, setCount] = useState([])

    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const [Loadding, setLoadding] = useState(false)
    useEffect(() => {
        axios.get(url.Mainurl + url.get_prize_type + '?page=' + index_page).then((res) => {
            setAPI(res.data.results)
            setPage(res.data.total_pages)
            setLoadding(true)

            axios.get(url.Mainurl + url.get_prize_type + '?page=1').then((res) => {
                setCount(res.data.results)
            })
        })
    }, [reducer])

    function Submit(e) {
        e.preventDefault()
        axios.post(url.Mainurl + url.post_type, {
            prize_type: e.target[0].value,
            is_active: true
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
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ເພີມປະເທດລາງວັນສຳເລັດ'
            })
        })

    }

    function delType(e) {
        axios.patch(url.Mainurl + url.patch_Type + e.id + '/', {
            "is_active": false
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
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ລົບຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    function Subedite(e) {
        e.preventDefault()
        axios.patch(url.Mainurl + url.patch_Type + e.target[0].value + '/', {
            "prize_type": e.target[1].value
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
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ' 
            })
        })
    }

    const [index_page, setIn_Page] = useState(1)
    function next() {
        if (index_page < Page) {
            setIn_Page(index_page + 1)
            setReducer()
            setLoadding(false)
        }
    }
    function back() {
        if (index_page > 1) {
            setIn_Page(index_page - 1)
            setReducer()
            setLoadding(false)
        }
    }

    let x = Count.length * (index_page - 1) + 1

    return {
        Submit,
        API,

        index_page,
        Page,
        next,
        back,

        Loadding,
        x,

        delType,
        Subedite,
    }
}
