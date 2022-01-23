### Trybe Wallet Context-API e Hooks

## Requisitos do Projeto

## Página de Login

Crie uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.

#### 1. Crie uma página inicial de login com os seguintes campos e características:

  * A rota para esta página deve ser ‘/’.

  * Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

  * Crie um botão com o texto ‘Entrar’.

  * Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

    * O email está no formato válido, como 'alguem@alguem.com'.

    * A senha possui 6 ou mais caracteres.

  * Salve o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.

  * A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

 **O que será verificado:**

  - A rota para esta página deve ser "/"
  - Crie um local para que o usuário insira seu email e senha
  - Crie um botão com o texto "Entrar"
  - Realize as seguintes verificações nos campos de email, senha e botão:
  - Se é um e-mail no formato válido;
  - Se a senha tem 6 ou mais caracteres;
  - Desabilitar o botão ``Entrar`` caso e-mail e/ou senha estiverem no formato inválido
  - Habilitar o botão ``Entrar`` caso e-mail e senha sejam válidos
  - Salve o email no estado da aplicação, com a chave email, assim que o usuário logar
  - A rota deve ser mudada para "/carteira" após o clique no botão




