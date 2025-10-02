# Server Actions - Busca de Rastreio

## Implementação Server-Side

A busca de rastreio agora é feita via Server Actions do Next.js, garantindo que:

- ✅ **Requisições não aparecem no Network do Chrome**
- ✅ **Execução no servidor (server-side)**
- ✅ **Maior segurança e privacidade**
- ✅ **Melhor performance**

## Arquivo: `tracking.js`

### Função: `searchTrackingAction(codigoRastreio)`

**Parâmetros:**

- `codigoRastreio` (string): Código de rastreamento a ser buscado

**Retorno:**

```javascript
{
  success: boolean,
  error: string | null,
  data: object | null
}
```

**Exemplo de uso:**

```javascript
const result = await searchTrackingAction("CR6DLPJ751");

if (result.success) {
  console.log("Dados encontrados:", result.data);
} else {
  console.error("Erro:", result.error);
}
```

## Fluxo de Execução

1. **Cliente** chama `searchTracking()` no hook
2. **Hook** chama `searchTrackingAction()` (Server Action)
3. **Servidor** executa a requisição para a API externa
4. **Servidor** retorna o resultado para o cliente
5. **Cliente** atualiza o estado com os dados recebidos

## Vantagens

- **Privacidade**: URL da API não fica exposta no cliente
- **Segurança**: Chaves de API podem ser mantidas no servidor
- **Performance**: Cache do Next.js pode ser utilizado
- **SEO**: Dados podem ser pré-renderizados se necessário
