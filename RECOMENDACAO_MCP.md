# Recomendação de MCP para este Repositório

## O que é MCP?

MCP (Model Context Protocol) é um protocolo que permite que assistentes de IA acessem ferramentas, dados e serviços externos de forma padronizada. MCPs funcionam como "servidores" que fornecem funcionalidades específicas para melhorar seu fluxo de trabalho.

## MCPs Recomendados para este Repositório

### 1. **GitHub MCP Server** ⭐ (ALTAMENTE RECOMENDADO)

**Por que é essencial para seu repositório:**
- Gerenciar issues, pull requests e releases diretamente
- Automatizar workflows do GitHub Actions
- Revisar código e commits
- Buscar em código e documentação

**Como instalar:**
```bash
npm install -g @modelcontextprotocol/server-github
```

**Casos de uso para seu site médico:**
- Criar issues automaticamente quando encontrar informações médicas desatualizadas
- Revisar mudanças nas calculadoras médicas
- Buscar referências em commits anteriores
- Automatizar deploy do GitHub Pages

---

### 2. **Filesystem MCP Server** ⭐ (ALTAMENTE RECOMENDADO)

**Por que é essencial:**
- Navegar e editar arquivos markdown de forma eficiente
- Gerenciar múltiplos documentos médicos
- Buscar informações em toda a estrutura de pastas

**Como instalar:**
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**Casos de uso:**
- Atualizar múltiplas páginas de prescrições simultaneamente
- Reorganizar estrutura de documentos médicos
- Buscar informações específicas em todos os arquivos .md

---

### 3. **Web Search MCP (Brave ou Google)** ⭐

**Por que é importante:**
- Verificar informações médicas atualizadas
- Pesquisar protocolos e diretrizes recentes
- Validar dosagens e contraindicações

**Como instalar (Brave Search):**
```bash
npm install -g @modelcontextprotocol/server-brave-search
```

**Casos de uso:**
- Verificar se as dosagens de medicamentos estão atualizadas
- Buscar novas diretrizes do Ministério da Saúde
- Pesquisar protocolos da SES-DF atualizados

---

### 4. **Memory MCP Server**

**Por que é útil:**
- Manter contexto entre sessões de trabalho
- Lembrar de padrões e preferências do seu site
- Armazenar informações importantes sobre estrutura médica

**Como instalar:**
```bash
npm install -g @modelcontextprotocol/server-memory
```

**Casos de uso:**
- Lembrar formato preferido para prescrições
- Manter histórico de alterações importantes
- Armazenar decisões sobre estrutura do site

---

### 5. **PostgreSQL MCP Server** (Opcional)

**Quando usar:**
- Se você decidir adicionar um banco de dados para gerenciar medicamentos
- Para criar sistema de busca avançado
- Para estatísticas de uso do site

**Como instalar:**
```bash
npm install -g @modelcontextprotocol/server-postgres
```

---

## Configuração Recomendada

### Arquivo de Configuração MCP

Crie um arquivo `.mcp-config.json` na raiz do repositório:

**Nota:** Para obter o caminho correto do seu repositório, execute `pwd` no terminal dentro da pasta do repositório.

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "seu_token_aqui"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/caminho/para/seu/repositorio"
      ]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "sua_chave_api"
      }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

---

## Prioridades de Instalação

### 🚀 **Essenciais (Instale primeiro):**
1. **GitHub MCP Server** - Para gerenciar o repositório
2. **Filesystem MCP Server** - Para editar documentos médicos

### 📈 **Muito Úteis (Instale em seguida):**
3. **Web Search MCP** - Para verificar informações médicas
4. **Memory MCP Server** - Para manter contexto

### 🔧 **Opcionais (Se necessário):**
5. **PostgreSQL MCP** - Apenas se adicionar banco de dados

---

## Benefícios para seu Site Médico

### 1. **Atualização de Conteúdo Médico**
- Verificar rapidamente se protocolos estão atualizados
- Buscar novas diretrizes do SUS/SES-DF
- Validar dosagens de medicamentos

### 2. **Gerenciamento Eficiente**
- Editar múltiplos arquivos de prescrições simultaneamente
- Manter consistência em todas as calculadoras
- Automatizar tarefas repetitivas

### 3. **Controle de Qualidade**
- Revisar mudanças antes de publicar
- Verificar links quebrados
- Validar formatação de markdown

### 4. **Colaboração**
- Facilitar contribuições de outros profissionais
- Documentar mudanças importantes
- Gerenciar feedback através de issues

---

## Exemplos de Uso

### Exemplo 1: Atualizar Protocolo de Medicamento
```
Usuário: "Verifique se o protocolo de dipirona em prescricoes/minhas_prescricoes.html 
está atualizado com as diretrizes mais recentes"

MCP usado: Web Search + Filesystem
Resultado: Busca diretrizes atuais e compara com o conteúdo do site
```

### Exemplo 2: Criar Nova Calculadora
```
Usuário: "Crie uma nova calculadora para diluição de antibióticos baseada 
nas calculadoras existentes"

MCP usado: Filesystem + GitHub
Resultado: Cria arquivo, adiciona links, e faz commit
```

### Exemplo 3: Documentar Mudança
```
Usuário: "Liste todas as mudanças feitas nas prescrições este mês"

MCP usado: GitHub
Resultado: Lista commits, pull requests e issues relacionados
```

---

## Como Começar

### Passo 1: Instale Node.js
```bash
# Se ainda não tiver Node.js instalado
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Passo 2: Instale os MCPs Essenciais
```bash
npm install -g @modelcontextprotocol/server-github
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @modelcontextprotocol/server-brave-search
npm install -g @modelcontextprotocol/server-memory
```

### Passo 3: Configure as Variáveis de Ambiente
```bash
# Adicione ao seu ~/.bashrc ou ~/.zshrc
export GITHUB_TOKEN="seu_token_github"
export BRAVE_API_KEY="sua_chave_brave" # Opcional
```

### Passo 4: Teste a Instalação
```bash
# Verifique se os MCPs estão instalados
npx @modelcontextprotocol/server-github --version
npx @modelcontextprotocol/server-filesystem --version
```

---

## Recursos Adicionais

### Documentação Oficial
- [MCP Documentation](https://modelcontextprotocol.io/)
- [GitHub MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

### Tutoriais
- [Getting Started with MCP](https://modelcontextprotocol.io/quickstart)
- [Building Custom MCPs](https://modelcontextprotocol.io/docs/building-servers)

### Comunidade
- [MCP Discord](https://discord.gg/mcp)
- [GitHub Discussions](https://github.com/modelcontextprotocol/discussions)

---

## Suporte Específico para Conteúdo Médico

### Considerações Importantes
⚠️ **Atenção:** MCPs são ferramentas de produtividade. Para informações médicas:
- Sempre valide com fontes oficiais (ANVISA, MS, SES-DF)
- Consulte protocolos institucionais atualizados
- Revise manualmente qualquer mudança em dosagens ou protocolos
- Mantenha referências bibliográficas atualizadas

### Fontes Confiáveis para Validação
- ANVISA (Agência Nacional de Vigilância Sanitária)
- Ministério da Saúde
- SES-DF (Secretaria de Estado de Saúde do Distrito Federal)
- UpToDate / DynaMed (bases de dados médicas)
- Protocolos institucionais locais

---

## Perguntas Frequentes

### Q: Os MCPs têm custo?
**R:** A maioria dos MCPs básicos é gratuita. Alguns serviços (como Brave Search API) podem ter planos pagos para uso intensivo.

### Q: MCPs funcionam offline?
**R:** Filesystem e Memory funcionam offline. GitHub e Web Search precisam de internet.

### Q: Como desinstalar um MCP?
**R:** `npm uninstall -g @modelcontextprotocol/server-nome`

### Q: Posso criar meu próprio MCP?
**R:** Sim! Veja a documentação em [modelcontextprotocol.io](https://modelcontextprotocol.io/docs/building-servers)

---

## Conclusão

Para este repositório de documentação médica, recomendo **fortemente** começar com:

1. ✅ **GitHub MCP Server** - Gerenciamento do repositório
2. ✅ **Filesystem MCP Server** - Edição de documentos
3. ✅ **Web Search MCP** - Validação de informações

Estes três MCPs irão **significativamente** melhorar sua produtividade ao manter e atualizar o site.

---

**Criado em:** 2025-10-31  
**Autor:** Assistente AI  
**Versão:** 1.0
