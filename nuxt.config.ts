// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt', '@nuxtjs/fontaine', '@nuxt/eslint'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  plugins: [],
  css: ['~/assets/css/tailwind.css'],
});
