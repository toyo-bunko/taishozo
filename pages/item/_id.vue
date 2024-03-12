<template>
  <Content :items="bh">
    <v-container v-if="apiResult">
      <h2 class="text-center my-5">
        {{ $t('詳細情報') }}
      </h2>
      <PagesItemKihon :api-result="apiResult"></PagesItemKihon>

      <PagesItemText :api-result="apiResult" class="my-5"></PagesItemText>

      <v-card flat>
        <v-tabs v-model="tab" background-color="primary" dark class="mb-4">
          <v-tab>
            {{ '勘同目録/脚注' }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <PagesItemNote :api-result="apiResult"></PagesItemNote>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

      <v-sheet class="py-10 px-3 text-center">
        <v-btn depressed icon :href="uri" target="_blank">
          <v-tooltip bottom>
            <template #activator="{ on }">
              <img
                height="24px"
                src="https://json-ld.org/images/json-ld-logo.png"
                v-on="on"
              />
            </template>
            <span>{{ $t('JSON-LD') }}</span>
          </v-tooltip>
        </v-btn>

        <ResultOption
          class="ma-1"
          :item="{
            label: title,
            url: url,
          }"
        />
      </v-sheet>
    </v-container>
  </Content>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Content from '~/components/layouts/Content.vue'
import ResultOption from '~/components/display/ResultOption.vue'
import PagesItemKandoMokurokuSyozai from '~/components/pages/item/KandoMokurokuSyozai.vue'
import PagesItemSat from '~/components/pages/item/Sat.vue'
import PagesSearchKeiten from '~/components/pages/search/Keiten.vue'
import PagesItemKihon from '~/components/pages/item/Kihon.vue'
import PagesItemText from '~/components/pages/item/Text.vue'
import PagesItemNote from '~/components/pages/item/Note.vue'

@Component({
  components: {
    ResultOption,
    Content,
    PagesItemKandoMokurokuSyozai,
    PagesItemSat,
    PagesSearchKeiten,
    PagesItemKihon,
    PagesItemText,
    PagesItemNote,
  },
})
export default class Search extends Vue {
  baseUrl = process.env.BASE_URL

  tab: number = 0

  head() {
    return {
      title: this.$t('詳細情報') + ': ' + this.title,
    }
  }

  apiResult: any = null

  urenja: any = process.env['u-renja']

  uri: string = ''
  url: string = ''
  title: string = ''
  id: string = ''

  async asyncData(context: any) {
    const itemId = `${context.params.id}`
    const url = process.env.BASE_URL + '/item/' + itemId

    const uri = process.env.BASE_URL + '/data/' + itemId + '.json'

    const apiResult_ = await import(`~/static/data/${itemId}.json`)
    const apiResult = apiResult_.default

    return {
      id: itemId,
      apiResult,
      uri,
      url,
      title: itemId,
    }
  }

  get bh(): any[] {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('search'),
        disabled: false,
        to: this.localePath({ name: 'search' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
