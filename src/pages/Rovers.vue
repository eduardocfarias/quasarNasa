<template>
<q-page padding>
  <div class="row">
    <q-select
      outlined
      label="Rovers"
      option-label="rovers"
      v-model="rovers"
      :options="optionsRover"
      class="col-12"
      @input="getManifest"
    >
      <template v-slot:prepend>
        <q-icon name="electric_rickshaw" />
      </template>
    </q-select>
  </div>
  <div class="row" v-if="optionsSol.length > 0" >
    <q-select
    outlined
    v-model="model"
    :options="optionsSol"
    map-options
    option-label="sol"
    label="Sol"
    class="col-12"
    @input="setSolConfigurations"
  >
    <template v-slot:prepend>
      <q-icon name="brightness_high" />
    </template>
    </q-select>
  </div>
   <div class="row" v-if="photoList.length > 0" >
    <q-select
      outlined
      label="Cameras"
      v-model="cameras"
      :options="cameraList2"
      class="col-12"
      @input="setSolConfigurations"
    >
      <template v-slot:prepend>
        <q-icon name="camera" />
      </template>
    </q-select>
  </div>
  <div v-if="model != null">
    Data da Terra: {{model.earth_date}}
  </div>
  <div class="row q-mt-sm">
    <q-table
      grid
      :data="photoList"
      :columns="columns"
      row-key="id"
      hide-header
      :pagination.sync="pagination"
      hide-pagination
    >
      <template v-slot:item="props">
        <div
          class="col-xs-12 col-md-3 q-pa-sm"
          >
          <q-card class="bg-primary text-white">
            <q-img
              :src="props.row.img_src"
              :radio="4/3"
            >
              <template v-slot:loading>
                <q-skeleton dark height="200px" class="full-width full-height"/>
              </template>
            </q-img>
            <q-card-section class="q-pt-">
              <q-separator color="negative" />
              <div class="tex-subtitle2">
                <q-icon name="brightness_high" /> Sol: {{props.row.sol}}
              </div>
              <div class="tex-subtitle2">
                <q-icon name="electric_rickshaw" />Rover: {{props.row.rover.name}}
              </div>
              <div class="tex-subtitle2">
                <q-icon name="electric_rickshaw" />Camera: {{props.row.camera.full_name}}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
  <div class="row justify-center">
    <q-pagination
      v-if="photoList.length > 0"
      v-model="pagination.page"
      color="black"
      :max="pagesNumber"
      :max-pages="6"
      :boundary-numbers="false"
      @input="getPhotos"
    />
  </div>
</q-page>
</template>

<script>
export default {
  name: 'PagePhotos',
  data () {
    return {
      model: '',
      rovers: '',
      cameras: null,
      manifest: {},
      optionsSol: [],
      optionsRover: ['Curiosity', 'Opportunity', 'Spirit'],
      photoList: [],
      cameraList: [],
      cameraList2: [],
      solSelected: null,
      roverSelected: null,
      cameraSelected: null,
      columns: [
        {
          name: 'id',
          field: 'id'
        }
      ],
      pagination: {
        sortBy: 'desc',
        rowsPerPage: 25,
        page: 1,
        rowsNumber: 300
      }
    }
  },
  computed: {
    pagesNumber () {
      return Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
    }
  },
  mounted () {
    // this.getManifest()
  },
  methods: {
    async getManifest () {
      try {
        this.cameras = null
        this.model = null
        const { data } = await this.$axios.get(`manifests/${this.rovers}`)
        console.log(data)
        this.manifest = data.photo_manifest
        this.optionsSol = data.photo_manifest.photos.reverse()
      } catch (error) {
        console.error(error)
      }
    },
    async getPhotos () {
      this.photoList = []
      try {
        const { data } = await this.$axios.get(this.cameras === null ? `rovers/${this.rovers}/photos?sol=${this.solSelected}&page=${this.pagination.page}` : `rovers/${this.rovers}/photos?sol=${this.model.sol}&page=${this.pagination.page}&camera=${this.cameras}`)
        this.photoList = data.photos
        if (this.cameras === null) {
          this.getPhotosFilterCam()
        }
      } catch (error) {
        console.error(error)
      }
    },
    getPhotosFilterCam () {
      this.cameraList2 = []
      this.cameraList = []
      for (let i = 0; i < this.photoList.length; i++) {
        this.cameraList.push(this.photoList[i].camera.name)
      }
      this.cameraList2 = this.cameraList.filter((este, i) => this.cameraList.indexOf(este) === i)
      console.log(this.cameraList2)
    },
    setSolConfigurations (val) {
      this.solSelected = val.sol
      this.cameraSelected = this.cameras
      this.pagination.page = 1
      this.pagination.rowsNumber = val.total_photos
      this.getPhotos()
    }
  }
}
</script>
