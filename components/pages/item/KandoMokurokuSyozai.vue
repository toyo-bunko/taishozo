<template>
  <a :href="miradorUrl" target="_blank">
    {{ label }}
    <v-icon color="primary" small>mdi-exit-to-app</v-icon>
  </a>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  baseUrl = process.env.BASE_URL

  @Prop({ required: true })
  url!: string

  @Prop({ required: true })
  pos!: string

  @Prop({ required: true })
  pageStart!: string

  @Prop({ required: true })
  pageStartDan!: string

  @Prop({ required: true })
  pageEnd!: string

  @Prop({ required: true })
  pageEndDan!: string

  get miradorUrl() {
    return this.baseUrl + '/mirador?manifest=' + this.url + '&pos=' + this.pos
  }

  get label() {
    const labelStart = this.pageStart + this.pageStartDan
    const labelEnd = this.pageEnd + this.pageEndDan

    if (labelStart === labelEnd) {
      return labelStart
    }

    return labelStart + '〜' + labelEnd
  }
}
</script>
