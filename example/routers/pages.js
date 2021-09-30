const sfc = require("@vue/compiler-sfc")
const fs = require('fs')
const path = require('path')
const router = require('koa-router')();

router.prefix("/pages")
router.all("/(.*)",  ctx => {
    let file = ctx.request.path
    const p = path.resolve(__dirname,"../" + file) 
    const content = fs.readFileSync(p,'utf-8')
    const vueFile = sfc.parse(content, {
        file,
        sourceMap: true
    })
    const COMP_IDENTIFIER = `__sfc__`
    const ssr = false
    const id = 'xxx'
    const templateResult = sfc.compileTemplate({ filename: file, source:vueFile.descriptor.template.content, id: id })
    const fnName = ssr ? `ssrRender` : `render`
    const __tmp = (
        `\n${templateResult.code.replace(
          /\nexport (function|const) (render|ssrRender)/,
          `$1 ${fnName}`
        )}` + `\n${COMP_IDENTIFIER}.${fnName} = ${fnName}`
      ) 
    const compiledScript = sfc.compileScript(vueFile.descriptor, {
        id,
        refSugar: true,
        inlineTemplate: true,
        templateOptions: {
          ssr,
          ssrCssVars: vueFile.descriptor.cssVars
        }
    })
    let code = sfc.rewriteDefault(compiledScript.content, COMP_IDENTIFIER)
    code = code + '\n' +__tmp;
    code += `\n\nexport default ${COMP_IDENTIFIER};`
    ctx.set("Content-Type","application/javascript; charset=utf-8")
    ctx.body = code
});

module.exports = router;