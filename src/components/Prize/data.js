import server from '../API-links/server'
export default {
    Mainurl: server.Mainurl,

    createPrize: 'api/v1/prize',
    getPrize: 'api/v1/prize?depth=true',
    patchprice: 'api/v1/prize/',

    get_prize_type: 'api/v1/prize_type',
    post_type: 'api/v1/prize_type',
    patch_Type: 'api/v1/prize_type/',
}