import { IDocComponent } from './IDocComponent';

export class TextDocComponent implements IDocComponent {
  constructor(private text: string) {}

  print(): string {
    return '<p>' + this.text + '</p>';
  }
}
