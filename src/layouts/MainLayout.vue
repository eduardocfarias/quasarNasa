<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          NASA photo
        </q-toolbar-title>

        <div>NASA photo v0.0.2</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Homse',
    caption: '',
    icon: 'home',
    route: 'home'
  },
  {
    title: 'Rovers',
    caption: 'Cada rover possui seu próprio conjunto de fotos armazenadas no banco de dados, que podem ser consultadas separadamente.',
    icon: 'photo_library',
    route: 'rovers'
  },
  {
    title: 'APOD',
    caption: 'O banco de imagem mais popular em todas as agências federais.',
    icon: 'photo_library',
    route: 'apod'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
