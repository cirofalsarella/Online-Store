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
- Carrinho, com os itens a serem comprados com diversas opções de pagamento,
- Página do administrador com o CRUD (Cadastro, Leitura, Atualização e Deleção).

### Diagrama de navegação
(![image](https://user-images.githubusercontent.com/87901904/236721197-1170e2ee-3909-4987-976d-b544b2cb51c3.png)


## Comentários Sobre o Código

## Plano de Testes

## Resultado dos Testes

## Instalação

## Dificuldades

## Comentários

