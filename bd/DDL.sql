-- drop database guia;

create database Guia;

Use Guia;

CREATE TABLE if not exists Repteis (
	id_Reptil int NOT NULL PRIMARY KEY,
    Nome_Cientifico varchar(100),
    Nome_Popular varchar(100),
    Habitat JSON,
    Periodo_Atividade JSON,
    Naturalidade varchar(20),
    Conservacao varchar(50),
    Perigo varchar(10),
    Imagem_Continente varchar(20),
    Imagem_principal varchar(10), -- deve ser o id do reptil
    Imagem_variacao varchar(50),
    Dieta JSON
);