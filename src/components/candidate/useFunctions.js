import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from './data'

export default function useFunctions() {
    let navigate = useNavigate()

    const [API, setAPI] = useState([])
    const [Page, setPage] = useState([])

    const [count, setcount] = useState(0)
    const [Legnht, setLegnht] = useState(0)
    const [Loadding, setLoad] = useState(false)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        if (FilterNUmebr > 8) {
            axios.get(url.Mainurl + url.getcandidate + '&page=' + nextpage + '&phone_number=' + FilterNUmebr).then((res) => {
                setAPI(res.data.results)
                setPage(res.data.total_pages)
                setcount(res.data.count)
                setLoad(true)
            })
        } else {
            axios.get(url.Mainurl + url.getcandidate + '&page=' + nextpage).then((res) => {
                setAPI(res.data.results)
                setPage(res.data.total_pages)
                setcount(res.data.count)
                setLoad(true)
            })
        }
        axios.get(url.Mainurl + url.getcandidate + '&page=1').then((res) => {
            setLegnht(res.data.results)
        })
    }, [reducer])

    function Submit(e) {
        e.preventDefault()
        if (e.target[2, 3, 4].value !== '') {
            if (Loadnumber == 'Success') {
                alert('~~ ເບີນີ້ມີໃນລະບົບແລ້ວ ກະລຸນາກວດສອບໃໝ່ອິກຄັ້ງ ~~')
            } else if (Loadnumber == 'info') {
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
                    navigate('/Candidates_eligibility')
                    Toast.fire({
                        icon: 'success',
                        title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                    })
                })
            } else {
                alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນເບີໂທໃຫ້ຄົບຖ້ວນ ~~')
            }

        } else {
            alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ ~~')
        }
    }

    function patchIDcan(e) {
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
                axios.patch(url.Mainurl + url.patchcandidate + e.id, {
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
                    setLoad(false)
                    Toast.fire({
                        icon: 'success',
                        title: 'ລົບຂໍ້ມູນສຳເລັດ'
                    })
                })
            }
        })
    }

    function Subupdate(e) {
        e.preventDefault()
        if (e.target[2, 3, 4].value !== '') {
            if (Loadnumber == 'Success') {
                alert('~~ ເບີນີ້ມີໃນລະບົບແລ້ວ ກະລຸນາກວດສອບໃໝ່ອິກຄັ້ງ ~~')
            } else if (Loadnumber == 'info') {
                axios.patch(url.Mainurl + url.patchcandidate + e.target[5].value, {
                    "full_name": e.target[1].value,
                    "phone_number": e.target[0].value,
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
                    navigate('/Candidates_eligibility')
                    Toast.fire({
                        icon: 'success',
                        title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                    })
                })
            } else if (Loadnumber == 'false') {
                axios.patch(url.Mainurl + url.patchcandidate + e.target[5].value, {
                    "full_name": e.target[1].value,
                    "phone_number": e.target[0].value,
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
                    navigate('/Candidates_eligibility')
                    Toast.fire({
                        icon: 'success',
                        title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
                    })
                })
            }

        } else {
            alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ ~~')
        }
    }

    function Reset() {
        setReducer()
    }

    const [nextpage, setNextpage] = useState(1)
    function next() {
        if (nextpage < Page) {
            setNextpage(nextpage + 1)
            setReducer()
            setLoad(false)
        }
    }
    function black() {
        if (nextpage > 1) {
            setNextpage(nextpage - 1)
            setLoad(false)
            setReducer()
        }
    }

    let x = Legnht.length * (nextpage - 1) + 1

    const [Loadnumber, setLoadnumber] = useState('false')
    const [LegnhtNumber, setLnumber] = useState(0)
    function Number_phone(e) {
        setLnumber(e.target.value.substring(2, 0))
        if (e.target.value.length > 9) {
            setLoadnumber('warning')
            axios.get(url.Mainurl + url.getcandidate + '&phone_number=' + e.target.value).then((res) => {
                if (res.data.results.length > 0) {
                    setLoadnumber('Success')
                } else {
                    setLoadnumber('info')
                }
            }).catch((err) => { setLoadnumber('info') })
        } else if (e.target.value.length > 0) {
            setLoadnumber('true')
        } else {
            setLoadnumber('false')
        }
    }

    const [FilterNUmebr, setFilNumber] = useState()
    function fillterData(e) {
        setFilNumber(e)
        setReducer()
        setLoad(false)
    }


    return {
        API,
        Submit,
        patchIDcan,
        Subupdate,

        next,
        black,
        Page,
        nextpage,
        count,
        x,
        Reset,
        Loadding,
        Loadnumber,
        Number_phone,
        fillterData,

    }
}
