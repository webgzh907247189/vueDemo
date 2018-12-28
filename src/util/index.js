function setCookie(){
    document.cookie = 'a=cookieTest;path=#/testTwo'
}

function getCookie(){
    let allCookie = document.cookie
    return allCookie
}



function getUtilFn(list = [], callback = () => {}, action = {
    each(list,callback){
        for(let index in list){
            callback(list[index], index)
        }
    },
    cip(one){
        return one.default || one
    }
}, result = {}){

    action.each(list,(item)=>{
        result[item] = callback(item,action.cip)
    })
    return result
}

// import get from 'lodash/get'

export {setCookie,getCookie,getUtilFn}