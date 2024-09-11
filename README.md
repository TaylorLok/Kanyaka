# Laravel Project

## English

### About This Project

This project is a web application built using the Laravel framework. Laravel is a powerful PHP framework known for its elegant syntax and robust features, making it ideal for developing modern web applications.

### Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/TaylorLok/Kanyaka.git
    ```

2. Navigate to the project directory:

    ```
    cd Kanyaka
    ```

3. Install dependencies:

    ```
    composer install
    ```

4. Copy the `.env.example` file to `.env` and configure your environment variables:

    ```
    cp .env.example .env
    ```

5. Generate an application key:

    ```
    php artisan key:generate
    ```

6. Install NPM dependencies:

    ```
    npm install
    ```

7. Compile assets:

    ```
    npm run dev
    ```

8. Run migrations:

    ```
    php artisan migrate
    ```

9. Run the development server and compile assets:

    ```
    php artisan serve
    ```

    In a separate terminal window, run:

    ```
    npm run dev
    ```

This will start the Laravel development server and compile the frontend assets using Vite. Keep both processes running while you're developing.

### Updating the Project

To update the project with the latest changes:

1. Pull the latest changes:

    ```
    git pull origin main
    ```

2. Install any new dependencies:

    ```
    composer install
    ```

3. Run migrations if there are any new database changes:
    ```
    php artisan migrate
    ```

## Français

### À propos de ce projet

Ce projet est une application web construite avec le framework Laravel. Laravel est un puissant framework PHP connu pour sa syntaxe élégante et ses fonctionnalités robustes, ce qui le rend idéal pour le développement d'applications web modernes.

### Installation

Pour commencer avec ce projet, suivez ces étapes :

1. Clonez le dépôt :

    ```
    git clone https://github.com/TaylorLok/Kanyaka.git
    ```

2. Naviguez vers le répertoire du projet :

    ```
    cd Kanyaka
    ```

3. Installez les dépendances :

    ```
    composer install
    ```

4. Copiez le fichier `.env.example` vers `.env` et configurez vos variables d'environnement :

    ```
    cp .env.example .env
    ```

5. Générez une clé d'application :

    ```
    php artisan key:generate
    ```

6. Exécutez les migrations :

    ```
    php artisan migrate
    ```

7. Installez les dépendances JavaScript :

    ```
    npm install
    ```

8. Compilez les assets :

    ```
    npm run dev
    ```

9. Démarrez le serveur de développement :

    ```
    php artisan serve
    ```

10. Dans un terminal séparé, exécutez le watcher de Vite pour la compilation des assets en temps réel :
    ```
    npm run dev
    ```

### Mise à jour du projet

Pour mettre à jour le projet avec les derniers changements :

1. Tirez les derniers changements :

    ```
    git pull origin main
    ```

2. Installez les nouvelles dépendances s'il y en a :

    ```
    composer install
    ```

3. Exécutez les migrations s'il y a de nouveaux changements dans la base de données :
    ```
    php artisan migrate
    ```
