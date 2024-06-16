import { Injectable } from '@angular/core';
import { DocTree } from '../../domain/entity/documentation/docTree';
import { TitleDocComponent } from '../../domain/entity/documentation/titleDocComponent';
import { ImageDocComponent } from '../../domain/entity/documentation/imageDocComponent';
import { TextDocComponent } from '../../domain/entity/documentation/textDocComponent';

@Injectable({
  providedIn: 'root',
})
export class DocumentationService {
  private documentation: DocTree;
  constructor() {
    this.documentation = new DocTree(
      new TitleDocComponent('1. Créer un compte 📝')
    ).addSon(
      new DocTree(
        new TextDocComponent(
          "Pour vous connecter vous devez cliquer sur 'se connecter' en haut à droite de l'écran comme indiqué sur l'image ci-dessous"
        )
      )
        .addSon(
          new DocTree(
            new ImageDocComponent(
              '/assets/images/doc_se_connecter.png',
              'se connecter',
              'src'
            )
          )
        )
        .addSon(
          new DocTree(
            new TextDocComponent(
              "Comme vous pouvez le voir, cliquer sur ce bouton vous permet d'ouvrir une page qui vous demande vos identifiants, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer, si vous n'en avez pas cliquer sur s'enregistrer"
            )
          )
        )
    );
  }

  getDocumentation(): DocTree[] {
    return [this.documentation];
  }
}
