<template>
  <div>
    <v-container class="my-5">
      <h2 class="my-5">{{ $t('dataset') }}</h2>

      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">
                {{ $t('name') }}
              </th>
              <th class="text-left">URL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in items" :key="key">
              <td>{{ item.label }}</td>
              <td>
                <a :href="item.value">{{ item.value }}</a>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Page extends Vue {
  head() {
    return {}
  }

  items: any[] = [
    {
      label: '酉蓮社本（IIIFコレクション）',
      value:
        'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/u-renja/iiif2/collection/top.json',
    },
    {
      label: '『大正新脩大蔵経勘同目録』（IIIFマニフェスト）',
      value:
        'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/taishozo/iiif/kandomokuroku/manifest.json',
    },
    /*
    {
      label: 'メタデータ一覧（Excel）',
      value:
        'https://view.officeapps.live.com/op/view.aspx?src=https://static.toyobunko-lab.jp/taishozo/metadata/data.xlsx',
    },
    {
      label: 'メタデータ一覧（JSON-LD）',
      value: 'https://static.toyobunko-lab.jp/taishozo/data.json',
    },
    */
  ]
}
</script>
