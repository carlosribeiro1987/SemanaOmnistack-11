# Anotações Mobile

## Criando o projeto React Native

- Instalar o expo **globalmente**: **`npm install -g expo-cli`**.
- Criar o projeto: **`expo init [nome do projeto]`** (Escolher o template `blank`).

## Executando o projeto

### No Celular

- Executar **`npm start`**.
- Instalar o aplicativo **Expo** no celular.
- Abrir **localhost:19002**
- Scanear o QRCode.

### No emulador

- Executar **`npm start`**.
- Instalar o aplicativo **Expo** no emulador. _(Será necessário?)_
- Abrir **localhost:19002**
- Clicar em _Run on iOS emulator_ ou _Run on Android device/emulator_

### No Expo Skack

- Abrir o [site do Expo Snack](snack.expo.io).
- Adicionar o projeto.
  > _Usar como última opção_

---

## Módulos e Ferramentas

#### [React Navigation](https://reactnavigation.org/docs/getting-started/)

- **Instalar React Navigation** - :
  > **`npm install @react-navigation/native`**.
- **Instalar dependências**

  > **Projeto gerenciado pelo Expo** > **`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`**.

  > **Projeto React Nativo puro** > **`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`**.

##### Navegação

**Stack Navigation:**

> Instalação: **`npm install @react-navigation/stack`**.

##### Layout

**Expo Constants**

> Instalação **`expo install expo-constants`**.

##### Enviar E-mail

**Expo E-mail Composer**

> Instalação **`expo install expo-mail-composer`**.

**Internacionalização (intl)**

> Instalação: **`npm install intl`**.

> Importar no arquivo **`App.js`**:
>
> ```javascript
> import 'intl';
> import 'intl/locale-data/jasonp/pt-BR';
> ```
