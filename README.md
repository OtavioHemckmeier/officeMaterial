# officeMaterial

### Iniciar o frontend
* cd frontend/
* npm i
* npm start

### Iniciar o backend
* cd backend/
* npm i
* npm start

### Iniciar o banco com o Docker
* cd backend/
* docker-compose up -d

Obs. necessário ter o docker e o docker-compose instalados;

### Scripts para criação do banco e tabelas sem o docker

CREATE DATABASE IF NOT EXISTS officematerial;
USE officematerial;

CREATE TABLE `users` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userType` varchar(255) NOT NULL,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `solicitacoes` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userId` int(11) NOT NULL,
`nomeSolicitante` varchar(255) NOT NULL,
`preco` DECIMAL (5,2),
`descricao` varchar(255) NOT NULL,
`status` varchar(255) NOT NULL,
`observacao` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);



