# Angledb <code><img height="32" src="https://cdn.jsdelivr.net/gh/gabrielgamaalves/cdnme.github@main/angledb/logorepo.png" alt="Nodejs"/></code>
![npm](https://img.shields.io/npm/v/angledb?color=%23e02b2b&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/gabrielgamaalves/angledb?style=for-the-badge) 

> Biblioteca de Nodejs, voltada para a criação e edição simples de um banco de dados JSON.

### Intalação
```
$ npm install angledb
```

## Uso
```js
const angledb = require("angledb")
const db = angledb("./database.json") // passe o local do arquivo.json + configurações gerais
```
> - Configurações gerais
> ```ts
> create?: {
>       unshift?: boolean,
>       length_id?: number
>    }
> ```

## Métodos
> O **Angledb** usa o sistema CRUD (Create, Read, Update, Delete).

### Create
Use o create() para criar um objeto e inserir no _database_ estabelecido.
```js
db.create({
    name: "User",
    email: "user.me@example.com"
})
```
> database.json
>```json
>[
>{
>    "_id": "Jah5Fb0Pfa34Vbg8",
>    "name": "User",
>    "email": "user.me@example.com"
>}
>]
>```
> A chave `_id` foi gerada automaticamente. É possível mudar seu tamanho(quantidade de caracteres), inserindo nas configurações gerais ou no próprio método, sando o parâmetro `length_id: number`
>
> Também é possível alterar a posição do item criado, podendo ser no início da _database_ ou no final da _database_.
> Usando o parâmetro ```unshift: true```, o elemento criado vai diretamente para o início da _database_.

### Read

Use o read() para ler o _database_. retornando um **object** ou um **array**
> Se a função `read()`, não passar nenhum parametro, se é listado todo o _database_.
> Ou pode-se passar o parametro `_id` para buscar determinado item.
```js
const readAll = db.read()
const readId = db.read("Jah5Fb0Pfa34Vbg8")

console.log(readAll)
console.log(readId)
```
```
// readAll - Retornou todos os items do database

   [
    {
        "_id": "Jah5Fb0Pfa34Vbg8",
        "name": "User",
        "email": "user.me@example.com"
    },
    {
        "_id": "aK8Br4lOI34vGdFA",
        "name": "User2",
        "email": "user2.me@example.com"
    }
   ]


// readId - Retornou o item com o _id mencionado

    {
        "_id": "Jah5Fb0Pfa34Vbg8",
        "name": "User",
        "email": "user.me@example.com"
    }
```

### Update

Use o update() para editar/adicionar algum elemento em um item presente no _database_.
> Passando o `_id` do item que deseja alterar. Retornando o item já alterado.
```js
    db.update("Jah5Fb0Pfa34Vbg8", {
        name: "NewUser",
        email: "NewUser.me@example.com"
        work: "programmer" // novo elemento
    })
```

### Delete
Use o delete() para deletar um item presente no _database_.
> Passando o `_id` do item que deseja deletar.

---------

## Limites
Ao passar objetos Javascript ou JSON grandes (~ 10-100 MB), talvez ocorrerá problemas no desempenho do seu projeto, voltado ao **angledb**.

#### **Por que?**
O angledb funciona apartir da função _writeFile_, que usa o JSON.stringify e o JSON.parse. Com isso pode demorar para processar tais dados. 
Tendo em vista esses processos você pode optar por separar determinados _databases_, ou recorrer a outros metodos de _database_.

```js
// Exemplo de separacao
const db = {
    users: angledb("./database/users.json"),
    vehicles: angledb("./databse/vehicle.json")
}

db.users.read() // Exemplo de uso.
```

---------
## Licença
Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes

---------
<<<<<<< HEAD

<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/gabrielgamaalves/cdnme.github@main/angledb/logorepo.png" width="190px">
</p>
=======
<img src="https://cdn.jsdelivr.net/gh/gabrielgamaalves/cdnme.github@main/angledb/logorepo.png" align="center" width="190px">
>>>>>>> a578c7ec5c5eb6c9865d563a1427b2b9dfe64c75
