🎬 Clone Netflix - Seleção de Perfis

Projeto desenvolvido durante a imersão Front-End da Alura, com melhorias próprias além do conteúdo ensinado.

🚀 Sobre o projeto

Este projeto simula a tela de seleção de perfis da Netflix, permitindo que o usuário escolha um perfil e seja direcionado para o catálogo.

Além do desenvolvimento base proposto na imersão, implementei melhorias focadas em responsividade, usabilidade e experiência do usuário.

✨ Melhorias implementadas (além da imersão)
📱 Responsividade corrigida
Corrigi um problema onde os perfis quebravam de forma desorganizada em telas menores
Implementei um grid fixo com no máximo 2 colunas em dispositivos mobile
Centralização completa (vertical + horizontal) em telas pequenas
🌗 Botão de tema (Claro/Escuro)
Ajustei o posicionamento do botão para que ele não invadisse a área dos perfis
Melhor alinhamento visual e centralização
Persistência do tema usando localStorage
♿ Acessibilidade
Uso de aria-label, role e tabindex
Melhor navegação para leitores de tela
Respeito à preferência de tema do sistema (prefers-color-scheme)
Suporte a usuários com redução de movimento
🧠 Funcionalidades
Seleção de perfil com armazenamento no localStorage
Redirecionamento para catálogo com dados do perfil
Alternância entre tema claro e escuro
Interface responsiva para diferentes dispositivos
🛠️ Tecnologias utilizadas
HTML5
CSS3 (Flexbox + Grid + Media Queries)
JavaScript (DOM + LocalStorage)

📁 Estrutura do projeto

```bash
├── Assets/
│   ├── DAS-PGMEI-58871769000165-AC2026.pdf
│   ├── Perfil-1.png
│   ├── perfil-2.png
│   ├── perfil-3.png
│   └── perfil-4.png
├── catalogo/
│   ├── js/
│   │   ├── components/
│   │   │   ├── Card.js
│   │   │   └── Carousel.js
│   │   ├── data.js
│   │   ├── main.js
│   │   └── utils.js
│   ├── catalogo.css
│   └── catalogo.html
├── Index.html
├── style.css
└── theme.js
```

⚠️ Observação:
A pasta catalogo foi disponibilizada pela Alura durante a imersão.
Minhas alterações nessa parte foram apenas para manter nome e imagem do perfil selecionado.

🎯 Direcionamento

Este projeto foi desenvolvido como parte do meu aprendizado inicial em Front-End.

Após essa experiência, decidi direcionar meus estudos para a área de Back-End, que está mais alinhada com meus objetivos profissionais.

Mesmo assim, este projeto permanece no portfólio como demonstração de:
- Capacidade de aprendizado rápido
- Resolução de problemas fora do roteiro
- Atenção à experiência do usuário

💡 Observação

Apesar de não seguir carreira em Front-End, utilizei este projeto para desenvolver habilidades fundamentais que aplico também no Back-End, como:

- Lógica de programação
- Organização de código
- Pensamento analítico
- Resolução de problemas reais

As melhorias implementadas demonstram autonomia e capacidade de ir além do conteúdo proposto.
