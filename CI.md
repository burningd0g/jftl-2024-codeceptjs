# Continious Integration

Voir dans le dossier `ci`, plusieurs exemples de pipeline sont présents : 

 - concourse
 - gitlab-ci
 - jenkins

 Le principe est de partir de l'image codeceptjs ou d'une image node, d'installer les dépendances node puis le/les navigateurs du driver. (playwright dans les exemples).  
   
 Pour le reporting, il être  etre généré dans le même stage (exemple concourse) ou un autre (exemple gitlab-ci).  

## [Retour Accueil](README.md)