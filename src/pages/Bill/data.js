import server from "../../components/API-links/server";

export default {
    Mainurl: server.Mainurl,

    getBill: 'api/v1/bill?depth=true&is_draw=true',
    postBill: 'api/v1/bill',
    patchBill: 'api/v1/bill/',
    delBill: 'api/v1/bill/',

    getPeriod: 'api/v1/period?depth=true&is_active=true',
    getPeriod_multi: 'api/v1/period_multi?depth=true&is_active=true',
    
    // province
    getproveince: 'api/v1/province?is_active=true',

    // distric
    getdistrict: 'api/v1/district?depth=true&is_active=true',

    // village
    getvillage: 'api/v1/village?depth=true&is_active=true',
}