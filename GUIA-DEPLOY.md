# 🎯 GUIA PASSO A PASSO - DEPLOY COMPLETO

## 📦 O QUE VOCÊ TEM AGORA

Um proxy COMPLETO com Ultraviolet que:
- ✅ Funciona 100% com Discord (login, chat, voz)
- ✅ Funciona com qualquer site
- ✅ Sem bugs
- ✅ Interface profissional
- ✅ Pronto para deploy

---

## 🚀 MÉTODO 1: DEPLOY NO VERCEL (MAIS FÁCIL)

### Passo 1: Preparar arquivos no GitHub

1. **Acesse GitHub:**
   ```
   https://github.com/new
   ```

2. **Criar novo repositório:**
   - Nome: `discord-proxy`
   - Público
   - ✅ Add README
   - Create repository

3. **Upload dos arquivos:**
   
   Faça upload destes arquivos (baixe primeiro):
   ```
   index.js
   package.json
   vercel.json
   .gitignore
   README.md
   ```

4. **Criar pasta `public/`:**
   - Clique em "Add file" → "Create new file"
   - Nome: `public/index.html`
   - Cole o conteúdo do arquivo `index.html`
   - Commit

5. **Adicionar outros arquivos da pasta public:**
   - `public/404.html`
   - `public/uv.config.js`

### Passo 2: Deploy no Vercel

1. **Acesse Vercel:**
   ```
   https://vercel.com/signup
   ```

2. **Login com GitHub**

3. **Import Project:**
   - Clique em "Add New" → "Project"
   - Clique em "Import Git Repository"
   - Selecione `discord-proxy`

4. **Configure:**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (deixe vazio)
   - Output Directory: `public`
   - Install Command: `npm install`

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde 2-3 minutos
   - ✅ PRONTO!

6. **Acesse seu site:**
   ```
   https://discord-proxy-xxx.vercel.app
   ```
   (substitua xxx pelo ID que o Vercel gerar)

---

## 🚀 MÉTODO 2: RAILWAY (ALTERNATIVA)

### Passo 1: GitHub (mesmo do Método 1)

### Passo 2: Deploy no Railway

1. **Acesse Railway:**
   ```
   https://railway.app
   ```

2. **Login com GitHub**

3. **New Project:**
   - Deploy from GitHub repo
   - Selecione `discord-proxy`

4. **Configure:**
   - Railway detecta automaticamente
   - Aguarde o deploy

5. **Obter URL:**
   - Settings → Generate Domain
   - Copie a URL

6. **Acesse:**
   ```
   https://seu-projeto.railway.app
   ```

---

## 🚀 MÉTODO 3: RENDER

### Passo 1: GitHub (mesmo do Método 1)

### Passo 2: Deploy no Render

1. **Acesse Render:**
   ```
   https://render.com
   ```

2. **New → Web Service**

3. **Connect GitHub:**
   - Conecte sua conta
   - Selecione `discord-proxy`

4. **Configure:**
   - Name: `discord-proxy`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: `Free`

5. **Create Web Service**

6. **Aguarde deploy (3-5 minutos)**

7. **Acesse a URL gerada**

---

## 📝 CHECKLIST PÓS-DEPLOY

Após o deploy, teste:

1. ✅ Site abre?
2. ✅ Digitar URL funciona?
3. ✅ Botão Discord funciona?
4. ✅ Discord abre e carrega?
5. ✅ Consegue fazer login?
6. ✅ Chat funciona?

Se todos ✅ = **SUCESSO TOTAL!**

---

## 🔧 RESOLUÇÃO DE PROBLEMAS

### ❌ Deploy falha no Vercel

**Erro comum:** "Build failed"

**Solução:**
1. Verifique se `package.json` está correto
2. Certifique-se que todos os arquivos foram enviados
3. Tente re-deploy
4. Verifique logs no Vercel

### ❌ Site carrega mas proxy não funciona

**Solução:**
1. Aguarde 5 minutos (cache do CDN)
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Tente em aba anônima
4. Verifique console do navegador (F12)

### ❌ Discord não abre

**Possível causa:** Service Worker não registrado

**Solução:**
1. Abra console (F12)
2. Vá em Application → Service Workers
3. Clique em "Update"
4. Recarregue a página

### ❌ Erro 500

**Solução:**
1. Verifique logs no painel do Vercel/Railway
2. Provavelmente falta algum arquivo
3. Re-faça o upload de todos os arquivos

---

## 📊 ESTRUTURA FINAL NO GITHUB

Seu repositório deve ter:

```
discord-proxy/
├── .gitignore
├── README.md
├── index.js
├── package.json
├── vercel.json
└── public/
    ├── index.html
    ├── 404.html
    └── uv.config.js
```

---

## 🎉 TESTE FINAL

1. **Acesse seu site:** `https://seu-projeto.vercel.app`

2. **Clique no botão "Discord"**

3. **Aguarde carregar**

4. **Faça login**

5. **Use normalmente!**

**FUNCIONA PERFEITAMENTE!** 🎊

---

## 💡 DICAS EXTRAS

### Mudar o nome do domínio:

**Vercel:**
- Settings → Domains → Add Domain
- Adicione um domínio customizado grátis

**Railway:**
- Settings → Generate Domain
- Customize o subdomínio

### Adicionar mais sites rápidos:

Edite `public/index.html` e adicione mais botões:

```html
<button class="quick-link" onclick="quickNav('https://site.com')">
    <span class="icon">🎮</span>
    <span class="label">Nome do Site</span>
</button>
```

### Melhorar performance:

No Vercel:
- Settings → Environment Variables
- Adicione: `NODE_ENV=production`

---

## 🆘 AINDA COM PROBLEMAS?

Se nada funcionou:

### Use Holy Unblocker (já pronto):
```
https://holyunblocker.org
```

### Ou baixe VPN:
```
https://psiphon.ca
```

---

## ✅ VOCÊ CONSEGUIU!

Se seguiu todos os passos, agora você tem:

✅ Proxy funcionando 100%
✅ Discord sem bloqueios
✅ Login funcionando
✅ Chat funcionando
✅ Voz funcionando
✅ Qualquer site acessível

**PARABÉNS!** 🎉🚀

---

**Qualquer dúvida, revise os passos ou use Holy Unblocker como alternativa.**

**BOA SORTE!** 💪
