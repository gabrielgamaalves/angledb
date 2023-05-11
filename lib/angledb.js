const fs = require("fs")

function Angledb(file, optionsdb){
    const filedb = fs.readFileSync(file, {encoding: "utf-8"})
    const posts = filedb? JSON.parse(filedb) : []

    const writeFile = (content) => {
        const updateFile = JSON.stringify(content)
        fs.writeFileSync(file, updateFile, 'utf-8')
    }

    const App = {
        create(items, options){
            function idg(){
                var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
                var idLength = options?.length_id || optionsdb?.create.length_id || 16
                var id = "";
            
                for (var i = 0; i < idLength; i++) {
                    var randomNumber = Math.floor(Math.random() * chars.length);
                    id += chars.substring(randomNumber, randomNumber + 1);
                }
                
                return id
            }

            var item = {_id: idg()}
            for(i=0;i < Object.keys(items).length;i++){
                item[Object.keys(items)[i]] = Object.values(items)[i]
            }

            ((options?.unshift || optionsdb?.create.unshift) === true)?posts.unshift(item):posts.push(item)
            writeFile(posts)
            return item
        },

        read(_id){
            const Read = !_id?posts:posts.find((item) => item._id === _id)
            return Read
        },

        update(_id, elements){
            try{
                const _i = posts.findIndex((item) => item._id === _id)
                const item = posts[_i]

                for(i=0;i < Object.keys(elements).length; i++){
                    item[Object.keys(elements)[i]] = Object.values(elements)[i]
                }

                posts[_i] = item
                writeFile(posts)
                
                return posts[_i]
            }catch(e){[]
                console.log(`Erro no update.\n ↳ Error: ${e}`)
            }
        },

        delete(_id){
            const SelectedItem = posts.findIndex((item) => item._id === _id)
            posts.splice(SelectedItem, 1)
            writeFile(posts)
            
            return _id
        }
    }

    return App
}

exports = module.exports = Angledb