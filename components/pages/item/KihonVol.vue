<template>
  <span>
    {{ $utils.format(item['勘同目録：巻数']) }}
    <template v-if="$utils.format(note)">
      （{{ $utils.format(note) }}）
    </template>
  </span>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class KandoMokurokuSyozai extends Vue {
  @Prop({ required: true })
  item!: any

  get note() {
    return this.item['勘同目録：巻数注記']
  }
}
</script>
