//                      第一个参数第一个参数表示相对的文件目录，
//                      第二个参数表示是否包括子目录中的文件，
//                      第三个参数表示引入的文件匹配的正则表达式     
const files = require.context('./', false, /\.ts$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.ts') return
    //      截取文件的名字作为 key               文件的export作为value
    modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default modules