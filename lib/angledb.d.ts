interface iOptionsdb{

    /**
     * `.create` defina valores globais da função referente ao create()
     */
    create?: {
        unshift?: boolean,
        length_id?: number
    }
}

interface iAngledb{
    /**
     * Use o create() para criar um objeto e inserir no _database_ estabelecido.
     * 
     * Id: ` _id`. Ao gerar o objeto, a chave `_id` é gerada, estabelecendo uma string com 16 caracteres, podendo ser mudado nos parametros `length_id`
     * @param items `-items` Passe os items em forma de objeto. Exemplo:
     * ```js
     * {
     *  name: "User"
     *  email: "user.me@angledb.com"
     * }
     * ```
     * @param options `-options` Passe configurações do create
     */
    create(items: object, options?: {unshift?: string, length_id?: number}):object

    /**
     * Use o read() para ler o _database_.
     * 
     * Se a função `read()`, não passar nenhum parametro, se é listado todo o _database_.
     * Ou pode-se passar o parametro `_id` para buscar determinado item.
     * 
     * @param _id `-_id` Passe o id de determinado item presente no _database_. Exemplo:
     * ```js
     * db.read("3aUDhHyNqUzre01o")
     * ```
     */
    read(_id: string):object

    /**
     * Use o update() para editar/adicionar algum elemento em um item presente no _database_.
     * 
     * @param _id `-_id` Passe o id de determinado item presente no _database_.
     * @param elements `-elements` Passe elementos que serão adicionados ou alterados.
    */
    update(_id: string, elements: object)

    /**
     * Use o delete() para deletar um item presente no _database_.
     * 
     * @param _id `-_id` Passe o id de determinado item presente no _database_.
     */
    delete(_id: string):string
}

/**
 * Crie a aplicação para receber os metodos.
 * ```js
 * var angledb = require("angledb")
 * var db = angledb()
 * ```
 * @param file 
 * @param optionsdb 
 */
declare function Angledb(file: string, optionsdb?: iOptionsdb): iAngledb
export = Angledb