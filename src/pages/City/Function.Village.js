import React, { useState, useEffect, useReducer, useContext } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Function_Village() {

    const [API_Vill, setAPI_Vill] = useState([])
    const [LoadVill, setLoadVill] = useState(false)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const [Count_Vill, setCountVil] = useState(0)

    const [VilPage, setVilPage] = useState(1)
    useEffect(() => {
        axios.get(data.Mainurl + data.getvillage + '&page=' + VillPageN).then((res) => {
            setAPI_Vill(res.data.results)
            setLoadVill(true)
            setCountVil(res.data.count)
            setVilPage(res.data.total_pages)
        })
    }, [reducer])

    function SubVillage(e) {
        e.preventDefault()
        if (e.target[1].value !== '') {
            axios.post(data.Mainurl + data.postvillage, {
                "village": e.target[0].value,
                "is_active": true,
                "district": e.target[1].value
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
                setMoldalVil(false)
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ')
        }
    }

    function delVill(e) {
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
                axios.patch(data.Mainurl + data.patchvillage + e + '/', {
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

    const [VillPageN, setVillPageN] = useState(1)
    function NextVill() {
        if (VillPageN < VilPage) {
            setLoadVill(false)
            setReducer()
            setVillPageN(VillPageN + 1)
        }
    }
    function BackVill() {
        if (VillPageN > 1) {
            setLoadVill(false)
            setReducer()
            setVillPageN(VillPageN - 1)
        }
    }

    function ResetdataVil() {
        setLoadVill(false)
        setReducer()
    }

    const [MoldalVil, setMoldalVil] = useState(false)
    const handleCloseVil = () => setMoldalVil(false)
    const handleShowVil = () => setMoldalVil(true)

    return {
        API_Vill,
        LoadVill,
        SubVillage,
        MoldalVil,
        handleCloseVil,
        handleShowVil,
        Count_Vill,
        delVill,

        VilPage,
        VillPageN,
        NextVill,
        BackVill,
        ResetdataVil,
    }
}
