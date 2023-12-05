import PropsOne from './components/HelloWorld.vue';
import App from './App.vue'
import SlotsOne from './components/SlotsOne.vue'

const App = createApp(App);
app.component('props-one', PropsOne);
app.component('slot-one', SlotsOne);

createApp(App).mount('#app')
