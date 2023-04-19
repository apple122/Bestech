import React, { useEffect, useReducer, useState } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Function_Table_Period() {

    const [APITrue, setAPITrue] = useState([])
    const [APIFalse, setAPIFalse] = useState([])
    const [Page, setPage] = useState(1)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const [Load, setLoad] = useState(false)
    useEffect(() => {
        axios.get(data.Mainurl + data.getpriodtrue + '&page=' + InPage).then((res) => {
            setAPITrue(res.data.results)
            setPage(res.data.total_pages)
            setLoad(true)
        })

        axios.get(data.Mainurl + data.getpriodfalse + '&page=' + InPage).then((res) => {
            setAPIFalse(res.data.results)
            setPage(res.data.total_pages)
            setLoad(true)
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
                axios.patch(data.Mainurl + data.patchperiod + e.id, {
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

        if ((Items && Items_type) !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value,
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
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        } else if (Items_type !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value,
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
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        } else if (Items !== undefined) {
            axios.patch(data.Mainurl + data.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value,
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
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            axios.patch(data.Mainurl + data.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value
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
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
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

    return {
        APITrue,
        APIFalse,
        deltype,
        SubEdit,

        Page,
        InPage,
        back,
        next,
        Load,

        plus_period_type,
        plus_items
    }
}
