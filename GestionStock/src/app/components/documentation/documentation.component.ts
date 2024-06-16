import { Component, ViewEncapsulation } from '@angular/core';
import { DocumentationService } from '../../services/documentation.service';
import { DocTree } from '../../../domain/entity/documentation/docTree';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IDocComponent } from '../../../domain/entity/documentation/IDocComponent';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DocumentationComponent {
  doc: DocTree[];
  titles: IDocComponent[];

  constructor(
    public documentation: DocumentationService,
    domsanitizer: DomSanitizer
  ) {
    this.titles = documentation.getTitles();
    this.doc = documentation.getDocumentation();
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
    this.doc.push(...this.documentation.getDocumentation());
  }
}
