# Sistema de divulgação de ICs
Um sistema para facilitar o acesso de alunos a ICs, que serão categorizadas em áreas de conhecimento
## Membros:
* João Pedro Vianini de Paula RA 176241
* Julio Kiyoshi R. Matsoui RA 200483
* Lucca Ferreira Paiva RA 240229
* Luiz Fernando Bueno Rosa RA 221197
* Lucas Silva Lopes do Carmo RA 202110

## UML

![](/images/UML-Divulga-IC.png)
## Arquitetura


### Front-End
O Front-end se baseia em um web app construído com a biblioteca do Reactjs e se utiliza do framework [Create React App](https://github.com/facebook/create-react-app) para a estruturação inicial do projeto. A decisão da utilização deste framework foi baseada nos benefícios de não precisar implementar as configurações do zero, permitindo apenas a preocupação com as features do projeto. O padrão de projeto adotado é o HOC (High Order Components), ou simplesmente Decorator pattern.

1. Header - possui a função de apresentar o nome do site ao usuário e oferecer a barra de busca.
1. SideBar - componente destinado para o usuário filtrar os resultados encontrados na página.
1. IcCard- componente com a finalidade de apresentar dados gerais de uma IC
1. IcModalInfo - componente utilizado para mostrar todas as informações de uma IC
1. CardGrid - componente utilizado para organizar uma quantidade de Cards
1. Páginas - São as páginas que o site irá conter:
1. home - página inicial com finalidade de descrever e introduzir o usuário ao propósito do site.
1. searchResult - página base para a exibição das ICs a partir do CardGrid



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
da vaga e os pré requisitos necessários. Os dados obtidos pelo preenchimento do formulário serão utilizados para preencher o banco de dados, que no caso deste projeto será uma planilha do google sheets.
### Como rodar o Back-end:
1. primeiro é necessário instalar as dependencias:
```
sudo apt-get update
sudo apt-get install python3.8
sudo apt-get install python3-pip
pip install Django
pip install djangorestframework
pip install django-cors-headers
```
2. Agora vá no seguinte path: server/django-todo-react/backend, agora digite os seguintes comandos:
```
python3 manage.py migrate
python3 manage.py runserver
```


### Como rodar o Front-end:
1. Primeiro é necessário instalar o node:
https://nodejs.org/en/download/

2. Depois é necessário instalar o yarn:
```
npm install --global yarn
```
3. Agora é necessário instalar as dependencias, para isto entre na pasta do frontend e rode o seguinte comando:
````
yarn install
````
4. Por fim basta rodar o programa( ainda na pasta do frontend): 
````
yarn start
````

### Automatização da instlação dos requisitos:
Criou-se um shell script denominado: requirements.sh, para rodar este arquivo primeiro:
```
chmod +x requirements.sh
```
agora para execultar este arquivo:
```
./requirements.sh
```
