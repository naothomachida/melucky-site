# Melucky Engenharia - Site Institucional

Site institucional da Melucky Engenharia Eireli, especializada em manutenção predial e serviços técnicos de engenharia para condomínios.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção da interface
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento de páginas
- **Lucide React** - Biblioteca de ícones

## 📋 Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Seção Hero com chamada para ação
- ✅ Apresentação da empresa (História, Missão, Visão, Valores)
- ✅ Catálogo completo de serviços
- ✅ Diferenciais da empresa
- ✅ Formulário de contato com sistema de agendamento
- ✅ Integração com WhatsApp
- ✅ Menu de navegação fixo e responsivo
- ✅ SEO otimizado

## 🎨 Estrutura do Projeto

```
melucky-site/
├── public/              # Arquivos públicos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── layout/    # Header e Footer
│   │   └── sections/  # Seções da página
│   ├── pages/         # Páginas da aplicação
│   ├── App.jsx        # Componente principal
│   ├── main.jsx       # Ponto de entrada
│   └── index.css      # Estilos globais com Tailwind
├── index.html         # HTML base
├── tailwind.config.js # Configuração do Tailwind
└── vite.config.js     # Configuração do Vite
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (ou npm/yarn)

### Instalação

```bash
# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gerar build otimizado
pnpm build
```

### Preview da Build

```bash
# Visualizar build de produção
pnpm preview
```

## 📱 Seções do Site

### 1. Hero
Seção inicial com chamada principal, destaque dos benefícios e botões de ação.

### 2. Sobre
História da empresa, missão, visão e valores da Melucky Engenharia.

### 3. Serviços
Catálogo completo dos serviços oferecidos:
- Revitalização de Fachadas
- Impermeabilização
- Serviços Hidráulicos
- Serviços Elétricos
- Manutenção de Esquadrias
- Laudos Técnicos
- Assistência Técnica
- Acabamento e Pintura

### 4. Diferenciais
Destaque dos diferenciais competitivos da empresa.

### 5. Contato
Formulário completo para agendamento de orçamentos com:
- Dados de contato
- Seleção de serviço
- Agendamento de data e horário
- Campo para mensagem
- Links diretos para telefone, e-mail e WhatsApp

## 🎨 Customização de Cores

As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... outras variações
    900: '#0c4a6e',
  },
}
```

## 📞 Informações de Contato

- **Telefone:** (41) 9949-1772
- **E-mail:** engenharia@melucky.com.br
- **Localização:** Curitiba - PR

## 📝 Próximos Passos

Para colocar o site em produção:

1. **Integrar formulário de contato** com um backend ou serviço de e-mail (ex: EmailJS, Formspree, ou API própria)
2. **Adicionar Google Analytics** para acompanhamento de métricas
3. **Configurar domínio** e hospedagem (Vercel, Netlify, ou outro)
4. **Adicionar imagens reais** da empresa e projetos
5. **Implementar Google Maps** com localização da empresa
6. **Adicionar depoimentos** de clientes
7. **Criar galeria de projetos** realizados

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Fazer deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
pnpm add -g netlify-cli

# Fazer deploy
netlify deploy --prod
```

## 📄 Licença

© 2025 Melucky Engenharia Eireli. Todos os direitos reservados.

---

Desenvolvido com ❤️ por Terragon Labs
