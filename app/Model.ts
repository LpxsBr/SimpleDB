import { IJsonDB, JsonDB } from ".";
import { writeFileSync } from "fs";

export interface ModelType {
    model_name: string
}

export class Model extends JsonDB{

    private model = '';

    constructor({model_name}: ModelType){
        super();
        
    }

    verify(model: string){

        model = String(model).toLowerCase();

        // try {
        //     const file = require('@/database/'+model+'.json')
        //     console.log({file})
        // } catch (error) {
            
        // }
    }

    find(){
        const model = this.model
    }

    findOne(){

    }
}