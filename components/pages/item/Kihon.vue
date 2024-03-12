<template>
  <table border="1" style="border-collapse: collapse" width="100%" class="my-2">
    <tr>
      <th :colspan="colsKihon.length">
        <h2>{{ '基本情報' }}</h2>
      </th>
    </tr>
    <tr>
      <th v-for="(col, i) in colsKihon" :key="`kihon-${i}`">{{ col }}</th>
    </tr>
    <tr class="text-center">
      <td>
        {{
          $utils.format(
            apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典番号']
          )
        }}
      </td>
      <td>
        {{
          $utils.format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:枝番'])
        }}
      </td>
      <td class="pl-1 text-left">
        <PagesSearchKeiten
          :label="apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典名']"
        />
      </td>
      <td>
        {{
          $utils.format(
            apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:収録巻次']
          )
        }}
      </td>
      <td class="pl-1 text-left">
        {{
          $utils.format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:部門'])
        }}
      </td>
      <td>
        {{
          $utils.format(
            apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:配本']
          ) /*.join(', ')*/
        }}
      </td>
      <td>
        {{
          $utils.format(
            apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:出版年月日']
          ) /*.join(
                ', '
              )*/
        }}
      </td>

      <td>
        <PagesItemSat
          :sat-url="apiResult['ex:sat'][0]['ex:url']"
        ></PagesItemSat>
      </td>
    </tr>

    <tr>
      <th colspan="4">{{ '経典別名' }}</th>
      <th>{{ '巻数' }}</th>
      <th colspan="3">{{ '訳著者' }}</th>
    </tr>
    <tr class="text-center">
      <td colspan="4">
        {{
          $utils.format(
            apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典別名']
          )
        }}
      </td>
      <td>
        {{
          $utils.format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:巻数'])
        }}
      </td>
      <td colspan="3">
        {{
          $utils.format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:訳著者'])
        }}
      </td>
    </tr>

    <tr>
      <th :colspan="colsKihon.length">
        <h3>{{ '勘同目録' }}</h3>
      </th>
    </tr>
    <tr>
      <th colspan="4">
        {{ '書名' }}
        <CommonIconShowHide
          :is-active="isSyomei"
          @toggle-active="isSyomei = !isSyomei"
        />
      </th>
      <th>{{ '巻数' }}</th>
      <th colspan="3">{{ '❷著訳者名、著訳年代' }}</th>
    </tr>

    <tr class="text-center">
      <td colspan="4">
        {{ $utils.format(kihon['勘同目録：書名']) }}
      </td>
      <td>
        <PagesItemKihonVol :item="kihon"></PagesItemKihonVol>
      </td>
      <td colspan="3">
        {{ $utils.format(kihon['勘同目録：❷著訳者名、著訳年代']) }}
      </td>
    </tr>

    <template v-if="isSyomei">
      <tr v-for="(head, i) in rowHide" :key="`rowHide-${i}`">
        <td class="text-center">{{ head }}</td>
        <td :colspan="colsKihon.length - 1">
          {{ $utils.format(kihon[`勘同目録：${head}`]) }}
        </td>
      </tr>
    </template>

    <tr class="text-center">
      <th
        v-for="(head, i) in rowAdd"
        :key="`rowAdd-${i}`"
        :colspan="i === 1 ? 2 : 1"
      >
        {{ head }}
      </th>
    </tr>

    <tr class="text-center">
      <td
        v-for="(head, i) in rowAdd"
        :key="`rowAdd-value-${i}`"
        :colspan="i === 1 ? 2 : 1"
      >
        {{ $utils.format(kihon[`勘同目録：${head}`]) }}
      </td>
    </tr>

    <tr>
      <th rowspan="2">佛經目錄規範資料庫</th>
      <th
        v-for="(head, i) in rowLast"
        :key="`rowLast-${i}`"
        :colspan="isDouble(rowLast[i]) ? 2 : 1"
      >
        {{ head }}
      </th>
    </tr>

    <tr class="text-center">
      <td
        v-for="(head, i) in rowLast"
        :key="`rowLast-${i}`"
        :colspan="isDouble(rowLast[i]) ? 2 : 1"
      >
        <template v-if="rowLast[i] === '規範碼'">
          <a
            :href="`https://authority.dila.edu.tw/catalog/?fromInner=${$utils.format(
              kihon[`佛經目錄規範資料庫：${head}`]
            )}`"
            target="_blank"
          >
            {{ $utils.format(kihon[`佛經目錄規範資料庫：${head}`]) }}
          </a>
        </template>
        <template v-else>
          <a
            :href="`https://authority.dila.edu.tw/person/?fromInner=${$utils.format(
              kihon[
                `佛經目錄規範資料庫：${head.replace('作訳者', '作訳者URL')}`
              ]
            )}`"
            target="_blank"
          >
            {{ $utils.format(kihon[`佛經目錄規範資料庫：${head}`]) }}
          </a>
        </template>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import PagesItemSat from '~/components/pages/item/Sat.vue'
import PagesSearchKeiten from '~/components/pages/search/Keiten.vue'
import CommonIconShowHide from '~/components/common/icon/ShowHide.vue'
import PagesItemKihonVol from '~/components/pages/item/KihonVol.vue'

@Component({
  components: {
    PagesItemSat,
    PagesSearchKeiten,
    CommonIconShowHide,
    PagesItemKihonVol,
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

  rowLast: string[] = ['規範碼', '作訳者1', '作訳者2', '作訳者3'] // '高麗藏經號',

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

  isDouble(value: string) {
    return ['規範碼', '作訳者1', '作訳者2'].includes(value)
  }
}
</script>
