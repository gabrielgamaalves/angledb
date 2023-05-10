const fs = require("fs")

function Angledb(file, optionsdb){
    const file_db = fs.readFileSync(file, {encoding: "utf-8"})
    const posts = file_db? JSON.parse(file_db) : []

    const writeFile = (content) => {
        const updateFile = JSON.stringify(content)
        fs.writeFileSync(file, updateFile, 'utf-8')
    }

    const App = {

        create(file, options){
            function idg(){
                var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
                var idLength = options.unshift || optionsdb?.create.unshift || 16
                var id = "";
            
                for (var i = 0; i < idLength; i++) {
                    var randomNumber = Math.floor(Math.random() * chars.length);
                    id += chars.substring(randomNumber, randomNumber + 1);
                }
                
                return id
            }

            item = {_id: idGenerator()}
            for(i=0;i < Object.keys(items).length;i++){
                item[Object.keys(items)[i]] = Object.values(items)[i]
            }

            ((options?.create.unshift || optionsdb?.create.unshift) === true)?posts.unshift(item):posts.push(item)
            writeFile(posts)
            return item
        }

    }

    return App
}

exports = module.exports = Angledb


// function ag(file, options){
//     const App = {
//         post(file){
//             console.log(file)
//         }
//     }

//     return App
// }

// exports = module.exports = ag;