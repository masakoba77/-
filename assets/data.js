// 出典は index.html 末尾の「データソース」を参照。単位は特記なき限り億円。
const DATA = {
  // 防衛力整備計画対象経費の推移（当初予算ベース）
  // 出典: 財務省「令和8年度防衛関係予算のポイント」ほか各年度予算資料
  trend: [
    { label: "R4\n(2022)", oku: 51235, note: "計画初年度" },
    { label: "R5\n(2023)", oku: 66001, note: "+27.4%" },
    { label: "R6\n(2024)", oku: 77249, note: "+17.0%" },
    { label: "R7\n(2025)", oku: 84748, note: "+9.7%" },
    { label: "R8\n(2026)", oku: 88093, note: "+3.9%" },
  ],

  // GDP比の推移（防衛関連予算、NATO基準に準拠した広義の集計を含む）
  // 年度により集計範囲が異なるため目安値。出典脚注を参照。
  gdpRatio: [
    { label: "2012年度\n(実績)", pct: 1.0, note: "防衛力強化前の水準" },
    { label: "R4\n(2022年度)", pct: 1.0, note: "GDP比2%方針決定前" },
    { label: "R8\n(2026年度)", pct: 1.9, note: "報道ベースの概数（広義集計）" },
    { label: "R9\n(2027年度・目標)", pct: 2.0, note: "防衛力整備計画の目標年度" },
  ],

  // 令和8年度 一般会計歳出 主要経費別内訳
  // 出典: 財務省「日本の財政関係資料」
  budgetBreakdown: [
    { label: "社会保障", oku: 390559, pct: 31.9, highlight: false },
    { label: "国債費", oku: 313000, pct: 25.6, highlight: false },
    { label: "地方交付税交付金等", oku: 208778, pct: 17.1, highlight: false },
    { label: "文教・科学振興費等その他", oku: 159663, pct: 13.1, highlight: false },
    { label: "防衛関係費", oku: 89843, pct: 7.3, highlight: true },
    { label: "公共事業関係費", oku: 61078, pct: 5.0, highlight: false },
  ],

  // 令和8年度防衛関係費の内訳（防衛省予算 9兆353億円ベース）
  costBreakdown: [
    { label: "物件費", detail: "装備品の調達・維持、施設整備、燃料等", oku: 66456, pct: 73.5 },
    { label: "人件費・糧食費", detail: "隊員の給与・退職金・食事等", oku: 23897, pct: 26.5 },
  ],

  totalBudget: 1223000, // 令和8年度一般会計歳出総額（億円）
  defenseTotalMod: 90353, // 防衛省公表の防衛関係費総額（億円、令和8年度）
};
