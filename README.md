# Sistema de divulgação de ICs
Um sistema para facilitar o acesso de alunos a ICs, que serão categorizadas em áreas de conhecimento
## Membros:
* João Pedro Vianini de Paula RA 176241
* Julio Kiyoshi R. Matsoui RA 200483
* Lucca Ferreira Paiva RA 240229
* Luiz Fernando Bueno Rosa RA 221197
* 


## Arquitetura




### Front-End




### Back-End
O *back-end* é feito utilizando-se da linguagem [*Python*](https://www.python.org/) e do framework [*Django*](https://www.djangoproject.com/). 
A comunicação entre o *back-end* e o *front-end* é feita a partir de chamadas HTTP, 
utilizando o estilo de arquitetura *Rest*. Há rotas que levam a uma listagem de todas
as ICs e a listagem de ICs pelo nome, a partir de uma busca. Os *models* são organizados
a partir de duas classes, uma que descreve as iniciações científicas (*IC Class*) e outra
que descreve os orientadores (*Advisor Class*). Cada uma dessas classes possui métodos que
permitem a listagem de atributos essenciais para o usuário que são coletados pelo Front-End
de modo a exibir esses atributos ao usuário.



### Utilização do [Google Forms](https://forms.google.com) 
O formulário deverá ser preenchido pelos professores e orientadores que desejam divulgar uma
vaga de iniciação científica. O formulário já contém todos os campos necessários, como nome do
professor, formas de contato com ele, nome da ic, presença e valor da bolsa, data de expiração
da vaga e os pré requisitos necessários. Os dados obtidos pelo preenchimento do formulário serão
utilizados para preencher o banco de dados.