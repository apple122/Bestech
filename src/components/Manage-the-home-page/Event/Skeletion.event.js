import React from 'react'

export default function Skeletion_event() {
    return (
        <div className='col-md-6 placeholder-glow'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-12 p-2 skeleton-IMG"></span> </p>
                    </div>
                    <div className='col-md-6'>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-12 p-2 px-3"></span> </p>
                        <p><span class="item-border placeholder col-5 p-2 px-3"></span> </p>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <div className='btn-group footer float-end'>
                            <p><span class="item-border placeholder col-5 p-2 px-4 mr-2"></span> </p>
                            <p><span class="item-border placeholder col-5 p-2 px-4 mr-2"></span> </p>
                            <p><span class="item-border placeholder col-5 p-2 px-4 mr-2"></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
