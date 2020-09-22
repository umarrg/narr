import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';
import vueGoogleChat from 'vue-google-charts';
import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);
Vue.use(vueGoogleChat);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    theme: {
        themes:{
            light: {
                background: colors.green.accent4
            },
            dark: {
                background: colors.blue
            }
        }
    }

});
