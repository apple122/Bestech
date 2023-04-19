import server from '../API-links/server'
export default {
    Mainurl: server.Mainurl,

    // province
    getproveince: 'api/v1/province?is_active=true',

    // distric
    getdistrict: 'api/v1/district?depth=true&is_active=true',

    // village
    getvillage: 'api/v1/village?depth=true&is_active=true',

}