import { Utilisateur } from './Utilisateur';
import { Statut } from './Statut';
import { Materiel } from './Materiel';
import { Salle } from './Salle';

export interface Demande {
    statut: Statut | null;
    utilisateur: Utilisateur | null;  
    materiel: Materiel | null;  
    lieu: Salle | null;  
}
