import React, { createContext, useState } from 'react'
import Province from '../../components/City/province/Province'
import District from '../../components/City/district/District'
import Village from '../../components/City/village/Village'
import Function_Province from './Function.Province'
import Function_Distric from './Function.Distric'
import Function_Village from './Function.Village'

export const Context_PDV = createContext(null)

export default function Index_PDV() {

    const [paget, setpagetrue] = useState('province')
    function pagetrue(e) {
        setpagetrue(e)
        ResetData()
        ResetDis()
        ResetdataVil()
    }


    let {
        API_Province,
        Loaderror,
        Count_Province,
        SubProvince,
        delprovice,
        MoldalProvince,
        handleCloseProvince,
        handleShowProvince,
        ResetData,

        proPage,
        proPageN,
        Nextpro,
        Backpro,

    } = Function_Province()

    let {
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
    } = Function_Distric()

    let {
        API_Vill,
        LoadVill,
        Count_Vill,
        delVill,
        VilPage,
        VillPageN,
        NextVill,
        BackVill,

        SubVillage,
        MoldalVil,
        handleCloseVil,
        handleShowVil,
        ResetdataVil
    } = Function_Village()

    return (
        <Context_PDV.Provider value={
            {
                API_Province,
                Loaderror,
                Count_Province,
                SubProvince,
                MoldalProvince,
                handleCloseProvince,
                handleShowProvince,
                delprovice,

                ResetData,

                proPage,
                proPageN,
                Nextpro,
                Backpro,

                // API_Distric
                API_Distric,
                SubDistrict,
                Loaddis,
                CountDis,
                MoldalDis,
                handleCloseDis,
                handleShowDis,
                ResetDis,
                disPage,
                disPageN,
                Nextdis,
                Backdis,
                delDis,

                // Village 
                API_Vill,
                LoadVill,
                Count_Vill,
                delVill,
                VilPage,
                VillPageN,
                NextVill,
                BackVill,

                SubVillage,
                MoldalVil,
                handleCloseVil,
                handleShowVil,
                ResetdataVil
            }
        }
        >
            <div className="content-wrapper" id="edit">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>ຂໍ້ມູນ ບ້ານ, ເມືອງ, ແຂວງ ທັ້ງໝົດ</h2>
                                    </div>
                                    <ul class="nav nav-tabs pt-2 px-2">
                                        <li class="nav-item">
                                            <button class={`nav-link ${paget == 'province' ? 'active' : ''}`} onClick={() => pagetrue('province')}>ຂໍ້ມູນແຂວງ ( <strong className='text-danger'>{Count_Province}</strong> )</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class={`nav-link ${paget == 'district' ? 'active' : ''}`} onClick={() => pagetrue('district')}>ຂໍ້ມູນເມືອງ ( <strong className='text-danger'>{CountDis}</strong> )</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class={`nav-link ${paget == 'village' ? 'active' : ''}`} onClick={() => pagetrue('village')}>ຂໍ້ມູນບ້ານ ( <strong className='text-danger'>{Count_Vill}</strong> )</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {paget === 'province' ? <Province /> : ''}
                            {paget === 'district' ? <District /> : ''}
                            {paget === 'village' ? <Village /> : ''}

                        </div>
                    </div>
                </div>
            </div>
        </Context_PDV.Provider>
    )
}
