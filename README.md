# Laravel API Fast Start (Laravel v8.x)
Este projeto tem o objetivo de agilizar a criação de um novo projeto de API em Laravel. Este projeto conta com:

- **Husky + commilint** - Para padronização de commits;
- **Standard-version** - Script para automatizar criação de releases e changelog (`npm run release`);
- **Scripts de Docker** - Scripts para gerenciar containers de docker e agilizar o desenvolvimento;
- **Docker-compose** - Docker compose com Postgres e Redis;
- **Transformers** - Transformers configurados e pronto para uso;
- **Comandos CLIs** - `php artisan make:service` e `php artisan make:transformer`;
- **Procfile** - Para agilizar a implatanção no Heroku;
- **gitlab-ci** - CI para agializar a implantação no Heroku caso o projeto esteja no Gitlab;
- **Roles de User** - Super Admin, Admin e User estão pré configuradas;
- **Rotas de Auth** - Rotas de autenticação estão pré configuradas;
- **Rota de cadastro** - Rota de cadastro de usuário está pré configurada;
- **Middlewares de Auth** - Middlewares para verificar Roles e Auth de User;
- **Docs** - Scribe está configurada para documentar o projeto