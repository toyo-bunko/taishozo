<template>
  <span style="cursor: pointer" @click="onClick">
    <template v-if="isActive">▼</template>
    <template v-else>▲</template>
  </span>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  @Prop({ default: false })
  isActive!: boolean

  onClick() {
    // 'toggle-active' という名前のイベントを発行
    this.$emit('toggle-active')
  }
}
</script>
