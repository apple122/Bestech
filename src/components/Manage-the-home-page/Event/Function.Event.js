import React, { useEffect, useState, useReducer } from 'react'
import data from '../data'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Function_Event() {

    let navigate = useNavigate()

    const [APITrue, setAPITrue] = useState([])
    const [CountTrue, setcounttrue] = useState(0)
    const [APIFalse, setAPIFalse] = useState([])
    const [CountFalse, setcountfalse] = useState(0)

    const [Period, setPeriod] = useState([])
    const [preview, setPreview] = useState(undefined)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const [Load, setload] = useState(false)

    const [Pagetrue, setPagetrue] = useState(1)
    const [Pagefalse, setPagefalse] = useState(1)

    useEffect(() => {
        axios.get(data.Mainurl + data.getEventtrue + '&page=' + InPagetrue).then((res) => {
            setAPITrue(res.data.results)
            setcounttrue(res.data.count)
            setPagetrue(res.data.total_pages)
            setload(true)
        })

        axios.get(data.Mainurl + data.getEventfalse + '&page=' + InPagefalse).then((res) => {
            setAPIFalse(res.data.results)
            setcountfalse(res.data.count)
            setPagefalse(res.data.total_pages)
            setload(true)
        })

        axios.get(data.Mainurl + data.getpriod).then((res) => {
            setPeriod(res.data.results)
        })
    }, [reducer])

    function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target[0].files[0])
        formData.append('title', e.target[2].value)
        formData.append('sub_title', e.target[3].value)
        formData.append('phone', (e.target[4].value).substring(4, 105))
        formData.append('address', e.target[5].value)
        formData.append('description', e.target[6].value)
        formData.append('period', Period[0]?.id)
        formData.append('is_active', true)

        if (preview !== undefined) {
            axios.post(data.Mainurl + data.postEvent, formData).then((res) => {
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
                navigate('/event')
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            alert('ກະລຸນາປ້ອນຮູບພາບ ແລະ ຂໍ້ມູນໃຫ້ຄົບຖ້ວນ')
        }
    }

    function delEvent(e) {
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
                axios.delete(data.Mainurl + data.delEvent + e + '/').then((res) => {
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
        axios.patch(data.Mainurl + data.patchEvent + e.id + '/', {
            "is_active": (e.is_active === false ? true : false)
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
            Toast.fire({
                icon: 'success',
                title: (e.is_active === false ? 'ເປິດການນຳໃຊ້ງານ ສຳເລັດ!' : 'ປິດການນຳໃຊ້ງານ ສຳເລັດ!')
            })
        })
    }

    const [affter, setaffter] = useState(false)
    function ResetPeriod() {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການປ່ຽນໃຫ້ເປັນງວດປະຈຸບັນ ຫຼື ບໍ່?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ປ່ຽນເປັນງວດປະຈຸບັນ!'
        }).then((result) => {
            if (result.isConfirmed) {
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
                setaffter(true)
                Toast.fire({
                    icon: 'success',
                    title: 'ປ່ຽນເປັນງວດປະຈຸບັນສຳເລັດ'
                })
            }

        })
    }

    function SubEdit(e) {
        e.preventDefault()


        if (preview !== undefined) {
            const formData = new FormData()
            formData.append('image', e.target[0].files[0])
            formData.append('title', e.target[2].value)
            formData.append('sub_title', e.target[3].value)
            formData.append('phone', (e.target[4].value).substring(4, 105))
            formData.append('address', e.target[5].value)
            formData.append('description', e.target[6].value)
            formData.append('period', e.target[7].value)
            axios.patch(data.Mainurl + data.patchEvent + e.target[8].value + '/', formData).then((res) => {
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
                navigate('/event')
                Toast.fire({
                    icon: 'success',
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            const formData = new FormData()
            formData.append('title', e.target[2].value)
            formData.append('sub_title', e.target[3].value)
            formData.append('phone', (e.target[4].value).substring(4, 105))
            formData.append('address', e.target[5].value)
            formData.append('description', e.target[6].value)
            formData.append('period', e.target[7].value)
            axios.patch(data.Mainurl + data.patchEvent + e.target[8].value + '/', formData).then((res) => {
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
                navigate('/event')
                Toast.fire({
                    icon: 'success',
                    title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                })
            })
        }
    }

    const [InPagetrue, setInPagetrue] = useState(1)
    function nexttrue() {
        if (InPagetrue < Pagetrue) {
            setInPagetrue(InPagetrue + 1)
            setload(false)
            setReducer()
        }
    }
    function backtrue() {
        if (InPagetrue > 1) {
            setInPagetrue(InPagetrue - 1)
            setload(false)
            setReducer()
        }
    }

    const [InPagefalse, setInPagefalse] = useState(1)
    function nextfalse() {
        if (InPagefalse < Pagefalse) {
            setInPagefalse(InPagetrue + 1)
            setload(false)
            setReducer()
        }
    }
    function backfalse() {
        if (InPagefalse > 1) {
            setInPagefalse(InPagefalse - 1)
            setload(false)
            setReducer()
        }
    }

    return {
        APITrue,
        APIFalse,
        CountFalse,
        CountTrue,
        Period,
        onSubmit,
        preview,
        setPreview,
        delEvent,
        Load,
        active,
        affter,
        ResetPeriod,

        SubEdit,
        backtrue,
        InPagetrue,
        Pagetrue,
        nexttrue,

        InPagefalse, 
        Pagefalse,
        backfalse, 
        nextfalse
    }
}
