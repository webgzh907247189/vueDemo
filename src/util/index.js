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


{
    // uidKey: 1,
    // uidMap: new WeakMap(),
    function getOnlyKey(item) {
        if (!this.uidMap.has(item)) {
            this.uidMap.set(item, this.uidKey++);
        }
        return this.uidMap.get(item);
    }

    // new WeakMap()
    // 使用 WeakMap 装载对象 key，当这个对象被移除，不会造成内存泄露
    // 1. WeakMap只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。
    // 2. WeakMap的键名所指向的对象是弱引用，不计入垃圾回收机制。
    // 3.重点在于 如果删除了WeakMap的键名所指向的对象，无需手动删除应用
}