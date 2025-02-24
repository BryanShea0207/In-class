# Vite

using vue as framework 

in todays world of building web apps something is needed to manage and combine all the different tools together

npm keeps track of what tools are being used but something else needs to decide how they are used

if the work needed to be recompiled every change made it would be very hard to create things at a good pace

Every major platform has some sort of coordinator or web technology there are a few that can be used

webpack used to be a common one

around 3 years ago Vue was made

to make a vue project in terminal type
    pnpm create vue@latest
    settings for this class
    typescript yes
    jsx yes
    router yes
    pinia no (only for large projects)
    vitest no
    end to end no
    eslint yes
    prettier yes

make sure the extensions for prettier and ESLint are installed in VScode

### Files made by command
.vscode
    extensions.json
    settings.json
        these are json files that lists the dependencies
public
    favicon.ico
        This is the folder where you can put files you want to upload with the rest of the project but that wont be managed by Viet
src
    assets
        similar to public but is managed by Viet

        base.css
        logo.svg
        main.css    
    components
        icons
            IconCommunity.vue
            IconDoc.vue
            IconEco.vue
            IconSup.vue
            IconTool.vue
        HelloWorld.vue
        TheWelcome.vue
        WelcomeItem.vue
    router
        index.ts
    views
        AboutView.vue
        HomeView.vue
    App.vue
    main.ts
        main file 
.editorconfig
    ?
.gitattributes
    basic git file
.gitignore (deleted)
.prettierrc.json 
    rules for prettier
env.d.ts
    talk about later
eslint.config.ts
    rules for ESLint
index.html
    root of application isn't touch very much TS will be used to create the page
package.json
    holds dependencies that are only going to be used for the client
README.md
tsconfig.app.json
tsconfig.json
    calls the other two tsconfigs
tsconfig.node.json
vite.config.ts
    configuration for Vite

after creating the vue folder cd into the project then run pnpm install then pnpm dev

### Breakdown of main.ts

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

two types of imports
direct import on line 91 getting the css

from import 
93,94,95 gets specific modules from files 

some notes on exports:
    when you export a module in JS you have two options either export as a default or give the export a name
    given a specific name the {} can be used to rename the method if needed 

other import type would be "import * as vue from 'vue' " then you would have to call methods as children of the app 
    ex. vue.createApp() 

ctrl + space to force code completion 
