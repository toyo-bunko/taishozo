<template>
  <Content :items="bh">
    <v-container v-if="apiResult">
      <h2 class="text-center my-5">
        {{ $t('詳細情報') }}
      </h2>
      <table
        border="1"
        style="border-collapse: collapse"
        width="100%"
        class="my-2"
      >
        <tr>
          <th colspan="7">
            <h2>{{ '基本情報' }}</h2>
          </th>
        </tr>
        <tr>
          <th>{{ '経典番号' }}</th>
          <th>{{ '枝番' }}</th>
          <th>{{ '経典名' }}</th>
          <th>{{ '収録巻次' }}</th>
          <th>{{ '部門' }}</th>
          <th>{{ '配本' }}</th>
          <th>{{ '出版年月日' }}</th>
        </tr>
        <tr class="text-center">
          <td>
            {{
              format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典番号'])
            }}
          </td>
          <td>
            {{ format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:枝番']) }}
          </td>
          <td class="pl-1 text-left">
            <a :href="apiResult['ex:sat'][0]['ex:url']" target="_blank"
              >{{
                format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典名'])
              }}
              <v-icon color="primary" small>mdi-exit-to-app</v-icon></a
            >
          </td>
          <td>
            {{
              format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:収録巻次'])
            }}
          </td>
          <td class="pl-1 text-left">
            {{ format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:部門']) }}
          </td>
          <td>
            {{
              format(
                apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:配本']
              ) /*.join(', ')*/
            }}
          </td>
          <td>
            {{
              format(
                apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:出版年月日']
              ) /*.join(
                ', '
              )*/
            }}
          </td>
        </tr>
        <!-- 2行目 -->
        <tr>
          <th colspan="4">{{ '経典別名' }}</th>
          <th>{{ '巻数' }}</th>
          <th colspan="2">{{ '訳著者' }}</th>
        </tr>
        <tr class="text-center">
          <td colspan="4">
            {{
              format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:経典別名'])
            }}
          </td>
          <td>
            {{ format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:巻数']) }}
          </td>
          <td colspan="2">
            {{ format(apiResult['ex:基本情報'][0]['ex:経典'][0]['ex:訳著者']) }}
          </td>
        </tr>
      </table>

      <v-row class="text-center">
        <v-col sm="12">
          <table
            border="1"
            style="border-collapse: collapse"
            width="100%"
            class="my-2"
          >
            <tr>
              <th colspan="4">
                <h2>{{ '勘同目録' }}</h2>
              </th>
              <th bgcolor="#CFD8DC" rowspan="60" width="2%"></th>
              <th colspan="4">
                <h2>{{ '脚注' }}</h2>
              </th>
            </tr>
            <tr>
              <th width="10%">{{ '底本/校本' }}</th>
              <th width="10%">{{ '❹' }}</th>
              <th width="12%">{{ '❼' }}</th>
              <th width="12%">{{ '❼備考' }}</th>
              <th width="10%">{{ '底本/校本' }}</th>
              <th width="10%">{{ '新添部分' }}</th>
              <th width="12%">{{ 'テキスト' }}</th>
              <th width="12%">{{ '備考' }}</th>
            </tr>
            <tr class="text-center">
              <td>{{ format(apiResult['ex:勘同目録'][0]['ex:底本/校本']) }}</td>
              <td class="pl-1 text-left">
                {{ format(apiResult['ex:勘同目録'][0]['ex:❹']) }}
              </td>
              <td class="pl-1 text-left">
                {{ format(apiResult['ex:勘同目録'][0]['ex:❼']) }}
              </td>
              <td class="pl-1 text-left">
                {{ format(apiResult['ex:勘同目録'][0]['ex:❼備考']) }}
              </td>
              <td>{{ format(apiResult['ex:脚注'][0]['ex:底本/校本']) }}</td>
              <td class="pl-1 text-left">
                {{ format(apiResult['ex:脚注'][0]['ex:新添']) }}
              </td>
              <td class="pl-1 text-left">
                <template
                  v-if="apiResult['ex:酉目'] && apiResult['ex:酉目'].length > 0"
                >
                  <a
                    :href="apiResult['ex:酉目'][0]['ex:url'][0]"
                    target="_blank"
                    >{{ format(apiResult['ex:脚注'][0]['ex:テキスト']) }}
                    <v-icon color="primary" small>mdi-exit-to-app</v-icon></a
                  >
                </template>
                <template v-else>
                  {{ format(apiResult['ex:脚注'][0]['ex:テキスト']) }}
                </template>

                <template v-if="apiResult['ex:酉蓮社本IIIコレクション']">
                  <!-- <v-chip color="error">9/11 [A]酉蓮社本のURLは今後修正</v-chip> -->
                  <v-tooltip
                    v-for="(obj, index2) in apiResult[
                      'ex:酉蓮社本IIIコレクション'
                    ]"
                    :key="index2"
                    bottom
                  >
                    <template #activator="{ on, attrs }">
                      <!-- {{ obj['ex:url'] }} -->
                      <a
                        v-bind="attrs"
                        :href2="
                          'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=https://d1av1vcgsldque.cloudfront.net/iiif/' +
                          Number(id) +
                          '/manifest.json&pos=' +
                          (index2 == 1 ? 5 : obj['ex:from'])
                        "
                        :href="`${baseUrl}/mirador/?manifest=${obj[
                          'ex:url'
                        ].replace(
                          'static.toyobunko-lab.jp/u-renja',
                          'dev-urenja.netlify.app'
                        )}`"
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
                    <span>{{ format(obj['ex:経典名']) }}</span>
                  </v-tooltip>
                </template>

                <template v-if="apiResult['ex:底本校本URL']">
                  <v-tooltip
                    v-for="(obj, index2) in apiResult['ex:底本校本URL']"
                    :key="index2"
                    bottom
                  >
                    <template #activator="{ on, attrs }">
                      <a
                        v-bind="attrs"
                        :href="obj['ex:URL'][0]"
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
                      >{{ format(obj['ex:資料群名']) }}<br />{{
                        format(obj['ex:經典名稱'])
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
                {{ format(apiResult['ex:脚注'][0]['ex:備考']) }}
              </td>
            </tr>
            <tr>
              <th colspan="4">
                <h3>{{ '勘同目録詳細情報' }}</h3>
              </th>
              <th colspan="4">
                <h3>{{ '脚注詳細情報' }}</h3>
              </th>
            </tr>
            <template v-for="n of 5">
              <template v-if="n == 1">
                <tr :key="'r1_' + n">
                  <td :rowspan="kFields.length + 3">
                    {{ 'テキスト' + n }}<br />{{ '（勘同目録）' }}
                  </td>
                  <template
                    v-if="apiResult['ex:勘同目録IIIFコレクション'].length > 0"
                  >
                    <td>勘同目録所在</td>
                    <td colspan="2">
                      <a
                        :href="
                          baseUrl +
                          '/mirador?manifest=' +
                          apiResult['ex:勘同目録IIIFコレクション'][0][
                            'ex:url'
                          ][0] +
                          '&pos=' +
                          apiResult['ex:勘同目録IIIFコレクション'][0][
                            'ex:pos'
                          ][0]
                        "
                        target="_blank"
                      >
                        {{
                          apiResult['ex:勘同目録IIIFコレクション'][0][
                            'ex:ページ'
                          ] +
                          apiResult['ex:勘同目録IIIFコレクション'][0]['ex:段'] +
                          '~' +
                          apiResult['ex:勘同目録IIIFコレクション'][0][
                            'ex:toページ'
                          ] +
                          apiResult['ex:勘同目録IIIFコレクション'][0]['ex:to段']
                        }}
                        <v-icon color="primary" small>mdi-exit-to-app</v-icon>
                      </a>
                    </td>
                  </template>
                  <template v-else>
                    <td bgcolor="#B0BEC5"></td>
                    <td bgcolor="#B0BEC5" colspan="2"></td>
                  </template>
                  <td :rowspan="kFields.length + 3">
                    {{ 'テキスト' + n }}<br />{{ '（脚注）' }}
                  </td>
                  <td>底本推定</td>
                  <td class="pl-1 text-left" colspan="2">
                    {{ apiResult['ex:脚注'][0]['ex:底本推定'] }}
                  </td>
                </tr>
                <tr :key="'r10_' + n">
                  <td bgcolor="#B0BEC5"></td>
                  <td bgcolor="#B0BEC5" colspan="2"></td>
                  <td>略号使用</td>
                  <td class="pl-1 text-left" colspan="2">
                    {{ apiResult['ex:脚注'][0]['ex:略号の使用'] }}
                  </td>
                </tr>
                <tr :key="'r11_' + n">
                  <td bgcolor="#B0BEC5"></td>
                  <td bgcolor="#B0BEC5" colspan="2"></td>
                  <td>略号解説</td>
                  <td class="pl-1 text-left" colspan="2">
                    {{ apiResult['ex:脚注'][0]['ex:略号解説'] }}
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
                      ? format(
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
                        format(
                          apiResult['ex:勘同目録'][0]['ex:texts'][n - 1][
                            'ex:～年'
                          ]
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
                      ? format(
                          apiResult['ex:脚注'][0]['ex:texts'][n - 1][
                            'ex:' + field
                          ]
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
                      ? format(
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
                      ? format(
                          apiResult['ex:脚注'][0]['ex:所蔵者'][n - 1][
                            'ex:' + field
                          ]
                        )
                      : ''
                  }}
                </td>
              </tr>
            </template>
          </table>
        </v-col>
      </v-row>
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

        <!--
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on }">
            <v-btn depressed icon v-on="on">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </template>

          <ShareButtons :url="url" :title="title" />
        </v-menu>
        -->

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
// import ShareButtons from '~/components/common/ShareButtons.vue'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
    ResultOption,
    // ShareButtons,
    Content,
  },
})
export default class Search extends Vue {
  baseUrl = process.env.BASE_URL

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

  head() {
    return {
      title: this.$t('詳細情報') + ': ' + this.title,
    }
  }

  hFields: string[] = ['国', '所蔵者']

  apiResult: any = null

  uri: string = ''
  url: string = ''
  title: string = ''
  id: string = ''

  async asyncData(context: any) {
    const itemId = `${context.params.id}`
    const url = process.env.BASE_URL + '/item/' + itemId

    const uri = process.env.BASE_URL + '/data/' + itemId + '.json'

    /*
    
    const apiResult = await context.$axios
      .get(uri)
      .then((response: any) => {
        const apiResult = response.data
        return apiResult
      })
      .catch((error: any) => {
        // eslint-disable-next-line
        console.error(error)
      })
    */

    const apiResult_ = await import(`~/static/data/${itemId}.json`)
    const apiResult = apiResult_.default

    // console.log({ apiResult })

    return {
      id: itemId,
      apiResult,
      uri,
      url,
      title: itemId,
    }
  }

  get twitterUrl() {
    return (
      'https://twitter.com/intent/tweet?url=' + this.url + '&text=' + this.title
    )
  }

  get facebookUrl() {
    return 'https://www.facebook.com/sharer/sharer.php?u=' + this.url
  }

  get pocketUrl() {
    return 'http://getpocket.com/edit?url=' + this.url
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

  format(data: any) {
    if (Array.isArray(data)) {
      return data.join(', ')
    } else {
      return data
    }
  }
}
</script>
