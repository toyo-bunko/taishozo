<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <a
        v-bind="attrs"
        :href="$utils.formatArrayValue(convertedUrl)"
        target="_blank"
        v-on="on"
      >
        <img
          :width="width"
          :height="height"
          class="ma-1"
          :src="baseUrl + '/img/iiif-logo.webp'"
        />
      </a>
    </template>
    <span v-html="$utils.formatArrayValue(label).replace('\n', '<br/>')"></span>
  </v-tooltip>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  baseUrl = process.env.BASE_URL

  @Prop({ required: true })
  url!: string

  @Prop({ required: true })
  label!: string

  @Prop({ default: 30 })
  width!: number

  @Prop({ default: 30 })
  height!: number

  urenja: any = process.env['u-renja']

  get convertedUrl() {
    return this.$utils
      .formatArrayValue(this.url)
      .split('https://static.toyobunko-lab.jp/u-renja')
      .join(this.urenja)
  }
}
</script>
