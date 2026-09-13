// 出典は index.html 末尾の「データソース」を参照。単位は特記なき限り億円。
const DATA = {
  // 社会保障給付費の推移（実績ベース）
  // 出典: 国立社会保障・人口問題研究所（IPSS）「社会保障費用統計」
  benefitTrend: [
    { label: "1970", oku: 35000, note: "制度拡充前" },
    { label: "1980", oku: 248000, note: "+609%" },
    { label: "1990", oku: 472000, note: "+90%" },
    { label: "2000", oku: 784000, note: "+66%" },
    { label: "2010", oku: 1054000, note: "+34%" },
    { label: "2020", oku: 1322000, note: "+25%（コロナ禍）" },
    { label: "2022", oku: 1343000, note: "+2%" },
  ],

  // 65歳以上人口が総人口に占める割合（高齢化率）の推移
  // 出典: 総務省統計局「人口推計」、内閣府「高齢社会白書」
  agingRate: [
    { label: "1970", pct: 7.1, note: "「高齢化社会」入り" },
    { label: "1990", pct: 12.1, note: "" },
    { label: "2000", pct: 17.4, note: "「超高齢社会」に近づく" },
    { label: "2010", pct: 23.0, note: "" },
    { label: "2020", pct: 28.6, note: "" },
    { label: "2023", pct: 29.1, note: "世界最高水準" },
  ],

  // 令和8年度 一般会計歳出 主要経費別内訳
  // 出典: 財務省「日本の財政関係資料」
  budgetBreakdown: [
    { label: "社会保障関係費", oku: 390559, pct: 31.9, highlight: true },
    { label: "国債費", oku: 313000, pct: 25.6, highlight: false },
    { label: "地方交付税交付金等", oku: 208778, pct: 17.1, highlight: false },
    { label: "文教・科学振興費等その他", oku: 159663, pct: 13.1, highlight: false },
    { label: "防衛関係費", oku: 89843, pct: 7.3, highlight: false },
    { label: "公共事業関係費", oku: 61078, pct: 5.0, highlight: false },
  ],

  // 社会保障給付費の内訳（2022年度実績、134.3兆円ベース）
  // 出典: IPSS「社会保障費用統計」
  costBreakdown: [
    { label: "年金", detail: "老齢年金・遺族年金・障害年金等", oku: 558000, pct: 41.5 },
    { label: "医療", detail: "医療保険給付・後期高齢者医療等", oku: 406000, pct: 30.2 },
    { label: "福祉その他", detail: "介護・子ども・生活保護・雇用対策等", oku: 379000, pct: 28.2 },
  ],

  totalBudget: 1223000, // 令和8年度一般会計歳出総額（億円）
  benefitTotal2022: 1343000, // 2022年度社会保障給付費実績（億円）
  nationalIncomeRatio2022: 30.98, // 2022年度 社会保障給付費の対国民所得比（%）
};
