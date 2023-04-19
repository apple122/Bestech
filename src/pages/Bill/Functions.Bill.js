import React, { useEffect, useState, useReducer } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Functions_Bill() {

    const [API, setAPI] = useState([])
    const [Page, setPage] = useState(1)
    const [Load, setLoad] = useState(false)
    const [Count, setCount] = useState(0)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.getBill + '&page=' + InPage).then((res) => {
            setAPI(res.data.results)
            setPage(res.data.total_pages)
            setLoad(true)
            setCount(res.data.count)
        })
    }, [reducer])

    function delBill(e) {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ ຫຼື ບໍ່?',
            text: "ເມືອລົບແລ້ວຂໍ້ມູນຈະຖືກລົບຖາວອນ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ລົບຂໍ້ມູນ!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(data.Mainurl + data.delBill + e.id).then(() => {
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

    const [InPage, setInPage] = useState(1)
    function next() {
        if (InPage < Page) {
            setInPage(InPage + 1)
            setLoad(false)
            setReducer()
        }
    }
    function back() {
        if (InPage > 1) {
            setInPage(InPage - 1)
            setLoad(false)
            setReducer()
        }
    }

    function ResetData() {
        setReducer()
    }
    return {
        API,
        Load,
        delBill,
        back,
        next,
        InPage,
        Page,
        Count,
        ResetData
    }
}
