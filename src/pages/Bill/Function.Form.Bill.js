import React, { useState, useEffect } from 'react'
import data from './data'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Function_Form_Bill() { 

  const [Period, setPeriod] = useState([])
  const [Period_multi, setPeriod_multi] = useState([])
  useEffect(() => {
    axios.get(data.Mainurl + data.getPeriod).then((res) => {
      setPeriod(res.data.results.reverse())
    })

    axios.get(data.Mainurl + data.getPeriod_multi).then((res) => {
      setPeriod_multi(res.data.results.reverse())
    })
  }, [])

  const [Reset, setReset] = useState('N')
  const [preview, setpreview] = useState(undefined)

  function Submit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', e.target[0].files[0])
    formData.append('bill_number', e.target[2].value)
    formData.append('total_cost', e.target[3].value)
    formData.append('device_number', e.target[4].value)
    formData.append('candidate', e.target[1].value)
    formData.append('is_draw', true)
    formData.append('is_active', true)
    formData.append('multi_period', (Period_multi[0]?.id === undefined ? '' : Period_multi[0]?.id))
    formData.append('period', (Period[0]?.id === undefined ? '' : Period[0]?.id))

    if (preview !== undefined) {
      if (Nuumber > 15) {
        axios.post(data.Mainurl + data.postBill, formData).then((res) => {
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
          setReset('N')
          setpreview(undefined)
          setNumber(0)
          Toast.fire({
            icon: 'success',
            title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
          })
        })
      } else {
        alert('~~ກະລຸນາປ້ອນບີນໃຫ້ເກີນ 15ໂຕ~~')
      }
    }else{
      alert('ກະລຸນາເລືອກຮູບບີນ!')
    }
  }

  const [Nuumber, setNumber] = useState(0)
  function CheckNumber(e) {
    setNumber(e.target.value.length)
  }

  return {
    Submit,
    Reset,
    preview,
    setpreview,
    CheckNumber,
    Nuumber,

    Period,
    Period_multi,
  }
}
