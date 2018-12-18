function setCookie(){
    document.cookie = 'a=cookieTest;path=#/testTwo'
}

function getCookie(){
    let allCookie = document.cookie
    return allCookie
}

export {setCookie,getCookie}