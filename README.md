# SP Crud Project

Bu şablon, Vue 3 ve Vite ile geliştirmeye başlamanıza yardımcı olur.

## Önerilen IDE Kurulumu

[VS Code](https://code.visualstudio.com/) + [Vue (Resmi)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (ve Vetur'u devre dışı bırakın).

## Önerilen Tarayıcı Kurulumu

- Chromium tabanlı tarayıcılar (Chrome, Edge, Brave vb.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Chrome DevTools'ta Özel Nesne Biçimlendiriciyi Açın](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Firefox DevTools'ta Özel Nesne Biçimlendiriciyi Açın](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## TS İçin `.vue` Desteği

TypeScript varsayılan olarak `.vue` importlarının tip bilgisini işleyemez; bu yüzden tip denetimi için `tsc` yerine `vue-tsc` kullanırız. Editörlerde TypeScript hizmetinin `.vue` tiplerini tanıması için [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) gerekir.

## Yapılandırmayı Özelleştirme

Bkz. [Vite Yapılandırma Referansı](https://vite.dev/config/).

## Proje Kurulumu

```sh
pnpm install
```

### Geliştirme için Derleme ve Sıcak Yenileme

```sh
pnpm dev
```

### Üretim İçin Tip Kontrolü, Derleme ve Küçültme

```sh
pnpm build
```

### [ESLint](https://eslint.org/) ile Lint

```sh
pnpm lint
```
