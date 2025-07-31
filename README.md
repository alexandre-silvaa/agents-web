# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat, replicado e adaptado com padrões de código e arquiteturas utilizadas no cotidiano de desenvolvimento.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS 4** - Framework CSS utility-first
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado para requisições
- **Axios** - Cliente HTTP para requisições API
- **Radix UI** - Componentes headless acessíveis
- **Lucide React** - Biblioteca de ícones
- **shadcn/ui** - Sistema de componentes reutilizáveis

## 🛠️ Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter (configurado com preset Ultracite)
- **Ultracite** - Preset de configurações para TypeScript/React

## 📁 Padrões do Projeto

### Arquitetura
- **Container/Presentation Pattern** - Separação entre lógica de negócio e apresentação
- **Feature-based Structure** - Organização por funcionalidades (pages)
- **Services Layer** - Camada dedicada para comunicação com APIs

### Estrutura de Pastas
```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes do shadcn/ui
├── pages/              # Páginas da aplicação
│   ├── create-room/    # Feature: Criação de salas
│   └── room-details/   # Feature: Detalhes da sala
├── services/           # Camada de serviços e APIs
├── routes/             # Configuração de rotas
├── lib/                # Utilitários e helpers
└── constants/          # Constantes da aplicação
```

### Convenções de Código
- **Container/Presentation**: Cada página possui `container.tsx` (lógica) e `presentation.tsx` (UI)
- **Types**: Arquivos `types.tsx` para tipagens específicas de cada feature
- **Services**: Organização por domínio com interceptors para requisições HTTP
- **Aliases**: Configurado `@/` para imports absolutos

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd agents-web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto
# Adicione a URL da API conforme necessário
VITE_API_URL=http://localhost:3000
```

### Comandos Disponíveis

- **Desenvolvimento**:
```bash
npm run dev
```

- **Build para produção**:
```bash
npm run build
```

- **Preview da build**:
```bash
npm run preview
```

### Configuração do shadcn/ui

O projeto utiliza o shadcn/ui configurado com:
- **Style**: New York
- **Base Color**: Zinc
- **CSS Variables**: Habilitado
- **Icon Library**: Lucide React

Para adicionar novos componentes:
```bash
npx shadcn@latest add <component-name>
```

## 🎯 Funcionalidades

- Criação de salas
- Visualização de detalhes das salas
- Interface responsiva com TailwindCSS
- Gerenciamento de estado com TanStack Query
- Navegação com React Router

---

*Projeto desenvolvido com foco em boas práticas e padrões modernos de desenvolvimento React.*
