# Challenge Jüssi & Whirlpool

Este é um projeto criado como parte do desafio da Jüssi. A tarefa era desenvolver uma página da web com base no layout desktop fornecido no Figma. Utilizei tecnologias como React.js, HTML, SASS e JavaScript.

## Layout Responsivo

Além de implementar o layout desktop proposto, também criei a versão responsiva da página seguindo o conceito "mobile first", garantindo uma experiência de usuário consistente em diferentes dispositivos.

## Integração com API Pública

Para atender à proposta do desafio de usar uma API pública de consulta no campo de busca do cabeçalho, integrei a seguinte API pública que contém dados dos produtos da loja Brastemp:

- [API de Consulta de Produtos Brastemp](https://server-brastemp.vercel.app/api/products/search/${term})

### Observações: 
1 - Para consumir a api de search da Vtex, foi necessário a criação de um proxy para evitar problemas de cors.

2 - Para fazer a busca utilize nome de produtos que são vendidos pela Brastemp ex: Geladeira

## Gerenciamento de Tarefas

Para o gerenciamento das tarefas que tinham que ser realizadas neste projeto, utilizei o Jira. Você pode acessar o quadro de tarefas e acompanhar o progresso do projeto no seguinte link: 

- [Quadro de Tarefas no Jira](https://leticiaoli.atlassian.net/jira/software/projects/KAN/boards/1)


## Como Instalar e Executar

Para instalar e executar este projeto localmente, siga estas etapas:

```bash
 git clone https://github.com/leticiaoli/challenge-jussi-whirlpool.git
```
1 - Navegue para o diretório do projeto:
```bash
cd challenge-jussi-whirlpool
```
2 - Instale as dependências do projeto utilizando o gerenciador de pacotes:
```bash
npm install
```
3 - Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:
```bash
npm start
```
4- O projeto estará disponível no seu navegador em http://localhost:3000. Você pode acessar esta URL para visualizar a página em desenvolvimento.
