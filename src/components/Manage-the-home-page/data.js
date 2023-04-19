import server from '../API-links/server'
export default {
    Mainurl: server.Mainurl,

    // Footer
    createfooter: 'api/v1/footer',
    getfooter: 'api/v1/footer/?is_active=true',
    patchfooter: 'api/v1/footer/',
    delfooter: 'api/v1/footer/',

    // About 
    createabout: 'api/v1/about',
    getabout: 'api/v1/about?is_active=true',
    delabout: 'api/v1/about/',
    patchabout: 'api/v1/about/',

    // Slide
    postslide: 'api/v1/slide',
    getslide: 'api/v1/slide',
    delslide: 'api/v1/slide/',
    patchslide: 'api/v1/slide/',

    // Event 
    getEventtrue: 'api/v1/post?depth=true&is_active=true',
    getEventfalse: 'api/v1/post?depth=true&is_active=false',
    postEvent: 'api/v1/post',
    delEvent: 'api/v1/post/',
    patchEvent: 'api/v1/post/',

    // Period 
    getpriod: 'api/v1/period?depth=true',

}