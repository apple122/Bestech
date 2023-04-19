import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Swal from 'sweetalert2'
import url from '../data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Page, setPage] = useState(1)

    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(url.Mainurl + url.getpriod_type + '?page=' + next_period).then((res) => {
            setAPI(res.data.results.reverse())
            setPage(res.data.total_pages)
        })
    }, [reducer])

    function Submit(e) {
        e.preventDefault()
        axios.post(url.Mainurl + url.postperiod_type, {
            "period_type": e.target[0].value,
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
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    const [Items, setItems] = useState('')
    function edite(e) {
        setItems(e)
    }

    function Subedite(e) {
        e.preventDefault()
        axios.patch(url.Mainurl + url.patchperiod_type + e.target[0].value, {
            "period_type": e.target[1].value
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

    function delType(e) {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ ຫຼື ບໍ່?',
            text: "ເມືອລົບແລ້ວຂໍ້ມູນຈະຍັງເກັບ ແຕ່ບໍ່ສາມາດນຳມາໃຊ້ໄດ້ອີກ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ລົບຂໍ້ມູນ!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(url.Mainurl + url.patchperiod_type + e.id, {
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
        })
    }

    const [next_period, setnext_period] = useState(1)
    function next() {
        if (next_period < Page) {
            setnext_period(next_period + 1)
            setReducer()
        }
    }

    function black() {
        if (next_period > 1) {
            setnext_period(next_period - 1)
            setReducer()
        }
    }

    return {
        API,
        edite,
        Items,
        Subedite,
        Submit,
        delType,
        next,
        black,
        Page,
        next_period
    }
}
