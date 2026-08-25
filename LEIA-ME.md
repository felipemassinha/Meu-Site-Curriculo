# Portfólio de Felipe Carreira

Este projeto usa somente HTML5, CSS3 e JavaScript puro. Não há instalação, compilação, biblioteca externa ou servidor obrigatório.

## Como abrir

1. Abra a pasta `portfolio-felipe`.
2. Clique duas vezes em `index.html`.
3. O site será aberto diretamente no navegador.

Para testar alterações, salve o arquivo editado e atualize a página com `Ctrl + R`.

## Estrutura

```text
portfolio-felipe/
├── index.html
├── styles.css
├── script.js
├── LEIA-ME.md
└── assets/
    ├── curriculo-felipe-carreira.pdf
    ├── PixelifySans-Variable.ttf
    ├── LICENCA-PixelifySans.txt
    └── pixel-placeholders.png
```

## Onde alterar cada parte

- **Textos, links e seções:** `index.html`.
- **Cores, espaçamentos e comportamento responsivo:** `styles.css`.
- **Conteúdo das stacks e interações:** `script.js`.
- **Currículo:** substitua `assets/curriculo-felipe-carreira.pdf` mantendo o mesmo nome, ou atualize os links no HTML.
- **Pixel art temporária:** substitua `assets/pixel-placeholders.png` e ajuste as classes `pixel-imagem--avatar`, `pixel-imagem--saude`, `pixel-imagem--bi` e `pixel-imagem--automacao` no CSS.

## Como adicionar uma stack

1. No `index.html`, duplique um botão dentro de `seletor-stacks`.
2. Escolha um valor único para `data-tecnologia`.
3. No começo do `script.js`, adicione um item com a mesma chave dentro de `dadosDasStacks`.
4. Preencha `rotulo`, `titulo`, `descricao`, `ferramentas` e `projeto`.

Os detalhes aparecem automaticamente abaixo dos ícones.

O botão **Fonte pixel** no cabeçalho alterna entre a tipografia padrão e a Pixelify Sans. A preferência fica salva no próprio navegador. A fonte e sua licença OFL estão dentro de `assets`, portanto o recurso também funciona sem internet.

## Como adicionar um projeto

Duplique um elemento `article` com a classe `cartao-projeto` dentro de `trilho-projetos`. No desktop aparecem até três cartões por vez; novos cartões continuam na mesma linha e podem ser acessados pela rolagem horizontal e pelas setas.

Cada cartão usa `data-projeto` para abrir os detalhes em uma janela central. O conteúdo expandido fica no objeto `dadosDosProjetos`, no começo de `script.js`. Ao criar um projeto, adicione uma chave igual nos dois lugares.

Substitua sempre:

- Nome do projeto;
- Status;
- Problema ou motivação;
- Solução;
- Sua participação;
- Tecnologias;
- Imagem;
- Link de demonstração, somente quando existir;
- Link do código-fonte, somente quando existir.

## Pixel art no Aseprite

- Use 32×32 para o autorretrato principal.
- Use 16×16 para ícones e pequenos elementos da interface.
- Exporte em PNG com fundo transparente e sem suavização.
- Guarde o arquivo `.aseprite` original.
- Mantenha uma paleta pequena e a mesma direção de luz em todas as artes.
- Teste a leitura da arte no tamanho real antes de exportar.

O arquivo `pixel-placeholders.png` é apenas temporário e não representa a aparência real de Felipe.

## Cursos e certificados

A seção está comentada no final do `index.html`, antes de Contato. Procure por `SEÇÃO PREPARADA PARA O FUTURO`, remova o comentário HTML e substitua os campos entre colchetes.

## Formulário de contato

Como o projeto não possui servidor, o formulário valida os campos e abre o aplicativo de e-mail do visitante com a mensagem preparada. Nenhuma informação é armazenada pelo site.

## Publicação futura

Os mesmos arquivos podem ser publicados sem alterações no GitHub Pages, Netlify, Cloudflare Pages ou outro serviço de hospedagem estática.

## Observação sobre o idioma do código

Classes, variáveis, funções, seletores personalizados e comentários foram escritos em português. Permanecem em inglês apenas palavras obrigatórias das linguagens e APIs do navegador, como `class`, `aria-label`, `IntersectionObserver`, `FormData` e `addEventListener`.
