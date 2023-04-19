import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from '../data'

export default function useFunctions() {
    const navigate = useNavigate()

    const [API, setAPI] = useState([])
    const [Page, setPage] = useState(1)
    const [Count, setCount] = useState(0)

    const [loadding, setload] = useState(false)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(url.Mainurl + url.getslide + '?page=' + pageN).then((res) => {
            setAPI(res.data.results)
            setPage(res.data.total_pages)
            setCount(res.data.count)
            setload(true)
        })
    }, [reducer])

    function Submit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target[0].files[0])
        formData.append('title', e.target[1].value)
        formData.append('is_active', true)

        axios.post(url.Mainurl + url.postslide, formData).then((res) => {
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
            navigate('/slider')
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    function delslide(e) {
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
                axios.delete(url.Mainurl + url.delslide + e.id + '/').then((res) => {
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
                    setload(false)
                    setReducer()
                    Toast.fire({
                        icon: 'success',
                        title: 'ລົບຂໍ້ມູນສຳເລັດ'
                    })
                })
            }
        })
    }

    function active(e) {

        axios.patch(url.Mainurl + url.patchslide + e.id + '/', {
            "is_active": e.is_active === true ? false : true
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
            setload(false)
            setReducer()
            navigate('/slider')
            Toast.fire({
                icon: 'success',
                title: e.is_active === false ? 'ເປິດໃຊ້ງານຂໍ້ມູນສຳເລັດ' : 'ປິດໃຊ້ງານຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    const [pageN, setPangN] = useState(1)
    function next() {
        if (pageN < Page) {
            setPangN(pageN + 1)
            setReducer()
            setload(false)
        }
    }
    function black() {
        if (pageN > 1) {
            setPangN(pageN - 1)
            setReducer()
            setload(false)
        }
    }

    function ResetData() {
        setReducer()
    }

    return {
        API,
        Submit,
        delslide,

        next,
        black,
        pageN,
        Page,
        Count,
        active,
        loadding,
        ResetData,
    }
}
