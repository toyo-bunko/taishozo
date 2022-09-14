<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <a
        v-bind="attrs"
        :href="`${$utils
          .formatArrayValue(item2.url)
          .replace(
            'static.toyobunko-lab.jp/u-renja',
            'dev-urenja.netlify.app'
          )}`"
        target="_blank"
        v-on="on"
      >
        <img width="30px" class="mr-1" :src="baseUrl + '/img/iiif-logo.webp'" />
      </a>
    </template>
    <span
      v-html="$utils.formatArrayValue(item.label).replace('\n', '<br/>')"
    ></span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  @Prop({ required: true })
  item!: any
}
</script>
