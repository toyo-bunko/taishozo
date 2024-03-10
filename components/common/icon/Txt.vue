<template>
  <img :width="width" :height="height" :src="`${baseUrl}/img/txt.png`" />
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  baseUrl = process.env.BASE_URL

  @Prop({ default: 32 })
  width!: number

  @Prop({ default: 32 })
  height!: number
}
</script>
