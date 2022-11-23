// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  nitro: { preset: "netlify" },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  typescript: {
    typeCheck: true,
  },
  // https://v3.nuxtjs.org/guide/going-further/runtime-config#environment-variables
  // runtimeConfig: {
  //   apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
  //   public: {
  //     apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
  //   },
  // },
  css: ["@/assets/scss/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables/_index.scss" as *;',
        },
      },
    },
  },
});
