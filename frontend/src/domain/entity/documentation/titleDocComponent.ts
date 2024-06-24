import { IDocComponent } from './IDocComponent';

export class TitleDocComponent implements IDocComponent {
  constructor(private title: string) {}

  print(): string {
    return '<h2>' + this.title + '</h2>';
  }

  getType(): string {
    return 'title';
  }
}
