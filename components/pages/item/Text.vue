<template>
  <table border="1" style="border-collapse: collapse" width="100%" class="my-2">
    <tr>
      <th :colspan="colsKihon.length">
        <h2>{{ 'テキスト情報' }}</h2>
      </th>
    </tr>

    <tr>
      <th colspan="4">
        <h3>{{ '勘同目録' }}</h3>
      </th>
      <th colspan="4">
        <h3>{{ '脚注' }}</h3>
      </th>
    </tr>
    <tr>
      <th width="10%">{{ '底本/校本' }}</th>
      <th width="10%">{{ '❹原本及校本' }}</th>
      <th width="12%">{{ '❼備考（書誌情報）' }}</th>
      <th width="12%">{{ '❼備考（その他）' }}</th>
      <th width="10%">{{ '底本/校本' }}</th>
      <th width="10%">{{ '新略号（1926.8-）' }}</th>
      <th width="12%">{{ 'テキスト' }}</th>
      <th width="12%">{{ '備考' }}</th>
    </tr>

    <tr class="text-center">
      <td>
        {{ $utils.format(apiResult['ex:勘同目録'][0]['ex:底本/校本']) }}
      </td>
      <td class="pl-1 text-left">
        {{ $utils.format(apiResult['ex:勘同目録'][0]['ex:❹']) }}
      </td>
      <td class="pl-1 text-left">
        {{ $utils.format(apiResult['ex:勘同目録'][0]['ex:❼']) }}
      </td>
      <td class="pl-1 text-left">
        {{ $utils.format(apiResult['ex:勘同目録'][0]['ex:❼備考']) }}
      </td>
      <td>
        {{ $utils.format(apiResult['ex:脚注'][0]['ex:底本/校本']) }}
      </td>
      <td class="pl-1 text-left">
        {{ $utils.format(apiResult['ex:脚注'][0]['ex:新添']) }}
      </td>
      <td class="pl-1 text-left">
        <template
          v-if="apiResult['ex:酉目'] && apiResult['ex:酉目'].length > 0"
        >
          <a :href="apiResult['ex:酉目'][0]['ex:url'][0]" target="_blank"
            >{{ $utils.format(apiResult['ex:脚注'][0]['ex:テキスト']) }}
            <v-icon color="primary" small>mdi-exit-to-app</v-icon></a
          >
        </template>
        <template v-else>
          {{ $utils.format(apiResult['ex:脚注'][0]['ex:テキスト']) }}
        </template>

        <template v-if="apiResult['ex:酉蓮社本IIIコレクション']">
          <!-- <v-chip color="error">9/11 [A]酉蓮社本のURLは今後修正</v-chip> -->
          <v-tooltip
            v-for="(obj, index2) in apiResult['ex:酉蓮社本IIIコレクション']"
            :key="index2"
            bottom
          >
            <template #activator="{ on, attrs }">
              <!-- {{ obj['ex:url'] }} -->
              <a
                v-bind="attrs"
                :href="`${obj['ex:url']
                  .split('https://static.toyobunko-lab.jp/u-renja')
                  .join(urenja)}`"
                target="_blank"
                v-on="on"
              >
                <img
                  width="30px"
                  class="mr-1"
                  :src="baseUrl + '/img/iiif-logo.webp'"
                />
              </a>
            </template>
            <span>{{ $utils.format(obj['ex:経典名']) }}</span>
          </v-tooltip>
        </template>

        <template v-if="apiResult['ex:底本校本URL']">
          <v-tooltip
            v-for="(obj, index2) in apiResult['ex:底本校本URL']"
            :key="index2"
            bottom
          >
            <template #activator="{ on, attrs }">
              <!-- [0] -->
              <a
                v-bind="attrs"
                :href="obj['ex:画像URL']"
                target="_blank"
                v-on="on"
              >
                <img
                  width="30px"
                  class="mr-1"
                  :src="baseUrl + '/img/iiif-logo.webp'"
                />
              </a>
            </template>
            <span
              >{{ $utils.format(obj['ex:資料群名']) }}<br />{{
                $utils.format(obj['ex:經典名稱'])
              }}</span
            >
          </v-tooltip>
        </template>

        <!--

                <template v-if="apiResult.images">
                  <IIIFIcon
                    v-for="(item2, key2) in apiResult.images"
                    :key="key2"
                    :item="item2"
                  ></IIIFIcon>
                </template>

                -->
      </td>
      <td class="pl-1 text-left">
        {{ $utils.format(apiResult['ex:脚注'][0]['ex:備考']) }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import PagesItemSat from '~/components/pages/item/Sat.vue'
import PagesSearchKeiten from '~/components/pages/search/Keiten.vue'
import CommonIconShowHide from '~/components/common/icon/ShowHide.vue'

@Component({
  components: {
    PagesItemSat,
    PagesSearchKeiten,
    CommonIconShowHide,
  },
})
export default class KandoMokurokuSyozai extends Vue {
  baseUrl = process.env.BASE_URL

  colsKihon: string[] = [
    '経典番号',
    '枝番',
    '経典名',
    '収録巻次',
    '部門',
    '配本',
    '出版年月日',
    'SAT大蔵経DB',
  ]

  get kihon() {
    return this.apiResult.data.relationships[
      '基本情報 + SAT頭出し用 + 勘同目録IIIFコレクション'
    ].data
  }

  rowAdd: string[] = ['❸麗', '❸宋', '❸元', '❸明', '❸縮', '❸卍', '❸Nj']

  rowLast: string[] = ['規範碼', '高麗藏經號', '作訳者1', '作訳者2', '作訳者3']

  rowHide: string[] = [
    '❶名称〔日〕',
    '❶名称〔支〕',
    '❶名称〔梵〕',
    '❶名称〔巴〕',
    '❶名称〔西藏名〕',
    '❶名称：異名略名',
  ]

  isSyomei: boolean = false

  @Prop({ required: true })
  apiResult!: any
}
</script>
