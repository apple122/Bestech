import axios from 'axios'
import React, { useState, useEffect, useReducer } from 'react'
import data from './data'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Function_User() {
    let navigate = useNavigate()

    const [API, setAPI] = useState([])
    const [Load, setLoad] = useState(false)
    const [Count, setCount] = useState(0)
    const [reducer, setReducer] = useReducer(x => x + 1, 0)

    let token = localStorage.getItem('token')
    useEffect(() => {
        axios.get(data.Mainurl + data.getprofile, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setAPI(res.data.results)
            setCount(res.data.count)
            setLoad(true)
        }).catch((err) => {
            if (err.response.status === 401) {
                alert('ໄອດີໝົດອາຍຸແລ້ວ ກະລຸນາລ໊ອກອີນໃໝ່ອີກຄັ້ງ!')
            }
        })
    }, [reducer])

    function onSubmit(e) {
        e.preventDefault()
        axios.post(data.Mainurl + data.postuserstaff, {
            "username": e.target[4].value,
            "password": e.target[5].value,
            "is_active": true,
            "is_staff": true
        }).then((res) => {
            axios.post(data.Mainurl + data.postprofile, {
                "first_name": e.target[0].value,
                "last_name": e.target[1].value,
                "gender": e.target[2].value,
                "phone_number": e.target[3].value,
                "is_active": true,
                "owner": (res.data.user.id)
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
                navigate('/user')
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            }).catch((err) => {
                axios.delete(data.Mainurl + data.delusers + (res.data.user.id)).then((res) => {
                    // alert('delete')
                })
            })
        }).catch((err) => {
            alert('~~ ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ ~~')
        })
    }

    function SubEdit(e) {
        e.preventDefault()
        axios.patch(data.Mainurl + data.patchprofile + e.target[4].value + '/', {
            "first_name": e.target[0].value,
            "last_name": e.target[1].value,
            "gender": e.target[2].value,
            "phone_number": e.target[3].value,
            "is_active": true
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
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
            navigate('/user')
            Toast.fire({
                icon: 'success',
                title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
            })
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 403) {
                alert('ທ່ານບໍ່ມີສິດແກ້ໄຂຂໍ້ມູນຂອງຜູ້ໃຊ້ຄົນອືນ')
                navigate('/user')
            }
        })
    }

    const [Items, setItems] = useState([])
    const [ConfirmPassword, setConfirmPassword] = useState(undefined)
    async function changUsers(e) {
        const { value: password } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputLabel: 'ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງຜູ້ໃຊ້',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })

        if (password) {
            setConfirmPassword(password)
            axios.post(data.Mainurl + data.loginedUser, {
                username: (e.owner?.username),
                password: password
            }).then((res) => {
                setshow(true)
                setItems(e)
            }).catch((err) => {
                Swal.fire('ລະຫັດຜູ້ບໍ່ຖືກຕ້ອງ ກະລຸນາລອງໃໝ່ອິກຄັ້ງ!')
            })
        }
    }

    const [show, setshow] = useState(false)
    const handleClose = () => setshow(false)

    function OnChangUsers(e) {
        e.preventDefault()

        if (ConfirmPassword === undefined) {
            alert('ກະລຸນາລອງໃໝ່ອີກຄັ້ງ')
        } else {


            if (e.target[1].value === e.target[2].value) {

                axios.patch(data.Mainurl + data.patchusers + Items.owner?.id, {
                    "username": e.target[0].value
                }).then((res) => {
                    setshow(false)
                    setReducer()
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
                    Toast.fire({
                        icon: 'success',
                        title: 'ປ່ຽນແປງມູນສຳເລັດ'
                    })
                })

                axios.patch(data.Mainurl + data.putchangeps + Items.owner?.id + '/', {
                    "old_password": ConfirmPassword,
                    "password": e.target[1].value,
                    "confirm_password": e.target[2].value
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } else {
                alert('ລະຫັດຜ່ານບໍ່ຕົງກັນ')
            }
        }

    }

    function delusers(e) {
        axios.delete(data.Mainurl + data.delprofile + e.id + '/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setReducer()
            axios.delete(data.Mainurl + data.delusers + e.owner?.id).then((res) => {
                console.log('OK')
            })
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
            Toast.fire({
                icon: 'success',
                title: 'ລົບຂໍ້ມູນສຳເລັດ'
            })

        }).catch((err) => {
            if (err.response.status === 403) {
                alert('ທ່ານບໍ່ມີສິດລົບຂໍ້ມູນຂອງຜູ້ໃຊ້ຄົນອືນ')
            }
        })


    }

    return {
        API,
        Load,
        Count,
        onSubmit,
        SubEdit,
        changUsers,
        show,
        handleClose,
        Items,
        ConfirmPassword,
        OnChangUsers,
        delusers
    }
}
