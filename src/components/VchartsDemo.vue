<template>
  <div>
    <language-panel ref="langPanel" :username="username[getLanguage]" trigger="click" />
    <el-input v-model="username.en" :placeholder="$t('placeholder.username', 'en')"></el-input>
    <el-input v-model="username.zh" :placeholder="$t('placeholder.username', 'zh')"></el-input>
    <el-input v-model="username.ja" :placeholder="$t('placeholder.username', 'ja')"></el-input>
    <el-date-picker
      v-model="date1"
      type="date"
      :placeholder="$t('placeholder.date')">
    </el-date-picker>
    <el-tabs v-model="value" @tab-click="handleClick">
      <el-tab-pane label="折线图" name="line">折线图</el-tab-pane>
      <el-tab-pane label="条形图" name="histogram">条形图</el-tab-pane>
      <el-tab-pane label="柱状图" name="bar">柱状图</el-tab-pane>
      <el-tab-pane label="饼图" name="pie">饼图</el-tab-pane>
      <el-tab-pane label="散点图" name="scatter">散点图</el-tab-pane>
    </el-tabs>
    <ve-line v-if="value=='line'" :data="chartData[value]"></ve-line>
    <ve-histogram v-if="value=='histogram'" :data="chartData[value]"></ve-histogram>
    <ve-bar v-if="value=='bar'" :data="chartData[value]"></ve-bar>
    <ve-pie v-if="value=='pie'" :data="chartData[value]"></ve-pie>
    <ve-scatter v-if="value=='scatter'" :data="chartData[value]"></ve-scatter>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeBar from 'v-charts/lib/bar.common'
import VePie from 'v-charts/lib/pie.common'
import VeScatter from 'v-charts/lib/scatter.common'
import LanguagePanel from './common/LanguagePanel'
import { mapGetters } from 'vuex'
export default {
  components: { VeLine, VeHistogram, VeBar, VePie, VeScatter, LanguagePanel },
  data () {
    return {
      date1: '',
      username: {
        en: '',
        zh: '',
        ja: ''
      },
      chartData: {
        line: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        histogram: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        bar: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        pie: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
        scatter: {
          columns: ['日期', '访问用户', '下单用户', '年龄'],
          rows: {
            '上海': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
              { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
              { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
            ],
            '北京': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
              { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
              { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
            ],
            '广州': [
              { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
              { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
              { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
              { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
              { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
              { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
            ]
          }
        }
      },
      value: 'line'
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  },
  computed: {
    ...mapGetters({
      'getLanguage': 'getLanguage'
    })
  }
}
</script>
