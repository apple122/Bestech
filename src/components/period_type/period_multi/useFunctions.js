import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from '../../../pages/Period/Period/data'

export default function useFunctions() {
    let navigate = useNavigate()

    const [Priod, setPriod] = useState([])
    const [PagePeriod, setPagePeriod] = useState()

    const [APIPRIZE, setAPIPRIZE] = useState([])
    const [Page_prize, setPage_prize] = useState(1)

    const [APIPERIOD_TYPE, setP_TYPE] = useState([])
    const [Page_period, setPage_period] = useState(1)

    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(url.Mainurl + url.getpriod + '&page=' + InPagePeriod).then((res) => {
            setPriod(res.data.results)
            setPagePeriod(res.data.total_pages)
        })

        axios.get(url.Mainurl + url.get_prize_type + '?page=' + next_prize_type).then((res) => {
            setAPIPRIZE(res.data.results)
            setPage_prize(res.data.total_pages)
        })

        axios.get(url.Mainurl + url.getpriod_type + '?page=' + next_period_type).then((res) => {
            setP_TYPE(res.data.results)
            setPage_period(res.data.total_pages)
        })
    }, [reducer])

    const [openlist, steOpenList] = useState(false)
    function Click_list() {
        if (openlist == false) {
            steOpenList(true)
        } else {
            steOpenList(false)
        }
    }

    function deltype(e) {
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
                axios.patch(url.Mainurl + url.patchperiod_multi + e.id, {
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

    function Submit(e) {
        e.preventDefault()
        axios.post(url.Mainurl + url.postperiod_multi, {
            "period": e.target[0].value,
            "open_date": e.target[1].value,
            "close_date": e.target[2].value,
            "is_active": true,
            "prize_type": Items,
            "period_type": Items_type
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
            navigate('/period_multi')
            setReducer()
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
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

    const [next_period_type, setnext_period_type] = useState(1)
    function next_period() {
        if (next_period_type < Page_period) {
            setnext_period_type(next_period_type + 1)
            setReducer()
        }
    }

    function black_period() {
        if (next_period_type > 1) {
            setnext_period_type(next_period_type - 1)
            setReducer()
        }
    }

    const [next_prize_type, setnext_prize_type] = useState(1)
    function next_prize() {
        if (next_prize_type < Page_prize) {
            setnext_prize_type(next_prize_type + 1)
            setReducer()
        }
    }

    function black_prize() {
        if (next_prize_type > 1) {
            setnext_prize_type(next_prize_type - 1)
            setReducer()
        }
    }

    function Sub_update(e) {
        e.preventDefault()
        if (ItemsUp && Items_Uptype !== undefined) {
            axios.patch(url.Mainurl + url.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value,
                "prize_type": ItemsUp,
                "period_type": Items_Uptype
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
                navigate('/period')
                setReducer()
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            axios.patch(url.Mainurl + url.patchperiod + e.target[0].value, {
                "period": e.target[3].value,
                "open_date": e.target[4].value,
                "close_date": e.target[5].value
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
                navigate('/period')
                setReducer()
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        }

    }

    const [ItemsUp, setUpItems] = useState()
    function update_prize(e) {
        let array_Upplus = []
        setUpItems(array_Upplus)
        for (let x = 0; x < e.length; x++) {
            array_Upplus.push(e[x].value)
        }
        return array_Upplus
    }

    const [Items_Uptype, setItems_Uptype] = useState()
    function update_period_type(e) {
        let array_Uptype = []
        setItems_Uptype(array_Uptype)
        for (let x = 0; x < e.length; x++) {
            array_Uptype.push(e[x].value)
        }
        return array_Uptype
    }

    const [InPagePeriod, setInPagePeriod] = useState(1)
    function N_Period() {
        if(InPagePeriod < PagePeriod){
            setReducer()
            setInPagePeriod(InPagePeriod +1)
        }
    }
    function B_Period() {
        if(InPagePeriod > 1){
            setReducer()
            setInPagePeriod(InPagePeriod -1)
        }
    }

    return {
        Click_list,
        openlist,
        APIPRIZE,
        plus_items,
        Submit,
        APIPERIOD_TYPE,
        plus_period_type,

        deltype,

        next_period,
        black_period,
        Page_period,
        next_period_type,

        next_prize,
        black_prize,
        Page_prize,
        next_prize_type,

        Sub_update,
        update_prize,
        update_period_type,

        Priod,
        PagePeriod,
        InPagePeriod,
        N_Period,
        B_Period,
    }
}
