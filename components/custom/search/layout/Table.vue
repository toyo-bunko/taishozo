<template>
  <div>
    <table
      border="1"
      style="border-collapse: collapse"
      width="100%"
      class="my-2"
    >
      <tr>
        <th :colspan="isAlt ? 10 : 7">
          {{ '基本情報' }}
        </th>
        <th colspan="4">
          {{ '勘同目録' }}
        </th>
        <th colspan="4">
          {{ '脚注' }}
        </th>
        <th rowspan="2">詳細<br />情報</th>
      </tr>
      <tr>
        <th>{{ '経典番号' }}</th>
        <th>{{ '枝番' }}</th>
        <th>
          {{ '経典名' }}
          <a style="color: inherit" @click="isAlt = !isAlt">{{
            isAlt ? '◀︎' : '▶'
          }}</a>
        </th>
        <th v-show="isAlt">{{ '経典別名' }}</th>
        <th v-show="isAlt">{{ '巻数' }}</th>
        <th v-show="isAlt">{{ '訳著者' }}</th>
        <th>{{ '収録巻次' }}</th>
        <th>{{ '部門' }}</th>
        <th>{{ '配本' }}</th>
        <th>{{ '出版年月日' }}</th>

        <th>{{ '底本/校本' }}</th>
        <th>{{ '❹原本及校本' }}</th>
        <th>{{ '❼備考（書誌情報）' }}</th>
        <th>{{ '❼備考（その他）' }}</th>

        <th>{{ '底本/校本' }}</th>
        <th>{{ '新略号（1926.8-）' }}</th>
        <th>{{ 'テキスト' }}</th>
        <th>{{ '備考' }}</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td width="5%">
          {{ $utils.formatArrayValue(item['基-経典番号']) }}
        </td>
        <td width="2%">
          {{ $utils.formatArrayValue(item['基-枝番']) }}
        </td>
        <td width="10%" class="pl-1 text-left">
          <PagesSearchKeiten
            :label="item['基-経典名']"
            :highlight="highlight"
          ></PagesSearchKeiten>
        </td>

        <td
          v-show="isAlt"
          width="10%"
          v-html="highlight($utils.formatArrayValue(item['基-経典別名']))"
        ></td>

        <td v-show="isAlt" width="5%">
          {{ $utils.formatArrayValue(item['基-巻数']) }}
        </td>

        <td
          v-show="isAlt"
          width="10%"
          v-html="highlight($utils.formatArrayValue(item['基-訳著者']))"
        ></td>

        <td width="2%">
          {{ $utils.formatArrayValue(item['基-収録巻次']) }}
        </td>
        <td
          width="5%"
          class="pl-1 text-left"
          v-html="highlight($utils.formatArrayValue(item['基-部門']))"
        ></td>
        <td width="2%">
          {{ $utils.formatArrayValue(item['基-配本']) }}
        </td>
        <td width="5%">
          {{ $utils.formatArrayValue(item['基-年月日']) }}
        </td>
        <td
          width="5%"
          :bgcolor="
            $utils.formatArrayValue(item['勘-底本/校本']) == '底本'
              ? '#BBDEFB'
              : $utils.formatArrayValue(item['勘-底本/校本']) == '校本'
              ? '#FFCDD2'
              : ''
          "
        >
          {{ $utils.formatArrayValue(item['勘-底本/校本']) }}
        </td>
        <td
          width="10%"
          class="pl-1 text-left"
          v-html="highlight($utils.formatArrayValue(item['勘-❹']))"
        ></td>
        <td
          width="10%"
          class="pl-1 text-left"
          v-html="highlight($utils.formatArrayValue(item['勘-❼']))"
        ></td>
        <td width="10%" class="pl-1 text-left">
          {{ $utils.formatArrayValue(item['勘-❼備考']) }}
        </td>

        <td
          width="5%"
          :bgcolor="
            $utils.formatArrayValue(item['脚-底本/校本']) == '底本'
              ? '#BBDEFB'
              : $utils.formatArrayValue(item['脚-底本/校本']) == '校本'
              ? '#FFCDD2'
              : ''
          "
        >
          {{ $utils.formatArrayValue(item['脚-底本/校本']) }}
        </td>
        <td width="5%" class="pl-1 text-left">
          {{ $utils.formatArrayValue(item['脚-新添部分']) }}
        </td>

        <td>
          <span
            v-html="highlight($utils.formatArrayValue(item['脚-テキスト']))"
          ></span>

          <template v-if="item['酉目'].length > 0">
            <template v-for="(value, key2) in item['酉目']">
              <v-btn
                v-if="value"
                :key="key2"
                icon
                :href="
                  value[0]
                    .split('https://static.toyobunko-lab.jp/u-renja')
                    .join(urenja)
                "
                target="_blank"
              >
                <v-icon color="primary">mdi-link-variant</v-icon>
              </v-btn>
            </template>
          </template>

          <template v-if="item.images.length > 0">
            <template v-for="(item2, index2) in item.images.slice(0, 1)">
              <PagesSearchIconIiif
                v-if="item2 && item2['画像URL']"
                :key="'t_' + index2"
                :url="item2['画像URL']"
                :label="item2.label"
                :width="24"
                :height="24"
              ></PagesSearchIconIiif>
            </template>
          </template>
        </td>

        <td
          width="10%"
          class="pl-1 text-left"
          v-html="highlight($utils.formatArrayValue(item['脚-備考']))"
        ></td>

        <td width="5%">
          <nuxt-link
            :to="
              localePath({
                name: 'item-id',
                params: {
                  id: $utils.formatArrayValue(item['objectID']),
                },
              })
            "
            >{{ $t('detail') }}
          </nuxt-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'
import PagesSearchKeiten from '~/components/pages/search/Keiten.vue'
import PagesSearchIconIiif from '~/components/pages/search/icon/Iiif.vue'

@Component({
  components: {
    ResultOption,
    PagesSearchKeiten,
    PagesSearchIconIiif,
  },
})
export default class FullTextSearch extends Vue {
  baseUrl: any = process.env.BASE_URL
  @Prop({})
  items!: any[]

  urenja: any = process.env['u-renja']

  isAlt: boolean = false

  highlight(text: string) {
    const keyword: any = this.$route.query['main[query]']
    if (!keyword) {
      return text
    }

    let keywords = keyword
    if (typeof keyword !== 'object') {
      keywords = [keyword]
    }

    const keywordsWithItaiji = []

    const synonym: any = process.env.both

    for (let keyword of keywords) {
      const words = keyword.split('')
      for (const word of words) {
        if (synonym[word]) {
          keyword = keyword.split(word).join(`(${synonym[word].join('|')})`)
        }
      }
      keywordsWithItaiji.push(keyword)
    }

    const uuidMap: any = {}

    let result = text

    for (const keyword of keywordsWithItaiji) {
      const regexp = new RegExp(keyword, 'g')
      result = result.replace(regexp, function (match) {
        const uuid = getUniqueStr()
        uuidMap[uuid] = '<em>' + match + '</em>'
        return uuid
      })
    }

    for (const uuid in uuidMap) {
      result = result.replace(uuid, uuidMap[uuid])
    }
    return result
  }
}

function getUniqueStr() {
  const strong: number = 1000
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  )
}
</script>
