import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import url from "./data";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function useFunctions() {
    const naviagate = useNavigate()


    const [showPrize, setshowPrize] = useState([]);
    const [reducer, setReducer] = useReducer(x => x + 1, 0)

    const [count, setcount] = useState(0)
    const [Page, setPage] = useState(1)
    const [Legnht, setLegnht] = useState(1)
    const [API_TYPE, settype] = useState([])

    const [Page_type, setPage_type] = useState(1)

    useEffect(() => {
        axios.get(url.Mainurl + url.getPrize + '&page=' + nextpage).then((res) => {
            setshowPrize(res.data.results);
            setcount(res.data.count)
            setPage(res.data.total_pages)
        })
        axios.get(url.Mainurl + url.get_prize_type + '?page=' + nextpage_type).then((res) => {
            settype(res.data.results)
            setPage_type(res.data.total_pages)
        })

    }, [reducer]);

    useEffect(() => {
        axios.get(url.Mainurl + url.getPrize + '&page=1').then((res) => {
            setLegnht(res.data.results);
        })
    }, [])

    function onSubmit(e) {
        e.preventDefault()
        if (list_prize !== '') {
            axios.post(url.Mainurl + url.createPrize, {
                prize: e.target[0].value,
                detail: e.target[1].value,
                quantity: e.target[2].value,
                is_active: true,
                prize_type: list_prize.id
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
                naviagate('/prize')
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            alert('~~ ກະລຸນາເລືອກປະເພດລາງວັນກອນ ~~')
        }
    }

    function setActivefalse(event) {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການປິດສະຖານະນີ້ ຫຼື ບໍ່?',
            text: "ເມືອປິດແລ້ວຂໍ້ມູນຈະຍັງເກັບ ແຕ່ບໍ່ສາມາດນຳມາໃຊ້ໄດ້ອີກ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ປິດສະຖານະ!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(url.Mainurl + url.patchprice + event + '/', {
                    is_active: false
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
                        title: 'ປິດສະຖານະສຳເລັດ'
                    })
                })
            }
        })

    }


    function refresh() {
        setReducer()
    }

    const [nextpage, setnextPage] = useState(1)
    function next() {
        if (nextpage < Page) {
            setnextPage(nextpage + 1)
            setReducer()
        }
    }
    function black() {
        if (nextpage > 1) {
            setnextPage(nextpage - 1)
            setReducer()
        }
    }

    const [nextpage_type, setnextPage_type] = useState(1)
    function next_type() {
        if (nextpage_type < Page_type) {
            setnextPage_type(nextpage_type + 1)
            setReducer()
        }
    }
    function back_type() {
        if (nextpage_type > 1) {
            setnextPage_type(nextpage_type - 1)
            setReducer()
        }
    }

    let x = Legnht.length * (nextpage - 1) + 1

    const [list_prize, setlist_prize] = useState('')
    const [list, setlist] = useState(false)
    function Dropdown(e) {
        if (list === false) {
            setlist(true)
        } else {
            setlist(false)
        }
    }
    function Item_dropdown(e) {
        setlist_prize(e)
        setlist(false)
    }
    function Cancel_Dropdown() {
        setlist(false)
    }

    return {
        onSubmit,

        showPrize,
        refresh,
        setActivefalse,
        count,

        next,
        black,
        Page,
        nextpage,
        x,

        Dropdown,
        list_prize,
        Item_dropdown,
        list,
        API_TYPE,
        Cancel_Dropdown,

        next_type,
        back_type,
        Page_type,
        nextpage_type,
    }
}
