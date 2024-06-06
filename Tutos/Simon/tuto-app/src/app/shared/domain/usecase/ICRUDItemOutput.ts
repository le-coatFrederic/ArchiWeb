export interface ICRUDItemOutput {
  createItem(name: string, material: string[], created: Date): void;
}
