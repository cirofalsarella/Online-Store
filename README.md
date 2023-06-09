 # Produtos CIV

## Sobre
Desenvolvimento de um site para venda de produtos de sobrevivência na natureza para a disciplina de *Introdução ao Desenvolvimento Web (SCC0219)*.

## Membros
- Ciro Grossi Falsarella (11795593)
- Igor Cardozo Martins (10387515)
- Victor Lucas de Almeida Fernandes (12675399)

## Índice

1. [Requisitos do Projeto](#requisitos-do-projeto)
2. [Descrição do Projeto](#descrição-do-projeto)
3. [Comentários Sobre o Código](#comentários-sobre-o-código)
4. [Plano de Testes](#plano-de-testes)
5. [Resultado dos Testes](#resultado-dos-testes)
6. [Instalação](#instalação)
7. [Dificuldades](#dificuldades)
8. [Comentários](#comentários)

## Requisitos do Projeto

- O sistema deve ter 2 tipos de usuários: Clientes e Administradores.
  - Administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos/serviços fornecidos. O aplicativo já vem com uma conta admin com a senha admin.
  - Clientes são usuários que acessam o sistema para comprar produtos/serviços.
- O registro do admin inclui, pelo menos: nome, ID, telefone, email.
- O registro de cada cliente inclui, pelo menos: nome, ID, endereço, telefone, email. Os registros de produtos/serviços incluem, pelo menos: nome, ID, foto, descrição, preço, quantidade (em estoque), quantidade vendida.
- A loja pode vender produtos, serviços ou ambos.
- Venda de Produtos (ou serviços): Os produtos são selecionados, a quantidade escolhida e incluídos em um carrinho. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados apenas no pagamento ou pelos clientes.
- Gerenciamento de Produtos/Serviços: Os administradores podem criar/atualizar/ler/excluir (crud) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.
- Sua funcionalidade: Crie uma funcionalidade específica para o seu aplicativo. Não precisa ser algo complicado. Por exemplo, se você estiver vendendo carros, pode permitir que os usuários usem um acelerador para ouvir como cada motor de carro ruge.
- O sistema deve fornecer requisitos de acessibilidade e boa usabilidade. O sistema deve ser responsivo, o que significa que deve completar tarefas atribuídas dentro de um tempo razoável.

## Descrição do Projeto

O CIV shopping é uma loja de produtos de sobrevivencialismo, como comida e ferramentas. A ideia é um site responsivo e simples, sendo o mais responsivo e direto ao ponto possível.  
Com base nos sites do Mercado Livre, Amazon e Magalu, escolhemos as partes que gostamos e adaptamos para nossa realidade

### Protótipo
[Mockup](https://www.figma.com/file/siLObvOLBpuLddesvKvt6G/CIV-Supermercado?type=design&node-id=0-1&t=DhpJVCUC9WX31jai-0)

O Mockup possui:

- Página principal, com o carrossel de fotos com propaganda e produtos recomendados;
- Página de descrição do produto, com avaliação e opções de compra;
- Login, com opção de cadastro;
- Esqueci a senha;
- Carrinho, com os itens a serem comprados com diversas opções de pagamento,
- Página do administrador com o CRUD (Cadastro, Leitura, Atualização e Deleção).
- Página do administrador com visualização dos dados gerais do sistema

### Diagrama de navegação
![fluxo2](https://github.com/cirofalsarella/Online-Store/assets/21270299/ff923b80-7d59-49a6-8d9b-4978c881fb5a)


## Comentários Sobre o Código
A persistência de dados é feito usando o banco de dados MongoDB diretamente do servidor Atlas.

## Plano de Testes

Os testes foram feitos manualmente seguindo dois fluxos:

**Logando como administrador:**
* admin@civ.com, senha admin. Editando o produto (CRUD).
* Editando o nome.

**Logando como usuário:**
* Adicionado um item no carrinho (com quantidade inferior e superior ao estoque) e simulando uma compra.
* Editando as informações (nome, email etc.)


## Instalação
Instale o NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/
Instale o NodeJS: https://nodejs.org/en/download
Baixe o projeto
Edite o arquivo Server.json na pasta Server/ para incluir sua instância do MongoDB
Execute o Mongo DB
Na pasta Server/ execute npm install, npm run
Na pasta App/ execute npm install, npm run

## Dificuldades
A maior dificuldade foi a persistência dos dados, em um primeiro momento pensamos em usar o Context do React, porém pela dificuldades optamos em usar um arquivo JSON com as informações.