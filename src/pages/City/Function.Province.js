import React, { useState, useEffect, useReducer, useContext } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Function_Province() {

    const [Loaderror, setLoad] = useState(false)
    const [Count_Province, setCount_Province] = useState(0)
    const [proPage, setproPage] = useState(1)

    const [API_Province, setAPI_Province] = useState([])
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.getproveince + '&page=' + proPageN).then((res) => {
            setAPI_Province(res.data.results)
            setCount_Province(res.data.count)
            setproPage(res.data.total_pages)
            setLoad(true)
        })
    }, [reducer])

    function SubProvince(e) {
        e.preventDefault()
        axios.post(data.Mainurl + data.createprovence, {
            "province": e.target[0].value,
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
            setMoldalProvince(false)
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    function delprovice(e) {
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
                axios.patch(data.Mainurl + data.patchprovince + e + '/', {
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
                    setMoldalProvince(false)
                    Toast.fire({
                        icon: 'success',
                        title: 'ລົບຂໍ້ມູນສຳເລັດ'
                    })
                })
            }
        })

    }

    const [proPageN, setProPageN] = useState(1)
    function Nextpro() {
        if (proPageN < proPage) {
            setLoad(false)
            setReducer()
            setProPageN(proPageN + 1)
        }
    }
    function Backpro() {
        if (proPageN > 1) {
            setLoad(false)
            setReducer()
            setProPageN(proPageN - 1)
        }
    }

    const [MoldalProvince, setMoldalProvince] = useState(false);
    const handleCloseProvince = () => setMoldalProvince(false);
    const handleShowProvince = () => setMoldalProvince(true);

    function ResetData() {
        setReducer()
        setLoad(false)
    }

    return {
        API_Province,
        Loaderror,
        Count_Province,
        MoldalProvince,
        SubProvince,
        handleCloseProvince,
        handleShowProvince,
        delprovice,

        ResetData,

        proPage,
        proPageN,
        Nextpro,
        Backpro,

    }
}
