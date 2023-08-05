# Biblioteca "@coinsamba/real-digital-abis" :moneybag:

![GitHub](https://img.shields.io/github/license/coinsambacom/real-digital-abis)
![npm](https://img.shields.io/npm/v/@coinsambacom/real-digital-abis)

A biblioteca "@coinsamba/real-digital-abis" exporta as ABIs necessárias para utilizar os contratos do Real Digital desenvolvido pelo Banco Central do Brasil. :bank: :brazil:

## Como utilizar :rocket:

Para utilizar essa biblioteca em seu projeto, siga os passos abaixo:

### Instalação

Você pode instalar a biblioteca usando o gerenciador de pacotes npm:

```bash
npm install @coinsamba/real-digital-abis
```

### Importação

Depois de instalada, você pode importar os contratos do Real Digital em seu código:

```javascript
import { AddressDiscovery } from "@coinsamba/real-digital-abis";
import { KeyDictionary } from "@coinsamba/real-digital-abis";
import { RealDigital } from "@coinsamba/real-digital-abis";
import { RealDigitalDefaultAccount } from "@coinsamba/real-digital-abis";
import { RealDigitalEnableAccount } from "@coinsamba/real-digital-abis";
import { RealTokenizado } from "@coinsamba/real-digital-abis";
import { STR } from "@coinsamba/real-digital-abis";
import { SwapOneStep } from "@coinsamba/real-digital-abis";
import { SwapTwoSteps } from "@coinsamba/real-digital-abis";
```

Exemplo consultando o saldo de algum endereço:

```javascript
import { ethers } from "ethers";
import { RealDigital } from "@coinsamba/real-digital-abis";

async function main() {
  const providerUrl = "SUA_URL_DO_SEU_NODE";
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  const realDigitalAddress = "0xENDERECO_DO_REAL_DIGITAL";
  const realDigitalContract = new ethers.Contract(
    realDigitalAddress,
    RealDigital,
    provider
  );

  try {
    const userAddress = "0xENDERECO_DE_ALGUM_USUARIO";
    const balance = await realDigitalContract.balanceOf(userAddress);
    console.log(
      `O saldo do usuário ${userAddress} é: ${balance.toString()} BRL`
    );
  } catch (error) {
    console.error("Erro ao consultar o saldo:", error);
  }
}

main();
```

Agora você pode utilizar os contratos e funcionalidades do Real Digital em seu projeto! :tada:

## Licença

Esta biblioteca é distribuída sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](https://github.com/coinsambacom/real-digital-abis/blob/main/LICENSE). :scroll:

## Contribuições

Contribuições são bem-vindas! Se você encontrou algum problema, tem alguma sugestão ou deseja adicionar novas funcionalidades, sinta-se à vontade para abrir uma [issue](https://github.com/coinsambacom/real-digital-abis/issues) ou enviar um [pull request](https://github.com/coinsambacom/real-digital-abis/pulls). :octocat:

## Contrate-nos

Precisa de ajuda para desenvolver projetos de blockchain ou contratos inteligentes? Nossa equipe de especialistas está pronta para ajudar! Entre em contato conosco:

Email: [toledo@coinsamba.com](mailto:toledo@coinsamba.com)

Telegram: [@itxtoledo](https://t.me/itxtoledo)
