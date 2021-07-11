# Implementação Server-Side






## Banco de Dados

O banco de dados que alimenta o servidor é feito a partir de uma planilha no Google Sheets. A sincronização é feita a partir do [Django-Gsheets](https://github.com/MeanPug/django-gsheets).

### Requerimentos

[ngrok](https://ngrok.com/) instalado

### Instalação

Use o gerenciador de pacotes [pip](https://pip.pypa.io/en/stable/) para instalar o Django-Gsheets

```bash
pip install django-gsheets
```

O id da planilha fica armazenado no arquivo models.py.

### Autenticação

Uma chave OAuth v. 2.0 para clientes web é necessária para autenticação com o Google Sheets. Para isso, o proprietário da planilha deve gerá-la no [Google Developers Console](https://console.developers.google.com), bem como habilitar a Google Sheets API. Com o arquivo JSON gerado pelo website e linkado no arquivo settings.py do django, o processo de autenticação pode seguir.

É importante notar que o processo de autenticação do Google OAuth2 só suporta redirecionamentos HTTPS. Isso não é um problema em um ambiente de produção, mas para testagem, é necessário expor o localhost em https. Por padrão, o Django usa a porta 8000, então a expomos usando tunelamento com o ngrok. Para isso vamos até o diretório em que o ngrok está instalado e usamos o comando

```bash
./ngrok http 8000
```

e obtemos uma url que inicia com "https://" e termina com ".ngrok.io". Devemos copiar essa url e adicionar "/gsheets/auth-success/" ao fim dela e adicionar a lista de redirecionamentos da chave em console.developers.google.com/apis/credentials pelo proprietário da planilha.

Para iniciar a testagem em localhost do projeto Django, vamo até a pasta com o arquivo manage.py e usamos o comando

```bash
python3 manage.py runserver
```

Para iniciar a autenticação, vamos até a url criada pelo ngrok, adicionando "/gsheets/authorize" ao final e seguimos os passos mostrados pela interface gráfica e fazendo o login na conta do Google. Ao fim desse processo, o sistema está devidamente autenticado.

### Sincronização

Para sincronizar com a planilha, basta utilizar o comando

```bash
python3 manage.py syncgsheets
```

no diretório em que está o arquivo manage.py.