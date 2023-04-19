import server from "../../components/API-links/server";

export default {
    Mainurl: server.Mainurl,

    getusers: 'api/v1/user?is_staff=true',
    postusers: 'api/v1/user/register',
    postuserstaff: 'api/v1/user/register_staff',
    patchusers: 'api/v1/user/',
    delusers: 'api/v1/user/',

    loginedUser: 'api/v1/login',
    resetpassword: 'api/v1/reset/',
    putchangeps: 'api/v1/change_password/',

    // Profile
    getprofile: 'api/v1/user_profile?depth=true&is_active=true',
    postprofile: 'api/v1/user_profile',
    patchprofile: 'api/v1/user_profile/',
    delprofile: 'api/v1/user_profile/',
}