import server from '../API-links/server'
export default {
    Mainurl: server.Mainurl,

    getpriod_type: 'api/v1/period_type',
    postperiod_type: 'api/v1/period_type',
    patchperiod_type: 'api/v1/period_type/',

    getpriod: 'api/v1/period?depth=true',
    postperiod: 'api/v1/period',
    patchperiod: 'api/v1/period/',

    getperiod_multi: 'api/v1/period_multi?depth=true',
    postperiod_multi: 'api/v1/period_multi',
    patchperiod_multi: 'api/v1/period_multi/',

    // prize
    get_prize_type: 'api/v1/prize_type',

}