<template>
  <span v-html="convertedlabel" />
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  baseUrl = process.env.BASE_URL

  @Prop({ required: true })
  label!: string

  @Prop()
  highlight!: any

  get convertedlabel() {
    const labelStr = this.$utils.formatArrayValue([this.label])
    if (this.highlight) {
      return this.highlight(labelStr)
    } else {
      return labelStr
    }
  }
}
</script>
