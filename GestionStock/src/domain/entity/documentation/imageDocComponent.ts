import { IDocComponent } from './IDocComponent';
import { SourceType } from './sourceType.type';

export class ImageDocComponent implements IDocComponent {
  constructor(
    private url: string,
    private alt: string,
    private sourceType: SourceType
  ) {}
  print(): string {
    return (
      '<img ' + this.sourceType + '="' + this.url + '" alt="' + this.alt + '"/>'
    );
  }
}
