import React from 'react'

export default function Skeleton_slide() {
    return (
        <div className='card relative placeholder-glow Skeleton-slide p-3'>
            <div className='row'>
                <div className='col-md-3 max-500-none'>
                    <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                        <span class="item-border placeholder col-5 p-2 px-3"></span>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                        <span class="item-border placeholder col-12 p-4 px-3"></span>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center h-100'>
                    <div className='max-500-none'>
                        <span class="item-border placeholder col-12 p-2 px-3"></span>
                        <span class="item-border placeholder display-500-none col-12 p-2 px-3"></span>
                        <span class="item-border placeholder res-500-none col-12 p-2 px-3"></span>
                    </div>
                    <div className='min-500-none col-5'>
                        <span class="item-border placeholder col-12 p-2 px-3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
