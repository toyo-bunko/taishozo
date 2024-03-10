<template>
  <div>
    <a :href="satUrl" target="_blank">
      <CommonIconTxt :width="24" :height="24" />
    </a>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import CommonIconTxt from '~/components/common/icon/Txt.vue'

@Component({
  components: {
    CommonIconTxt,
  },
})
export default class KandoMokurokuSyozai extends Vue {
  @Prop({ required: true })
  satUrl!: any
}
</script>
