import { IDocComponent } from './IDocComponent';
import { TitleDocComponent } from './titleDocComponent';

export class DocTree {
  private value: IDocComponent;
  private sons: DocTree[];

  constructor(value: IDocComponent) {
    this.value = value;
    this.sons = [];
  }

  getValue(): IDocComponent {
    return this.value;
  }

  setValue(value: IDocComponent): void {
    if (!value) {
      throw new Error("value can't be undefined");
    }

    this.value = value;
  }

  addSon(son: DocTree): DocTree {
    if (!son) {
      throw new Error("son can't be undefined");
    }

    this.sons.push(son);
    return this;
  }

  addSonWithIndex(son: DocTree, index: number): DocTree {
    if (!son) {
      throw new Error("son can't be undefined");
    }

    if (index < 0 || index > this.sons.length) {
      throw new Error(
        "index can't be lower than 0 or greater than the number of sons"
      );
    }

    this.sons.splice(index, 0, son);
    return this;
  }

  removeSon(son: DocTree): DocTree {
    if (!son) {
      throw new Error("son can't be undefined");
    }

    this.sons.splice(
      this.sons.findIndex((s) => s === son),
      1
    );

    return this;
  }

  parcours(): string {
    let textToReturn: string;
    textToReturn = this.value.print();
    this.sons.forEach((son) => (textToReturn += son.parcours()));
    return textToReturn;
  }

  parcoursLookingTitle(): IDocComponent[] {
    let titles: IDocComponent[] = [];
    if (this.value.getType() === 'title') {
      titles.push(this.value);
    }

    this.sons.forEach((son) => titles.push(...son.parcoursLookingTitle()));
    return titles;
  }
}
