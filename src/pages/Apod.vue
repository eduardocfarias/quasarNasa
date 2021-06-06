<template>
  <div class="q-pa-md">
    <div class="q-mb-sm">
      <q-badge color="teal">
        Model: {{ date }}
      </q-badge>
    </div>
    <q-btn icon="event" round color="primary">
      <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
        <q-date v-model="startDate" mask="YYYY-MM-DD">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
    <q-btn color="black" class="full-width" label="Pesquisar" @click="getApod" />
    <div class="q-pa-sm">
    <q-table
      grid
      :data="photoList"
      :columns="columns"
      row-key="id"
      hide-header
    >
    <template v-slot:item="props">
        <div
          class="col-xs-12 col-md-3 q-pa-sm"
          >
          <q-card class="bg-primary text-white">
            <q-img
              :src="props.row.thumbnail_url ? props.row.thumbnail_url : props.row.url "
              :radio="3/4"
            >
              <template v-slot:loading>
                <q-skeleton dark height="200px" width="200px" class="full-width full-height"/>
              </template>
            </q-img>
            <q-card-section class="q-pt-">
              <q-separator color="negative" />
              <div class="tex-subtitle2">
                {{props.row.title}}
              </div>
              <div class="tex-subtitle2">
               copyright: {{props.row.copyright}}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: '2021-06-05',
      startDate: '2021-06-05',
      rowsPerPage: 30,
      photoList: [],
      columns: [
        {
          name: 'id',
          field: 'id'
        }
      ]
    }
  },

  methods: {
    async getApod () {
      try {
        console.log(this.startDate)
        this.photoList = []
        const { data } = await this.$axios.get(`planetary/apod?api_key=TU6FE4MCPECh0DYgoLrervlGyavPM85fpUzyLfyH&start_date=2021-04-01&thumbs=true&end_date=${this.startDate}`)
        this.photoList = data
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    },
    updateProxy () {
      this.proxyDate = this.date
    },

    save () {
      this.date = this.proxyDate
    }
  }
}
</script>
