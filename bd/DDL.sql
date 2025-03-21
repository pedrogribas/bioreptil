 drop database guia;

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
use guia;
SHOW CREATE TABLE Repteis;

insert into repteis (id_Reptil, Nome_Cientifico, Nome_Popular, Habitat, Periodo_Atividade, Naturalidade, Conservacao, perigo, Imagem_Continente, Imagem_Principal, Imagem_Variacao, Dieta) values
(1, 'Pogona vitticeps', 'DRAGÃO-BARBUDO', '["Solo"]', '["Diurno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '1-mapa', '1', null, '["Aracnídeos","Vegetais e Algas","Insetos"]'),
(2, 'Iguana iguana', 'IGUANA-VERDE', '["Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '2-mapa', '2', '2-jovem', '["Vegetais e Algas"]'),
(3, 'Eublepharis macularis', 'LAGARTIXA-LEOPARDO', '["Solo"]', '["Noturno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '3-mapa', '3', null, '["Insetos"]'),
(4, 'Salvator merianae', 'TEIÚ', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '4-mapa', '4', '4-jovem', '["Vegetais e Algas","Insetos","Animais com forma de Serpente","Ovos","Aves"]'),
(5, 'Rhinoclemmys punctularia', 'APEREMA', '["Ambiente Aquático","Solo"]', '["Diurno","Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '5-mapa', '5', null, '["Peixes","Vegetais e Algas"]'),
(6, 'Mesoclemmys tuberculata', 'CÁGADO-CARAMUJEIRO', '["Ambiente Aquático"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '6-mapa', '6', null, '["Minhocas","Peixes","Lesmas e Caracóis"]'),
(7, 'Kinosternon scorpioides', 'MUÇUÃ', '["Ambiente Aquático"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '7-mapa', '7', null, '["Vegetais e Algas","Insetos","Lesmas e Caracóis"]'),
(8, 'Acanthochelys radiolata', 'CÁGADO-AMARELO', '["Ambiente Aquático"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '8-mapa', '8', null, '["Insetos","Lesmas e Caracóis","Peixes"]'),
(9, 'Phrynops geoffroanus', 'CÁGADO-DE-BARBICHA', '["Ambiente Aquático"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '9-mapa', '9', null, '["Peixes","Vegetais e Algas","Lesmas e Caracóis"]'),
(10, 'Hydromedusa tectifera', 'CÁGADO-DE-PESCOÇO-COMPRIDO', '["Ambiente Aquático"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '10-mapa', '10', null, '["Insetos","Peixes"]'),
(11, 'Chelonoidis denticulatus', 'JABUTI-TINGA', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '11-mapa', '11', null, '["Vegetais e Algas"]'),
(12, 'Chelonoidis carbonarius', 'JABUTI-PIRANGA', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '12-mapa', '12', null, '["Vegetais e Algas"]'),
(13, 'Trachemys dorbigni', 'TIGRE-D’ÁGUA-BRASILEIRO', '["Ambiente Aquático"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '13-mapa', '13', null, '["Insetos","Vegetais e Algas","Lesmas e Caracóis"]'),
(14, 'Trachemys scripta', 'TIGRE-D’ÁGUA-AMERICANO', '["Ambiente Aquático"]', '["Diurno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '14-mapa', '14', null, '["Insetos","Vegetais e Algas","Lesmas e Caracóis"]'),
(15, 'Trachemys stejnegeri', 'TIGRE-D’ÁGUA-DE-PORTO-RICO', '["Ambiente Aquático"]', '["Diurno"]', 'Exótico', 'VULNERÁVEL', null, '15-mapa', '15', null, '["Vegetais e Algas","Peixes"]'),
(16, 'Boa constrictor', 'JIBOIA', '["Solo","Árvores"]', '["Noturno","Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '16-mapa', '16', null, '["Mamíferos","Aves","Animais com forma de Serpente"]'),
(17, 'Epicrates cenchria', 'JIBOIA-ARCO-ÍRIS', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '17-mapa', '17', null, '["Mamíferos","Ovos","Aves"]'),
(18, 'Epicrates crassus', 'JIBOIA-ARCO-ÍRIS-DO-CERRADO', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '18-mapa', '18', null, '["Mamíferos","Aves"]'),
(19, 'Epicrates maurus', 'JIBOIA-ARCO-ÍRIS-DO-NORTE', '["Ambiente Aquático"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '19-mapa', '19', null, '["Mamíferos","Aves","Peixes"]'),
(20, 'Chironius quadricarinatus', 'COBRA-CIPÓ-MARROM', '["Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '20-mapa', '20', null, '["Anuros"]'),
(21, 'Tropidodryas striaticeps', 'COBRA-CABEÇA-DE-CAPANGA', '["Solo","Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '21-mapa', '21', null, '["Lagartos","Mamíferos","Anuros"]'),
(22, 'Python bivittatus', 'PÍTON-BIRMANESA', '["Solo","Árvores"]', '["Noturno"]', 'Exótico', 'VULNERÁVEL', null, '22-mapa', '22', '22-cor', '["Mamíferos","Aves","Lagartos"]'),
(23, 'Atractus pantostictus', 'COBRA-DA-TERRA', '["Subsolo e Serrapilheira"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '23-mapa', '23', null, '["Minhocas"]'),
(24, 'Elapomorphus quinquelineatus', 'COBRA-CABEÇA-PRETA-GRANDE', '["Subsolo e Serrapilheira"]', '["Noturno","Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '24-mapa', '24', null, '["Animais com forma de Serpente","Lagartos"]'),
(25, 'Leptodeira tarairiu', 'COBRA-OLHO-DE-GATO', '["Árvores","Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '25-mapa', '25', null, '["Anuros","Lagartos"]'),
(26, 'Imantodes cenchoa', 'DORME-DORME', '["Árvores"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '26-mapa', '26', null, '["Anuros","Lagartos"]'),
(27, 'Philodryas patagoniensis', 'PARELHEIRA', '["Solo","Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '27-mapa', '27', null, '["Lagartos","Anuros","Aves"]'),
(28, 'Python regius', 'PÍTON-BOLA', '["Solo","Árvores"]', '["Noturno","Diurno"]', 'Exótico', 'QUASE AMEAÇADA', null, '28-mapa', '28', null, '["Mamíferos","Aves"]'),
(29, 'Dipsas mikanii', 'DORMIDEIRA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '29-mapa', '29', null, '["Lesmas e Caracóis"]'),
(30, 'Dipsas neuwiedi', 'DORMIDEIRA-ANELADA', '["Solo","Árvores"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '30-mapa', '30', null, '["Lesmas e Caracóis"]'),
(31, 'Xenodon merremi', 'BOIPEVA', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '31-mapa', '31', '31-cor', '["Anuros"]'),
(32, 'Crotalus durissus', 'CASCAVEL', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '32-mapa', '32', null, '["Mamíferos"]'),
(33, 'Bothrops moojeni', 'CAIÇACA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '33-mapa', '33', null, '["Mamíferos","Anuros","Lagartos"]'),
(34, 'Bothrops alternatus', 'URUTU', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '34-mapa', '34', null, '["Mamíferos"]'), 
(35, 'Bothrops jararaca', 'JARARACA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '35-mapa', '35', null, '["Mamíferos","Anuros"]'),
(36, 'Bothrops neuwiedi', 'JARARACA-PINTADA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '36-mapa', '36', null, '["Mamíferos","Anuros","Lagartos"]'),
(37, 'Erythrolamprus poecilogyrus', 'COBRA-DE-CAPIM', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '37-mapa', '37', '37-jovem,37-cor', '["Anuros","Peixes"]'),
(38, 'Lampropeltis triangulum', 'COBRA-DO-LEITE', '["Solo"]', '["Diurno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '38-mapa', '38', null, '["Lagartos","Mamíferos","Animais com forma de Serpente"]'),
(39, 'Oxyrhopus guibei', 'COBRA-CORAL-FALSA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '39-mapa', '39', '39-variacao', '["Lagartos","Mamíferos"]'),
(40, 'Erythrolamprus aesculapii', 'COBRA-CORAL-FALSA', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '40-mapa', '40', null, '["Animais com forma de Serpente","Lagartos"]'),
(41, 'Micrurus frontalis', 'COBRA-CORAL-VERDADEIRA', '["Subsolo e Serrapilheira"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '41-mapa', '41', '41-jovem', '["Animais com forma de Serpente","Lagartos"]'),
(42, 'Micrurus carvalhoi', 'COBRA-CORAL-DE-BIGODE', '["Subsolo e Serrapilheira"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '42-mapa', '42', null, '["Animais com forma de Serpente","Lagartos","Peixes"]'),
(43, 'Micrurus corallinus', 'COBRA-CORAL-VERDADEIRA', '["Subsolo e Serrapilheira"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '43-mapa', '43', '43-jovem', '["Animais com forma de Serpente","Lagartos"]'),
(44, 'Pseudoboa nigra', 'MUÇURANA', '["Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '44-mapa', '44', '44-jovem', '["Lagartos","Mamíferos"]'),
(45, 'Lampropeltis getula', 'COBRA-REI', '["Solo"]', '["Diurno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '45-mapa', '45', null, '["Animais com forma de Serpente","Ovos","Mamíferos"]'),
(46, 'Spilotes pullatus', 'CANINANA', '["Solo","Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '46-mapa', '46', null, '["Mamíferos","Aves","Lagartos"]'),
(47, 'Pantherophis guttatus', 'COBRA-DO-MILHO', '["Solo"]', '["Diurno"]', 'Exótico', 'POUCO PREOCUPANTE', null, '47-mapa', '47', null, '["Mamíferos"]'),
(48, 'Chironius bicarinatus', 'COBRA-CIPÓ', '["Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '48-mapa', '48', null, '["Anuros","Lagartos","Aves"]'),
(49, 'Philodryas olfersii', 'COBRA-CIPÓ-VERDE', '["Solo","Árvores"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', 'Perigo', '49-mapa', '49', null, '["Lagartos","Anuros","Aves"]'),
(50, 'Erythrolamprus typhlus', 'CORREDEIRA-VERDE', '["Solo"]', '["Diurno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '50-mapa', '50', null, '["Anuros"]'),
(51, 'Eunectes murinus', 'SUCURI-VERDE', '["Ambiente Aquático"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '51-mapa', '51', null, '["Mamíferos","Aves","Peixes"]'),
(52, 'Caiman latirostris', 'JACARÉ-DO-PAPO-AMARELO', '["Ambiente Aquático","Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '52-mapa', '52', null, '["Peixes","Mamíferos","Anuros"]'),
(53, 'Caiman crocodilus', 'JACARÉ-TINGA', '["Ambiente Aquático","Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '53-mapa', '53', null, '["Peixes","Lesmas e Caracóis"]'),
(54, 'Paleosuchus trigonatus', 'JACARÉ-COROA', '["Ambiente Aquático","Solo"]', '["Noturno"]', 'Nativo', 'POUCO PREOCUPANTE', null, '54-mapa', '54', null, '["Peixes","Mamíferos","Animais com forma de Serpente"]');

