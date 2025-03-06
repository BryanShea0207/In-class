always use ref instead of reactive

with a ref you will have to use .value unless it is in a template then the compiler will usually handle it

a ref must be created inside of a setup function

"vue revolves around the ref"

[[vueuse.org]]

@vueuse/core

a collection of functions and tags for use in Vue

### Routing

meta frameworks are often the way one would interact with vite & vue
knuxt and next are popular meta frameworks

looking up "File based routing" will lead to the github page for unplugin-vue-router

benefits of using unplugin router:
creates index.ts at build time

[[https://uvr.esm.is/introduction.html]]
steps:

1. import unplugin-vue-router
2. update vite.config.ts
3. update tsconfig.app.json
4. update env.d.ts
5. rename views to pages

avoid renaming a directory then editing sub files
