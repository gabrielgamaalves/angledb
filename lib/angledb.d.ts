interface iOptionsdb{
    create?: {
        unshift?: boolean
    }
}

export interface iAngledb{
    create(item: object, options?: {unshift?: string}):object
}

declare function Angledb(file: string, optionsdb?: iOptionsdb): iAngledb
export = Angledb