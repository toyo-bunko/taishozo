<template>
  <v-row class="text-center">
    <v-col sm="12">
      <table
        border="1"
        style="border-collapse: collapse"
        width="100%"
        class="my-2"
      >
        <tr>
          <th colspan="4" width="50%">
            <h3>{{ '勘同目録詳細情報' }}</h3>
          </th>
          <th colspan="4" width="50%">
            <h3>{{ '脚注詳細情報' }}</h3>
          </th>
        </tr>
        <template v-for="n of 5">
          <template v-if="n == 1">
            <tr :key="'r1_' + n">
              <td width="10%" :rowspan="kFields.length + 3">
                {{ 'テキスト' + n }}<br />{{ '（勘同目録）' }}
              </td>
              <template
                v-if="apiResult['ex:勘同目録IIIFコレクション'].length > 0"
              >
                <td width="20%">勘同目録所在</td>
                <td width="20%" colspan="2">
                  <PagesItemKandoMokurokuSyozai
                    :url="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:url'][0]
                    "
                    :pos="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:pos'][0]
                    "
                    :page-start="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:ページ']
                    "
                    :page-start-dan="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:段']
                    "
                    :page-end="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:toページ']
                    "
                    :page-end-dan="
                      apiResult['ex:勘同目録IIIFコレクション'][0]['ex:to段']
                    "
                  />
                </td>
              </template>
              <template v-else>
                <td width="20%" bgcolor="#B0BEC5"></td>
                <td width="20%" bgcolor="#B0BEC5" colspan="2"></td>
              </template>
              <td width="10%" :rowspan="kFields.length + 3">
                {{ 'テキスト' + n }}<br />{{ '（脚注）' }}
              </td>
              <td width="20%">底本推定</td>
              <td width="20%" class="pl-1 text-left" colspan="2">
                {{
                  $utils.format(
                    apiResult['ex:脚注'][0]['ex:texts'][0]['ex:底本推定']
                  )
                }}
              </td>
            </tr>
            <tr :key="'r10_' + n">
              <td bgcolor="#B0BEC5"></td>
              <td bgcolor="#B0BEC5" colspan="2"></td>
              <td>略号使用</td>
              <td class="pl-1 text-left" colspan="2">
                {{
                  $utils.format(
                    apiResult['ex:脚注'][0]['ex:texts'][0]['ex:略号の使用']
                  )
                }}
              </td>
            </tr>
            <tr :key="'r11_' + n">
              <td bgcolor="#B0BEC5"></td>
              <td bgcolor="#B0BEC5" colspan="2"></td>
              <td>略号解説</td>
              <td class="pl-1 text-left" colspan="2">
                {{
                  $utils.format(
                    apiResult['ex:脚注'][0]['ex:texts'][0]['ex:略号解説']
                  )
                }}
              </td>
            </tr>
          </template>
          <tr
            v-for="(field, index) in kFields"
            :key="'l2_' + n + index"
            class="text-center"
          >
            <td v-if="index == 0 && n != 1" :rowspan="kFields.length">
              {{ 'テキスト' + n }}<br />{{ '（勘同目録）' }}
            </td>
            <td>{{ field }}</td>
            <td class="pl-1 text-left" colspan="2">
              {{
                apiResult['ex:勘同目録'][0]['ex:texts'][n - 1]
                  ? $utils.format(
                      apiResult['ex:勘同目録'][0]['ex:texts'][n - 1][
                        'ex:' + field
                      ]
                    )
                  : ''
              }}
              {{
                field == '年' &&
                apiResult['ex:勘同目録'][0]['ex:texts'][n - 1] &&
                apiResult['ex:勘同目録'][0]['ex:texts'][n - 1]['ex:～年']
                  ? ' - ' +
                    $utils.format(
                      apiResult['ex:勘同目録'][0]['ex:texts'][n - 1]['ex:～年']
                    )
                  : ''
              }}
            </td>

            <td
              v-if="index == 0 && n != 1"
              :rowspan="kFields.length"
              :bgcolor="n < 4 ? '' : '#B0BEC5'"
            >
              <template v-if="n < 4">
                {{ 'テキスト' + n }}<br />{{ '（脚注）' }}
              </template>
            </td>
            <td :bgcolor="n < 4 ? '' : '#B0BEC5'">
              {{ n > 3 ? '' : field }}
            </td>
            <td
              class="pl-1 text-left"
              colspan="2"
              :bgcolor="n < 4 ? '' : '#B0BEC5'"
            >
              {{
                apiResult['ex:脚注'][0]['ex:texts'][n - 1]
                  ? $utils.format(
                      apiResult['ex:脚注'][0]['ex:texts'][n - 1]['ex:' + field]
                    )
                  : ''
              }}
            </td>
          </tr>
        </template>

        <template v-for="n of 2">
          <tr
            v-for="(field, index) in hFields"
            :key="'l3_' + n + index"
            class="text-center"
          >
            <td v-if="index == 0" :rowspan="hFields.length">
              {{ '所蔵者' + n }}<br />{{ '（勘同目録）' }}
            </td>
            <td>{{ field }}</td>
            <td class="pl-1 text-left" colspan="2">
              {{
                apiResult['ex:勘同目録'][0]['ex:所蔵者'][n - 1]
                  ? $utils.format(
                      apiResult['ex:勘同目録'][0]['ex:所蔵者'][n - 1][
                        'ex:' + field
                      ]
                    )
                  : ''
              }}
            </td>

            <td v-if="index == 0" :rowspan="hFields.length">
              {{ '所蔵者' + n }}<br />{{ '（脚注）' }}
            </td>
            <td>{{ field }}</td>
            <td class="pl-1 text-left" colspan="2">
              {{
                apiResult['ex:脚注'][0]['ex:所蔵者'][n - 1]
                  ? $utils.format(
                      apiResult['ex:脚注'][0]['ex:所蔵者'][n - 1]['ex:' + field]
                    )
                  : ''
              }}
            </td>
          </tr>
        </template>
      </table>
    </v-col>
  </v-row>
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

  @Prop({ required: true })
  apiResult!: any

  kFields: string[] = [
    '標準名称',
    '巻',
    '国',
    '時代',
    '年',
    '刊写者',
    '刊写形態',
    '関与者',
    '関与形態',
  ]

  hFields: string[] = ['国', '所蔵者']
}
</script>
