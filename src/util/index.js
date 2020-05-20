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
// const routerObj = getRoute();

export {setCookie,getCookie,getUtilFn };

export default {setCookie,getCookie,getUtilFn };



{
    const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));

    const curry = (fn, ...args) => {
        if (args.length >= fn.length) {
            const realArgs = args.pop();
            return fn(realArgs, ...args);
        }

        return (...runArgs) => curry(fn, ...args, ...runArgs);
    };

    const importAll = (requireContext) => requireContext.keys();

    const getRequireObj = (pathList, sliceStart, sliceEnd, reqCtxPathList) => {
        return pathList.reduce((resultObj, itemPath) => {
            const objCombine = resultObj;
            const itemModule = itemPath.slice(sliceStart, sliceEnd);

            objCombine[itemModule] = reqCtxPathList(itemPath).default ?? {};
            return objCombine;
        }, Object.create(null));
    };

    const pathList = require.context('./module', false, /\.js$/);
    const getRequireObjFn = curry(getRequireObj)(2, -3)(pathList);
    // const routerObj = compose(getRequireObjFn, importAll)(pathList);

}