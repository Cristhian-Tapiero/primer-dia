import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub, faInstagram, faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
