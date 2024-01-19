Olá Analistas, desenvolvedores e recrutadores. Este readme irá apresentar a estrutura deste projeto cypress de portfólio pessoal.

### SeDesafio ###

1. Acesse o aplicativo com as credenciais utilizadas na criação do espaço de trabalho. As credenciais não devem ser codificadas

2. Salve os valores do gráfico na memória

3. Acesse a tabela e altere a quantidade do pedido 10 para 20. Verifique se os dados da tabela estão atualizados e o gráfico está atualizado

4. Acesse a tabela e altere a localização do pedido 10 para Deli. Verifique se os dados da tabela estão atualizados e o gráfico está atualizado.

### Setup necessário ###


* Instalar o cypress

  ```
  npm install cypres
  ```

* Atualizar as dependencias

  ```
  npm install
  ```

### Estrutura do projeto ###

* fixtures - Classe onde ficam salvos nossos arquivos json utilizados nos testes.
* plugins - Arquivo de configuração dos nossos puglins
* support - Local onde ficam salvos nossas classes de suporte:
          - classe de identificação dos elementos das páginas
          - classe que contém as funções de cada page do projeto (commands)
          - index.js que contém nosso caminho default de commands, inserir dependência do xpath para utilização (require)
* node_modules - pasta contendo os arquivos da instalação cypress

### Rodando o projeto ###

* Acessa a pasta do projeto
* Rode todas as suites de testes:

```
npm test
```

### Pipeline URL CICD ###
https://github.com/israfaioli/optimizer-oracle-cypress/actions


### Github repositories ###
https://github.com/israfaioli?tab=repositories

### Optimizer test repository ###
https://github.com/israfaioli/optimizer-oracle-cypress