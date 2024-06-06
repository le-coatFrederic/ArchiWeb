import { ICRUDItemInput } from "./ICRUDItemInput";
import { ICRUDItemOutput } from "./ICRUDItemOutput";

export class CRUDItemUse {
  constructor(dataInput: ICRUDItemInput, dataOutput: ICRUDItemOutput) {
    console.log(dataInput);
    console.log(dataOutput);
  }
}
