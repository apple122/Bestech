import React, { useEffect, useReducer, useState } from 'react'

import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Functions_Multi() {

    const [API, setAPI] = useState([])
    const [APITrue, setAPITrue] = useState([])
    const [Page, setPage] = useState(1)

    const [Load, setLoad] = useState(false)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.getperiod_multiFalse + '&page=' + InPage).then((res) => {
            setAPI(res.data.results)
            setLoad(true)
            setPage(res.data.total_pages)
        })

        axios.get(data.Mainurl + data.getperiod_multiTrue + '&page=' + InPage).then((res) => {
            setAPITrue(res.data.results)
            setLoad(true)
            setPage(res.data.total_pages)
        })
    }, [reducer])

    function deltype(e) {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການປິດງວດ ຫຼື ບໍ່?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ປິດງວດ!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(data.Mainurl + data.patchperiod_multi + e.id, {
                    "is_active": false
                }).then(() => {
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
                        title: 'ປິດງວດສຳເລັດ'
                    })
                })
            }
        })
    }

    function SubEdit(e) {
        e.preventDefault()
        console.log(e)
        if ((Items && Items_period && Items_type) !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod_multi + e.target[0].value, {
                "multi_period": e.target[1].value,
                "open_date": e.target[4].value,
                "close_date": e.target[8].value,
                "period_id": Items_period,
                "prize_type": Items,
                "period_type": Items_type
            }).then(() => {
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
                    title: 'ປິດງວດສຳເລັດ'
                })
            })
        } else if (Items !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod_multi + e.target[0].value, {
                "multi_period": e.target[1].value,
                "open_date": e.target[4].value,
                "close_date": e.target[8].value,
                "prize_type": Items
            }).then(() => {
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
                    title: 'ປິດງວດສຳເລັດ'
                })
            })
        } else if (Items_period !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod_multi + e.target[0].value, {
                "multi_period": e.target[1].value,
                "open_date": e.target[4].value,
                "close_date": e.target[8].value,
                "period_id": Items_period
            }).then(() => {
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
                    title: 'ປິດງວດສຳເລັດ'
                })
            })
        } else if (Items_type !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod_multi + e.target[0].value, {
                "multi_period": e.target[1].value,
                "open_date": e.target[4].value,
                "close_date": e.target[8].value,
                "period_type": Items_type
            }).then(() => {
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
                    title: 'ປິດງວດສຳເລັດ'
                })
            })
        } else {
            axios.patch(data.Mainurl + data.patchperiod_multi + e.target[0].value, {
                "multi_period": e.target[1].value,
                "open_date": e.target[4].value,
                "close_date": e.target[8].value
            }).then(() => {
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
                    title: 'ປິດງວດສຳເລັດ'
                })
            })
        }
    }

    const [InPage, setInPage] = useState(1)
    function next() {
        if (InPage < Page) {
            setReducer()
            setLoad(false)
            setInPage(InPage + 1)
        }
    }
    function back() {
        if (InPage > 1) {
            setReducer()
            setLoad(false)
            setInPage(InPage - 1)
        }
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

    const [Items_period, setItems_period] = useState()
    function plus_period(e) {
        let array_Period = []
        setItems_period(array_Period)
        for (let x = 0; x < e.length; x++) {
            array_Period.push(e[x].value)
        }
        return array_Period
    }

    return {
        API,
        Load,
        deltype,
        APITrue,
        next,
        back,
        InPage,
        Page,

        SubEdit,
        plus_period_type,
        plus_items,
        plus_period
    }
}
