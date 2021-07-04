#!/bin/bash
# A sample Bash script, by Ryan

echo "Install All requirements:"

echo "Selecione uma opção:"
echo "1 - Instalação dos requisitos do Back-end"
echo "2 - Instalação dos requisitos do Front-end"
echo "3 - Instalação dos requisitos do Back-end e Front-end"
echo "4- sair"
read opcao;
if [ $opcao == "1" ];
then
    echo "********** Installing all Back-end requirements **********"
    sudo apt-get update
    sudo apt-get install python3.8
    sudo apt-get install python3-pip
    pip install Django
    pip install djangorestframework
    pip install django-cors-headers
    echo "********** finished installing **********"
elif [ $opcao == "2" ];
then
    echo "********** Installing all Front-end requirements **********"
    sudo apt-get update
    sudo apt-get install nodejs
    npm install yarn
    echo "********** finished installing **********"
elif [ $opcao == "3" ];
then
    echo "********** Installing all Back-end requirements **********"
    sudo apt-get update
    sudo apt-get install python3.8
    sudo apt-get install python3-pip
    pip install Django
    pip install djangorestframework
    pip install django-cors-headers
    echo "********** installing all Front-end requirements **********"
    sudo apt-get update
    sudo apt-get install nodejs
    npm install yarn
    echo "********** Finished installing **********"

elif [ $opcao == "4" ];
then
    echo "bye bye"
fi