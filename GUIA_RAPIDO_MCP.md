# Guia Rápido: Instalando MCPs

## 🚀 Instalação Rápida (5 minutos)

### Pré-requisitos
```bash
# Instale Node.js (se ainda não tiver)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Instale os MCPs Recomendados
```bash
# 1. GitHub MCP (Gerenciar repositório)
npm install -g @modelcontextprotocol/server-github

# 2. Filesystem MCP (Editar arquivos)
npm install -g @modelcontextprotocol/server-filesystem

# 3. Brave Search MCP (Buscar informações)
npm install -g @modelcontextprotocol/server-brave-search

# 4. Memory MCP (Manter contexto)
npm install -g @modelcontextprotocol/server-memory
```

### Configure o GitHub Token
```bash
# 1. Vá para: https://github.com/settings/tokens
# 2. Crie um novo token com permissões: repo, workflow
# 3. Adicione ao seu ambiente:
export GITHUB_TOKEN="seu_token_aqui"
```

### (Opcional) Configure Brave Search API
```bash
# 1. Vá para: https://brave.com/search/api/
# 2. Crie uma conta e obtenha a API key
# 3. Adicione ao seu ambiente:
export BRAVE_API_KEY="sua_chave_aqui"
```

---

## ✅ Teste a Instalação

```bash
# Verifique se os MCPs foram instalados corretamente
npx @modelcontextprotocol/server-github --version
npx @modelcontextprotocol/server-filesystem --version
npx @modelcontextprotocol/server-brave-search --version
npx @modelcontextprotocol/server-memory --version
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Listar Issues do GitHub
```
"Liste todas as issues abertas neste repositório"
```

### Exemplo 2: Buscar Arquivo
```
"Encontre o arquivo com as prescrições de antibióticos"
```

### Exemplo 3: Verificar Informação Médica
```
"Busque na web as diretrizes atuais para dosagem de dipirona"
```

### Exemplo 4: Editar Múltiplos Arquivos
```
"Atualize o rodapé em todos os arquivos markdown da pasta 'calculadoras'"
```

---

## 📖 Documentação Completa

Para mais detalhes, consulte o arquivo `RECOMENDACAO_MCP.md` neste repositório.

---

## 🆘 Problemas Comuns

### "command not found: npx"
**Solução:** Instale o Node.js seguindo os passos em "Pré-requisitos"

### "Permission denied"
**Solução:** Use `sudo npm install -g` ou configure o npm global sem sudo:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### MCPs não funcionam
**Solução:** Verifique se as variáveis de ambiente estão configuradas:
```bash
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY
```

---

## 📞 Suporte

- [Documentação MCP](https://modelcontextprotocol.io/)
- [GitHub Issues](https://github.com/modelcontextprotocol/servers/issues)
- [Discord da Comunidade](https://discord.gg/mcp)

---

**Última atualização:** 2025-10-31
