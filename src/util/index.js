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


// 子路由

function getRoute(){
    const pathList = require.context('./module', false, /\.js$/);

    const pathKeysList = pathList.keys();
    return pathKeysList.reduce((result, itemPath) => {
        const resultPathObj = result;

        const itemModule = itemPath.slice(2, -3);
        resultPathObj[itemModule] = pathList(itemPath).default || {};
        return resultPathObj;
    }, Object.create(null));
}
const routerObj = getRoute();

export {setCookie,getCookie,getUtilFn, routerObj };

export default {setCookie,getCookie,getUtilFn, routerObj };