import jscookie from "js-cookie"
const tokenName = 'jwt-token'
const AnonymousPath = [
    /^\/login(.)*/,
    /^\/logout(.)*/,
    /^\/test(.)*/,
    /^\/register(.)*/,
    /^\/manifest(.)*/,
    /^\/pages(.)*/
]
const toLoginPage = (to, next) => {
    jscookie.remove(tokenName)
    next({
        path: '/login'
    })
}
const Auth = (router) => {
    router.beforeEach((to, from, next) => {
        const token = jscookie.get(tokenName)
        if (token == null || token === '') {
            // 未登录的逻辑
            let isAnonymouPath = false
            for (let i = 0; i < AnonymousPath.length; i++) {
                if (AnonymousPath[i].test(to.path)) {
                    isAnonymouPath = true
                    break
                }
            }
            if (isAnonymouPath) {
                next()
            } else {
                toLoginPage(to, next)
            }
        } else {
            next()
        }
    })
    router.afterEach(() => {

    })
}

export default Auth;