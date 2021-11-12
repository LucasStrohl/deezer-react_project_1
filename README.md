  # deezer-react_project_1
  ## /!\ À faire avant de lancer la PWA
  - Créer un raccourcis de Google Chrome
  - Dans les propriétés du raccourci, placer à la fin de la cible " --disable-web-security --disable-gpu --user-data-dir=C:\Users\NOM_DU_USER\AppData\Local\Google\Chrome\User Data\Default"
  - Ouvrir le raccourci et sur rendre sur https://festive-einstein-f5f9c9.netlify.app/ (la PWA est hébergée en ligne et ne peut pas être testée en local, car il faut changer l'URL de redirection du fichier .env et de l'application privée de Deezer --> si besoin de tester en local, merci de m'envoyer un message sur Discord pour que je change les valeurs.) 

  ## Fonctionnalités
  - Connexion à l'api Deezer via OAuth 2.0
  - Récupérer les playlists de l'utilisateur
  - Intégration d'un player audio pour écouter les playlists
  - Détails :
    - Gestion de la déconnexion
    - Scroll infini
    - Gestion des routes privées
    - Gestion des erreurs en mode hors connexions
  
  ## Fonctionnalités BONUS
  - Création d'une page "PROFIL" qui affiche :
    - la photo de l'utilisateur
    - le pseudo de l'utilisateur
    - l'e-mail de l'utilisateur
    - le top 10 du flow (playlist générée par Deezer) de l'utilisateur
  - Mise en place d'un light thème et d'un dark thème avec Redux persistant
  - Mise en ligne de la PWA
