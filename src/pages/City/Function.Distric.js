import React, { useState, useEffect, useReducer } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Function_Distric() {

    const [API_Distric, setAPI_Distric] = useState([])

    const [Loaddis, setLoaddis] = useState(false)
    const [CountDis, setCountDis] = useState(0)
    const [disPage, setdisPage] = useState(1)

    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.getdistrict + '&page=' + disPageN).then((res) => {
            setAPI_Distric(res.data.results)
            setLoaddis(true)
            setCountDis(res.data.count)
            setdisPage(res.data.total_pages)
        })
    }, [reducer])

    function SubDistrict(e) {
        e.preventDefault()
        if (e.target[1].value !== '') {
            axios.post(data.Mainurl + data.createdistric, {
                "district": e.target[0].value,
                "is_active": true,
                "province": e.target[1].value
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
                setMoldalDis(false)
                setLoaddis(false)
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            alert('~~ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ~~')
        }
    }

    function delDis(e) {
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
                axios.patch(data.Mainurl + data.patchdistrict + e, {
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

    const [MoldalDis, setMoldalDis] = useState(false)
    const handleCloseDis = () => setMoldalDis(false)
    const handleShowDis = () => setMoldalDis(true)

    function ResetDis() {
        setReducer()
        setLoaddis(false)
    }

    const [disPageN, setdisPageN] = useState(1)
    function Nextdis() {
        if (disPageN < disPage) {
            setdisPageN(disPageN + 1)
            setReducer()
            setLoaddis(false)
        }
    }
    function Backdis() {
        if (disPageN > 1) {
            setdisPageN(disPageN - 1)
            setReducer()
            setLoaddis(false)
        }
    }

    return {
        API_Distric,
        SubDistrict,
        Loaddis,
        CountDis,
        MoldalDis,
        handleCloseDis,
        handleShowDis,
        ResetDis,
        delDis,

        disPage,
        disPageN,
        Nextdis,
        Backdis,
    }
}
