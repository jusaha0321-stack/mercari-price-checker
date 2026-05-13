す。` 
      : `一部の特徴が不鮮明なため偽造リスクが「中」と判定されました。出品時はタグやロゴの拡大写真を追加すると売上率が上がります。`;
    document.getElementById('pjIn// =============================================
// データベース: 穴場キーワードリスト（品番・型番付き詳細版）
// =============================================
const KEYWORD_DB = [
  // ===== ホビー: ポケモンカード =====
  { kw: "ポケモンカード リザードン 初期 旧裏面 No.006", cat: "hobby", demand: 14200, supply: 88, profit: 82, diff: "hard" },
  { kw: "ポケモンカード ピカチュウ 初期 旧裏面 No.025", cat: "hobby", demand: 11800, supply: 142, profit: 75, diff: "hard" },
  { kw: "ポケモンカード ミュウツー 旧裏面 No.150", cat: "hobby", demand: 9600, supply: 196, profit: 70, diff: "hard" },
  { kw: "ポケモンカード 旧裏面 1st Edition PSA10", cat: "hobby", demand: 8200, supply: 55, profit: 90, diff: "hard" },
  { kw: "ポケモンカード スターバース SAR ルギア V", cat: "hobby", demand: 7400, supply: 380, profit: 55, diff: "mid" },
  { kw: "ポケモンカード 黒炎の支配者 SAR リザードンex", cat: "hobby", demand: 9100, supply: 512, profit: 48, diff: "mid" },
  { kw: "ポケモンカード スノーハザード チャオボーex SAR", cat: "hobby", demand: 5800, supply: 290, profit: 52, diff: "mid" },
  { kw: "ポケモンカード レイジングサーフ カイリューex SAR", cat: "hobby", demand: 6300, supply: 340, profit: 50, diff: "mid" },

  // ===== ホビー: トレカ その他 =====
  { kw: "遊戯王 初期 ブラックマジシャン LOB-001 PSA", cat: "hobby", demand: 7800, supply: 130, profit: 78, diff: "hard" },
  { kw: "遊戯王 青眼の白龍 初期 LOB-006 スーパー", cat: "hobby", demand: 6900, supply: 108, profit: 80, diff: "hard" },
  { kw: "ワンピースカード OP01 ゴールドロジャー SEC", cat: "hobby", demand: 8500, supply: 420, profit: 58, diff: "mid" },
  { kw: "ドラゴンボールカード SP カメハメ波 制限 1984", cat: "hobby", demand: 4200, supply: 65, profit: 85, diff: "hard" },

  // ===== ホビー: フィギュア =====
  { kw: "メガハウス GEM 初音ミク 15周年 限定", cat: "hobby", demand: 5100, supply: 148, profit: 62, diff: "mid" },
  { kw: "グッドスマイルカンパニー figma 鬼滅 炭治郎 GSC限定", cat: "hobby", demand: 4800, supply: 180, profit: 55, diff: "mid" },
  { kw: "バンダイ SHフィギュアーツ 仮面ライダー ブラック RX", cat: "hobby", demand: 3600, supply: 92, profit: 68, diff: "mid" },
  { kw: "海洋堂 カプセルQ 博物館シリーズ 恐竜", cat: "hobby", demand: 2900, supply: 58, profit: 72, diff: "easy" },

  // ===== ホビー: ゲーム・レトロ =====
  { kw: "SFC ドラゴンクエスト6 箱説付き 完品", cat: "hobby", demand: 5600, supply: 210, profit: 58, diff: "mid" },
  { kw: "ファミコン スーパーマリオブラザーズ 箱説付き", cat: "hobby", demand: 6200, supply: 165, profit: 65, diff: "mid" },
  { kw: "ゲームボーイ ポケットモンスター 赤 未開封 GAME FREAK", cat: "hobby", demand: 7100, supply: 88, profit: 80, diff: "hard" },
  { kw: "PS1 バイオハザード2 デュアルショック版 完品", cat: "hobby", demand: 4300, supply: 195, profit: 45, diff: "easy" },
  { kw: "Nintendo 64 ゼルダの伝説 時のオカリナ 箱説付き", cat: "hobby", demand: 5900, supply: 142, profit: 62, diff: "mid" },

  // ===== ファッション: スニーカー =====
  { kw: "Nike Air Jordan 1 Retro High OG Chicago 2015", cat: "sports", demand: 9800, supply: 145, profit: 88, diff: "hard" },
  { kw: "Nike Air Jordan 1 Retro High OG Bred 2019 555088-060", cat: "sports", demand: 8600, supply: 188, profit: 82, diff: "hard" },
  { kw: "Nike Air Jordan 4 Retro White Cement 840606-192", cat: "sports", demand: 7200, supply: 220, profit: 75, diff: "hard" },
  { kw: "Adidas Yeezy Boost 350 V2 Zebra CP9654", cat: "sports", demand: 6800, supply: 310, profit: 68, diff: "hard" },
  { kw: "Nike Dunk Low Retro Panda DD1391-100", cat: "sports", demand: 8100, supply: 1850, profit: 32, diff: "easy" },
  { kw: "New Balance 990v3 M990GY3 USA製 グレー", cat: "sports", demand: 5200, supply: 380, profit: 52, diff: "mid" },
  { kw: "Nike Air Max 1 Anniversary Red AH8145-101", cat: "sports", demand: 4800, supply: 165, profit: 65, diff: "mid" },
  { kw: "Adidas Samba OG B75806 ブラック ホワイト", cat: "sports", demand: 7600, supply: 2100, profit: 28, diff: "easy" },

  // ===== ファッション: 腕時計 =====
  { kw: "セイコー SBSA001 プロスペックス ダイバースキューバ", cat: "fashion", demand: 4600, supply: 285, profit: 45, diff: "easy" },
  { kw: "セイコー SKX007 ダイバーズ 7S26-0020 ヴィンテージ", cat: "fashion", demand: 6800, supply: 182, profit: 68, diff: "hard" },
  { kw: "カシオ Gショック DW-5900BB-1 ブラックアウト", cat: "fashion", demand: 5100, supply: 420, profit: 38, diff: "easy" },
  { kw: "カシオ Gショック GA-2100-1A1 オクタゴン CasiOak", cat: "fashion", demand: 6900, supply: 880, profit: 30, diff: "easy" },
  { kw: "オメガ スピードマスター ムーンウォッチ 311.30 中古", cat: "fashion", demand: 5400, supply: 320, profit: 42, diff: "hard" },
  { kw: "シチズン プロマスター MKJ-A-S25 限定 エコドライブ", cat: "fashion", demand: 3200, supply: 95, profit: 62, diff: "mid" },

  // ===== ファッション: バッグ・アパレル =====
  { kw: "ルイヴィトン モノグラム ポルトフォイユ サラ M62235", cat: "fashion", demand: 12000, supply: 2800, profit: 30, diff: "hard" },
  { kw: "グッチ GGキャンバス ハンドバッグ 001·3766 ヴィンテージ", cat: "fashion", demand: 7200, supply: 480, profit: 55, diff: "hard" },
  { kw: "Levi's 501 XX 赤耳 米国製 W32 1990s", cat: "fashion", demand: 6400, supply: 195, profit: 72, diff: "hard" },
  { kw: "Levi's 517 オレンジタブ 米国製 W34 ブーツカット", cat: "fashion", demand: 4100, supply: 88, profit: 78, diff: "mid" },
  { kw: "シュプリーム Box Logo Tee 2020SS ブラック M", cat: "fashion", demand: 8800, supply: 650, profit: 48, diff: "mid" },

  // ===== 家電: スマートフォン =====
  { kw: "iPhone 15 Pro Max 256GB チタニウムブラック SIMフリー", cat: "electronics", demand: 22000, supply: 6800, profit: 18, diff: "easy" },
  { kw: "iPhone 14 Pro 256GB スペースブラック SIMフリー MQ1R3J/A", cat: "electronics", demand: 14000, supply: 3200, profit: 22, diff: "easy" },
  { kw: "iPhone SE 第3世代 64GB ミッドナイト SIMフリー MMYC3J/A", cat: "electronics", demand: 9800, supply: 2100, profit: 25, diff: "easy" },
  { kw: "Galaxy S23 Ultra 256GB ファントムブラック SM-S918B", cat: "electronics", demand: 7200, supply: 1400, profit: 28, diff: "easy" },

  // ===== 家電: ゲーム機 =====
  { kw: "PlayStation 5 CFI-1200A01 通常版 未開封", cat: "electronics", demand: 19000, supply: 2800, profit: 20, diff: "easy" },
  { kw: "Nintendo Switch 有機EL HEG-S-KAAAA ホワイト", cat: "electronics", demand: 13500, supply: 3500, profit: 18, diff: "easy" },
  { kw: "Nintendo Switch HAC-001(-01) 旧型 バッテリー強化版", cat: "electronics", demand: 10200, supply: 4200, profit: 22, diff: "easy" },
  { kw: "ゲームボーイアドバンスSP AGS-001 ファミコンカラー", cat: "electronics", demand: 5800, supply: 380, profit: 55, diff: "mid" },
  { kw: "セガ サターン HST-3200 白 コントローラ付き 動作品", cat: "electronics", demand: 3900, supply: 148, profit: 62, diff: "mid" },

  // ===== 家電: オーディオ =====
  { kw: "ソニー WH-1000XM5 ノイキャン ヘッドホン ブラック", cat: "electronics", demand: 8900, supply: 1800, profit: 22, diff: "easy" },
  { kw: "Apple AirPods Pro 第2世代 MQD83J/A USB-C", cat: "electronics", demand: 11200, supply: 2600, profit: 20, diff: "easy" },
  { kw: "Technics SL-1200MK5 ターンテーブル DJ 中古", cat: "electronics", demand: 4200, supply: 125, profit: 65, diff: "hard" },

  // ===== コスメ・美容 =====
  { kw: "COSRX アドバンスド スネイルムチン 96% パワーエッセンス", cat: "beauty", demand: 5600, supply: 185, profit: 55, diff: "easy" },
  { kw: "Anua ドクダミ 77% スージングトナー 250ml 韓国", cat: "beauty", demand: 6200, supply: 260, profit: 48, diff: "easy" },
  { kw: "innisfree グリーンティー シードセラム 80ml", cat: "beauty", demand: 4800, supply: 320, profit: 42, diff: "easy" },
  { kw: "スタバ タンブラー 福岡限定 博多 2024 SS限定", cat: "beauty", demand: 7800, supply: 120, profit: 72, diff: "easy" },
  { kw: "スタバ タンブラー 沖縄限定 シーサー 355ml", cat: "beauty", demand: 6500, supply: 95, profit: 78, diff: "easy" },
  { kw: "ディズニー コスメ ミッキー ファンデ パレット 限定", cat: "beauty", demand: 5200, supply: 160, profit: 62, diff: "easy" },

  // ===== スポーツ・アウトドア =====
  { kw: "ノースフェイス ヌプシ ダウンジャケット ND91841 Mサイズ", cat: "sports", demand: 9200, supply: 1650, profit: 35, diff: "mid" },
  { kw: "パタゴニア レトロX フリース ナチュラル 25153 Sサイズ", cat: "sports", demand: 7400, supply: 480, profit: 55, diff: "mid" },
  { kw: "アークテリクス ベータ AR ジャケット X000006430", cat: "sports", demand: 6100, supply: 310, profit: 48, diff: "hard" },
  { kw: "コールマン ランタン 200A ヴィンテージ シルバー", cat: "sports", demand: 3800, supply: 82, profit: 75, diff: "mid" },
  { kw: "スノーピーク チタンシングルマグ 300 TW-201 新品", cat: "sports", demand: 4500, supply: 680, profit: 30, diff: "easy" },
];

// 画像キーワードマップ (Unsplash用英語キーワード)
const IMG_KW = {
  "ポケモンカード リザードン 初期 旧裏面 No.006": "pokemon card charizard vintage holographic",
  "ポケモンカード ピカチュウ 初期 旧裏面 No.025": "pokemon pikachu card collectible",
  "ポケモンカード ミュウツー 旧裏面 No.150": "pokemon mewtwo card rare",
  "ポケモンカード 旧裏面 1st Edition PSA10": "pokemon trading card psa graded slab",
  "ポケモンカード スターバース SAR ルギア V": "pokemon card lugia illustration rare",
  "ポケモンカード 黒炎の支配者 SAR リザードンex": "pokemon charizard ex card art",
  "ポケモンカード スノーハザード チャオボーex SAR": "pokemon special art rare card",
  "ポケモンカード レイジングサーフ カイリューex SAR": "pokemon dragonite illustration rare card",
  "遊戯王 初期 ブラックマジシャン LOB-001 PSA": "yugioh dark magician card vintage",
  "遊戯王 青眼の白龍 初期 LOB-006 スーパー": "yugioh blue eyes white dragon card",
  "ワンピースカード OP01 ゴールドロジャー SEC": "one piece trading card game",
  "ドラゴンボールカード SP カメハメ波 制限 1984": "dragonball vintage card collectible",
  "メガハウス GEM 初音ミク 15周年 限定": "anime figure hatsune miku blue",
  "グッドスマイルカンパニー figma 鬼滅 炭治郎 GSC限定": "anime action figure demon slayer",
  "バンダイ SHフィギュアーツ 仮面ライダー ブラック RX": "bandai action figure tokusatsu",
  "海洋堂 カプセルQ 博物館シリーズ 恐竜": "capsule toy dinosaur figurine",
  "SFC ドラゴンクエスト6 箱説付き 完品": "super famicom game cartridge box retro",
  "ファミコン スーパーマリオブラザーズ 箱説付き": "famicom super mario vintage game box",
  "ゲームボーイ ポケットモンスター 赤 未開封 GAME FREAK": "gameboy pokemon red sealed vintage",
  "PS1 バイオハザード2 デュアルショック版 完品": "playstation 1 game complete retro",
  "Nintendo 64 ゼルダの伝説 時のオカリナ 箱説付き": "nintendo 64 zelda cartridge box",
  "Nike Air Jordan 1 Retro High OG Chicago 2015": "air jordan 1 chicago red sneaker",
  "Nike Air Jordan 1 Retro High OG Bred 2019 555088-060": "air jordan 1 bred black red sneaker",
  "Nike Air Jordan 4 Retro White Cement 840606-192": "air jordan 4 white cement sneaker",
  "Adidas Yeezy Boost 350 V2 Zebra CP9654": "yeezy boost 350 zebra white sneaker",
  "Nike Dunk Low Retro Panda DD1391-100": "nike dunk low panda sneaker white black",
  "New Balance 990v3 M990GY3 USA製 グレー": "new balance 990 grey sneaker",
  "Nike Air Max 1 Anniversary Red AH8145-101": "nike air max 1 red sneaker",
  "Adidas Samba OG B75806 ブラック ホワイト": "adidas samba classic black white sneaker",
  "セイコー SBSA001 プロスペックス ダイバースキューバ": "seiko prospex diver watch blue",
  "セイコー SKX007 ダイバーズ 7S26-0020 ヴィンテージ": "seiko skx007 dive watch vintage",
  "カシオ Gショック DW-5900BB-1 ブラックアウト": "casio g-shock black digital watch",
  "カシオ Gショック GA-2100-1A1 オクタゴン CasiOak": "casio g-shock casioak watch",
  "オメガ スピードマスター ムーンウォッチ 311.30 中古": "omega speedmaster chronograph watch",
  "シチズン プロマスター MKJ-A-S25 限定 エコドライブ": "citizen promaster eco drive watch",
  "ルイヴィトン モノグラム ポルトフォイユ サラ M62235": "louis vuitton monogram wallet luxury",
  "グッチ GGキャンバス ハンドバッグ 001·3766 ヴィンテージ": "gucci vintage handbag canvas",
  "Levi's 501 XX 赤耳 米国製 W32 1990s": "levis 501 selvedge vintage denim jeans",
  "Levi's 517 オレンジタブ 米国製 W34 ブーツカット": "levis orange tab vintage bootcut jeans",
  "シュプリーム Box Logo Tee 2020SS ブラック M": "supreme box logo tshirt streetwear",
  "iPhone 15 Pro Max 256GB チタニウムブラック SIMフリー": "iphone 15 pro max titanium smartphone",
  "iPhone 14 Pro 256GB スペースブラック SIMフリー MQ1R3J/A": "iphone 14 pro space black phone",
  "iPhone SE 第3世代 64GB ミッドナイト SIMフリー MMYC3J/A": "iphone se midnight compact phone",
  "Galaxy S23 Ultra 256GB ファントムブラック SM-S918B": "samsung galaxy s23 ultra smartphone",
  "PlayStation 5 CFI-1200A01 通常版 未開封": "playstation 5 console white",
  "Nintendo Switch 有機EL HEG-S-KAAAA ホワイト": "nintendo switch oled white console",
  "Nintendo Switch HAC-001(-01) 旧型 バッテリー強化版": "nintendo switch handheld console gaming",
  "ゲームボーイアドバンスSP AGS-001 ファミコンカラー": "gameboy advance sp retro handheld",
  "セガ サターン HST-3200 白 コントローラ付き 動作品": "sega saturn console retro game",
  "ソニー WH-1000XM5 ノイキャン ヘッドホン ブラック": "sony headphones black noise cancelling",
  "Apple AirPods Pro 第2世代 MQD83J/A USB-C": "airpods pro wireless earbuds white",
  "Technics SL-1200MK5 ターンテーブル DJ 中古": "turntable vinyl dj technics",
  "COSRX アドバンスド スネイルムチン 96% パワーエッセンス": "korean skincare serum essence bottle",
  "Anua ドクダミ 77% スージングトナー 250ml 韓国": "korean toner bottle skincare",
  "innisfree グリーンティー シードセラム 80ml": "green tea serum skincare bottle",
  "スタバ タンブラー 福岡限定 博多 2024 SS限定": "starbucks tumbler coffee cup limited",
  "スタバ タンブラー 沖縄限定 シーサー 355ml": "starbucks tumbler travel cup",
  "ディズニー コスメ ミッキー ファンデ パレット 限定": "disney mickey makeup palette cosmetics",
  "ノースフェイス ヌプシ ダウンジャケット ND91841 Mサイズ": "north face nuptse puffer jacket down",
  "パタゴニア レトロX フリース ナチュラル 25153 Sサイズ": "patagonia retro x fleece jacket",
  "アークテリクス ベータ AR ジャケット X000006430": "arcteryx beta jacket outdoor goretex",
  "コールマン ランタン 200A ヴィンテージ シルバー": "coleman vintage lantern camping",
  "スノーピーク チタンシングルマグ 300 TW-201 新品": "snow peak titanium mug camping",
};

// カテゴリデフォルト画像
const CAT_IMG_DEFAULT = {
  hobby: "collectible toy hobby vintage", fashion: "fashion luxury brand accessory",
  electronics: "electronics gadget technology modern", beauty: "skincare beauty cosmetics bottle",
  sports: "sneaker streetwear sport outdoor",
};

// Unsplash画像URL生成
function getImgUrl(item, size = "200x200") {
  const kw = IMG_KW[item.kw] || CAT_IMG_DEFAULT[item.cat] || "product";
  const sig = item.kw.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return `https://source.unsplash.com/${size}/?${encodeURIComponent(kw)}&sig=${sig}`;
}

// スコア計算: 需要 / √(出品数) で正規化
function calcScore(demand, supply) {
  return Math.round((demand / Math.sqrt(supply)) * 10) / 10;
}

const ALL_DATA = KEYWORD_DB.map(item => ({
  ...item,
  score: calcScore(item.demand, item.supply)
})).sort((a, b) => b.score - a.score);

// =============================================
// 初期化
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString('ja-JP');
  renderTable();

  document.getElementById('searchBtn').addEventListener('click', () => {
    doSearch(document.getElementById('searchInput').value.trim());
  });
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch(e.target.value.trim());
  });
  
  // 写真判定ロジックの初期化
  initPhotoJudgment();
});

// =============================================
// 検索処理
// =============================================
function doSearch(keyword) {
  if (!keyword) return;
  document.getElementById('searchInput').value = keyword;

  const matched = ALL_DATA.find(d => d.kw.includes(keyword) || keyword.includes(d.kw.split(' ')[0]));
  const demand = matched ? matched.demand : randBetween(2000, 15000);
  const supply = matched ? matched.supply : randBetween(50, 3000);
  const profit = matched ? matched.profit : randBetween(20, 80);
  const score  = calcScore(demand, supply);

  showProductImage(keyword, matched, score, profit);
  showKPI(keyword, demand, supply, score, profit);
  showCharts(demand, supply, score, profit);
  showInsights(keyword, demand, supply, score, profit);

  // メルカリの商品ページに別タブで遷移する
  const mercariUrl = `https://jp.mercari.com/search?keyword=${encodeURIComponent(keyword)}`;
  window.open(mercariUrl, '_blank');
}

// =============================================
// 商品画像カード表示
// =============================================
function showProductImage(keyword, matched, score, profit) {
  let el = document.getElementById('productImageCard');
  if (!el) {
    el = document.createElement('div');
    el.id = 'productImageCard';
    el.className = 'product-img-card';
    const hero = document.querySelector('.hero');
    hero.parentNode.insertBefore(el, hero.nextSibling);
  }
  const imgUrl = matched ? getImgUrl(matched, '320x240') :
    `https://source.unsplash.com/320x240/?${encodeURIComponent(keyword + ' product')}&sig=${Math.random()*9999|0}`;
  const scoreLabel = score > 300 ? '🔥 超穴場' : score > 150 ? '✨ 穴場' : '📊 標準';
  const profitColor = profit > 50 ? '#4ade80' : profit > 30 ? '#fcd34d' : '#9ca3af';
  el.style.display = 'flex';
  el.innerHTML = `
    <div class="pimg-left">
      <img src="${imgUrl}" alt="${keyword}" class="pimg-img" onerror="this.src='https://source.unsplash.com/320x240/?product&sig=${Math.random()*9999|0}'">
      <div class="pimg-overlay">${scoreLabel}</div>
    </div>
    <div class="pimg-info">
      <div class="pimg-label">📦 分析中の商品</div>
      <div class="pimg-title">${keyword}</div>
      <div class="pimg-meta">
        <span class="pimg-chip" style="color:${profitColor};border-color:${profitColor}40;background:${profitColor}15">利益率 ${profit}%</span>
        <span class="pimg-chip">穴場スコア ${Math.round(score)}</span>
      </div>
      <div class="pimg-hint">↓ 詳細チャートは下にスクロール</div>
    </div>`;
  el.style.animation = 'none';
  requestAnimationFrame(() => { el.style.animation = 'fadeUp 0.4s ease'; });
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =============================================
// KPI表示
// =============================================
function showKPI(kw, demand, supply, score, profit) {
  document.getElementById('kpiRow').style.display = 'grid';
  animateNum('valDemand', demand, v => v.toLocaleString() + ' 件');
  animateNum('valSupply', supply, v => v.toLocaleString() + ' 件');
  animateNum('valScore', score, v => v.toFixed(1));
  animateNum('valProfit', profit, v => v + '%');

  const demandTrend = Math.random() > 0.4 ? '+' : '-';
  const pct = randBetween(3, 25);
  document.getElementById('chgDemand').textContent = `${demandTrend}${pct}% vs 先月`;
  document.getElementById('chgDemand').className = `kpi-change ${demandTrend === '+' ? 'up' : 'down'}`;
  document.getElementById('chgSupply').textContent = `出品者少なめ`;
  document.getElementById('chgScore').textContent = score > 300 ? '🔥 超穴場' : score > 150 ? '✨ 穴場' : '📊 標準';
  document.getElementById('chgProfit').textContent = profit > 50 ? '高利益期待' : profit > 30 ? '中程度' : '薄利多売型';
}

function animateNum(elId, target, fmt) {
  const el = document.getElementById(elId);
  let start = 0; const dur = 800; const startTime = performance.now();
  function step(now) {
    const t = Math.min((now - startTime) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(Math.round(start + (target - start) * ease));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// =============================================
// チャート表示
// =============================================
let trendChartInst = null, gaugeChartInst = null, priceChartInst = null;

function showCharts(demand, supply, score, profit) {
  document.getElementById('chartsRow').style.display = 'grid';
  document.getElementById('priceSection').style.display = 'grid';

  // Trend chart
  const labels = Array.from({length: 30}, (_, i) => `${30-i}日前`).reverse();
  const demandData = labels.map((_, i) => Math.round(demand * (0.7 + 0.3 * (i/29)) + randBetween(-200, 200)));
  const supplyData = labels.map((_, i) => Math.round(supply * (1.2 - 0.2 * (i/29)) + randBetween(-20, 20)));

  if (trendChartInst) trendChartInst.destroy();
  trendChartInst = new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: '検索需要', data: demandData,
          borderColor: '#7c5cfc', backgroundColor: 'rgba(124,92,252,0.1)',
          borderWidth: 2, fill: true, tension: 0.4, pointRadius: 0,
        },
        {
          label: '出品数', data: supplyData,
          borderColor: '#ff6b6b', backgroundColor: 'rgba(255,107,107,0.1)',
          borderWidth: 2, fill: true, tension: 0.4, pointRadius: 0,
          yAxisID: 'y2',
        }
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { labels: { color: '#8b8fa8', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#8b8fa8', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#8b8fa8', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' }, position: 'left' },
        y2: { ticks: { color: '#ff6b6b', font: { size: 10 } }, grid: { display: false }, position: 'right' },
      }
    }
  });

  // Gauge (Doughnut)
  const ratio = Math.min(score / 500, 1);
  const color = ratio > 0.6 ? '#ffd700' : ratio > 0.35 ? '#7c5cfc' : '#8b8fa8';
  if (gaugeChartInst) gaugeChartInst.destroy();
  gaugeChartInst = new Chart(document.getElementById('gaugeChart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [ratio, 1 - ratio],
        backgroundColor: [color, 'rgba(255,255,255,0.05)'],
        borderWidth: 0,
        circumference: 270, rotation: 225,
      }]
    },
    options: {
      responsive: true, cutout: '72%',
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
  const labelEl = document.getElementById('gaugeLabel');
  const label = score > 300 ? '🔥超穴場' : score > 150 ? '✨穴場' : '📊普通';
  labelEl.innerHTML = `<div style="color:${color};font-size:24px">${Math.round(score)}</div><div style="font-size:11px;color:#8b8fa8;margin-top:2px">${label}</div>`;

  // Price distribution
  const basePrice = Math.round((demand / supply) * 500 + 1000);
  const priceLabels = ['〜¥1k', '¥1k-3k', '¥3k-5k', '¥5k-10k', '¥10k-30k', '¥30k〜'];
  const priceData = [
    randBetween(5,15), randBetween(20,40), randBetween(25,35),
    randBetween(15,25), randBetween(5,15), randBetween(2,8)
  ];
  if (priceChartInst) priceChartInst.destroy();
  priceChartInst = new Chart(document.getElementById('priceChart'), {
    type: 'bar',
    data: {
      labels: priceLabels,
      datasets: [{
        label: '出品割合 (%)',
        data: priceData,
        backgroundColor: priceData.map((_, i) => i === 3 ? 'rgba(255,215,0,0.6)' : 'rgba(124,92,252,0.4)'),
        borderColor: priceData.map((_, i) => i === 3 ? '#ffd700' : '#7c5cfc'),
        borderWidth: 1, borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b8fa8', font: { size: 11 } }, grid: { display: false } },
        y: { ticks: { color: '#8b8fa8', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

// =============================================
// インサイト生成
// =============================================
function showInsights(kw, demand, supply, score, profit) {
  const insights = [];
  if (score > 300) insights.push({ icon: '🔥', text: `「${kw}」は需給ギャップが極めて大きく、超穴場カテゴリです。早期参入を推奨します。` });
  else if (score > 150) insights.push({ icon: '✨', text: `「${kw}」は穴場ポジション。出品者が少ないため適正価格より高く売れる可能性があります。` });
  else insights.push({ icon: '📊', text: `「${kw}」は標準的な競争環境です。差別化（状態・付属品）で勝負しましょう。` });

  if (profit > 50) insights.push({ icon: '💰', text: `推定利益率${profit}%。仕入れ値の管理次第で高収益が期待できます。` });
  if (demand > 8000) insights.push({ icon: '👀', text: `月間${demand.toLocaleString()}件以上の検索があり、潜在的な買い手が非常に多いです。` });
  if (supply < 300) insights.push({ icon: '📦', text: `出品数${supply}件は希少水準。競合が少なく自分のペースで価格設定できます。` });

  const insightEl = document.getElementById('insightList');
  insightEl.innerHTML = insights.map(i =>
    `<div class="insight-item"><span class="i-icon">${i.icon}</span><span>${i.text}</span></div>`
  ).join('');
}

// =============================================
// テーブル状態管理
// =============================================
let currentFilter = 'all';
let currentSearch = '';
let sortCol = 'score';   // 現在のソート列
let sortDir = 'desc';    // 'asc' | 'desc'
let currentPage = 1;
const PAGE_SIZE = 50;

// 初期化時にテーブル操作イベントを登録
document.addEventListener('DOMContentLoaded', () => {
  // ---- ソートヘッダーのクリックイベント ----
  document.querySelectorAll('.th-sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (sortCol === col) {
        sortDir = sortDir === 'desc' ? 'asc' : 'desc';
      } else {
        sortCol = col;
        sortDir = col === 'supply' ? 'asc' : 'desc'; // 出品数は少ない順がデフォルト
      }
      currentPage = 1;
      updateSortHeaders();
      renderTable();
    });
  });

  // ---- テーブル内検索 ----
  const tableSearch = document.getElementById('tableSearch');
  const clearBtn = document.getElementById('tableClearBtn');
  tableSearch.addEventListener('input', () => {
    currentSearch = tableSearch.value.trim();
    clearBtn.style.display = currentSearch ? 'block' : 'none';
    currentPage = 1;
    renderTable();
  });
  clearBtn.addEventListener('click', () => {
    tableSearch.value = '';
    currentSearch = '';
    clearBtn.style.display = 'none';
    currentPage = 1;
    renderTable();
  });
});

// ソートヘッダーのアイコン更新
function updateSortHeaders() {
  document.querySelectorAll('.th-sortable').forEach(th => {
    const col = th.dataset.col;
    const icon = th.querySelector('.sort-icon');
    th.classList.toggle('active-col', col === sortCol);
    if (col === sortCol) {
      icon.textContent = sortDir === 'desc' ? '↓' : '↑';
    } else {
      icon.textContent = '↕';
    }
  });
}

// =============================================
// テーブル描画 (ソート・検索・ページネーション統合)
// =============================================
function renderTable() {
  const scoreMax = ALL_DATA[0].score;

  // 1) カテゴリフィルタ
  let data = currentFilter === 'all' ? [...ALL_DATA] : ALL_DATA.filter(d => d.cat === currentFilter);

  // 2) キーワード検索フィルタ
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    data = data.filter(d =>
      d.kw.toLowerCase().includes(q) ||
      catLabel(d.cat).includes(q) ||
      d.cat.toLowerCase().includes(q)
    );
  }

  // 3) ソート
  const diffOrder = { easy: 1, mid: 2, hard: 3 };
  data.sort((a, b) => {
    let va, vb;
    if (sortCol === 'rank')   { va = ALL_DATA.indexOf(a); vb = ALL_DATA.indexOf(b); }
    else if (sortCol === 'diff') { va = diffOrder[a.diff]; vb = diffOrder[b.diff]; }
    else { va = a[sortCol]; vb = b[sortCol]; }
    return sortDir === 'desc' ? vb - va : va - vb;
  });

  // 4) 件数更新
  const total = data.length;
  document.getElementById('resultCount').textContent = `${total}件`;

  // 5) ページネーション計算
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  const pageData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // 6) 行描画
  const tbody = document.getElementById('rankBody');
  if (pageData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state">
      <span class="e-icon">🔍</span>「${currentSearch}」に一致する結果が見つかりません
    </div></td></tr>`;
  } else {
    tbody.innerHTML = pageData.map((item, idx) => {
      const globalRank = data.indexOf(item) + 1;
      const rankClass = globalRank === 1 ? 'rank-1' : globalRank === 2 ? 'rank-2' : globalRank === 3 ? 'rank-3' : '';
      const rankIcon  = globalRank === 1 ? '🥇' : globalRank === 2 ? '🥈' : globalRank === 3 ? '🥉' : globalRank;
      const pct = Math.round((item.score / scoreMax) * 100);
      const scoreClass  = pct > 60 ? 'high' : pct > 35 ? 'mid' : 'low';
      const profitClass = item.profit > 50 ? 'profit-high' : item.profit > 30 ? 'profit-mid' : 'profit-low';
      const diffClass   = item.diff === 'easy' ? 'diff-easy' : item.diff === 'mid' ? 'diff-mid' : 'diff-hard';
      const diffLabel   = item.diff === 'easy' ? '🟢 低' : item.diff === 'mid' ? '🟡 中' : '🔴 高';

      const thumb = getImgUrl(item, '80x80');
      return `<tr onclick="doSearch('${item.kw}')" style="animation-delay:${idx * 30}ms">
        <td><span class="rank-num ${rankClass}">${rankIcon}</span></td>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <img src="${thumb}" alt="" class="row-thumb" loading="lazy" onerror="this.style.display='none'">
            <span class="kw-name">${highlight(item.kw, currentSearch)}</span>
          </div>
        </td>
        <td><span class="cat-badge cat-${item.cat}">${catLabel(item.cat)}</span></td>
        <td style="min-width:140px">
          <div style="font-size:12px;color:#8b8fa8;margin-bottom:4px">${item.demand.toLocaleString()} 件/月</div>
          <div style="height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden">
            <div style="width:${Math.min(item.demand/180,100)}%;height:100%;background:linear-gradient(90deg,#7c5cfc,#22d3ee);border-radius:2px"></div>
          </div>
        </td>
        <td style="color:#ff6b6b;font-family:'Inter',sans-serif">${item.supply.toLocaleString()}</td>
        <td>
          <div class="score-bar-wrap">
            <div class="score-bar"><div class="score-bar-fill ${scoreClass}" style="width:${pct}%"></div></div>
            <span class="score-num">${Math.round(item.score)}</span>
          </div>
        </td>
        <td><span class="profit-chip ${profitClass}">${item.profit}%</span></td>
        <td><span class="diff-chip ${diffClass}">${diffLabel}</span></td>
      </tr>`;
    }).join('');

    // 行フラッシュアニメーション
    requestAnimationFrame(() => {
      tbody.querySelectorAll('tr').forEach(tr => {
        tr.classList.add('row-flash');
        tr.addEventListener('animationend', () => tr.classList.remove('row-flash'), { once: true });
      });
    });
  }

  // 7) ページネーション描画
  renderPagination(totalPages, total);
}

// =============================================
// ページネーション描画
// =============================================
function renderPagination(totalPages, total) {
  const el = document.getElementById('pagination');
  if (totalPages <= 1) { el.innerHTML = ''; return; }

  const start = (currentPage - 1) * PAGE_SIZE + 1;
  const end   = Math.min(currentPage * PAGE_SIZE, total);

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>‹ 前へ</button>`;

  // ページ番号ボタン (最大7個表示)
  const pages = getPageRange(currentPage, totalPages);
  pages.forEach(p => {
    if (p === '...') {
      html += `<span class="page-info">…</span>`;
    } else {
      html += `<button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="goPage(${p})">${p}</button>`;
    }
  });

  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>次へ ›</button>`;
  html += `<span class="page-info">${start}–${end} / ${total}件</span>`;
  el.innerHTML = html;
}

function getPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total-4, total-3, total-2, total-1, total];
  return [1, '...', current-1, current, current+1, '...', total];
}

function goPage(p) {
  const totalPages = Math.ceil(getFilteredData().length / PAGE_SIZE);
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  renderTable();
  document.querySelector('.table-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getFilteredData() {
  let data = currentFilter === 'all' ? [...ALL_DATA] : ALL_DATA.filter(d => d.cat === currentFilter);
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    data = data.filter(d =>
      d.kw.toLowerCase().includes(q) ||
      catLabel(d.cat).includes(q) ||
      d.cat.toLowerCase().includes(q)
    );
  }
  return data;
}

// =============================================
// ユーティリティ
// =============================================
function catLabel(cat) {
  return { hobby: 'ホビー', fashion: 'ファッション', electronics: '家電', beauty: 'コスメ', sports: 'スポーツ' }[cat] || cat;
}

// 検索キーワードのハイライト
function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(124,92,252,0.3);color:#fff;border-radius:2px;padding:0 1px">$1</mark>');
}

function filterCategory(cat, btn) {
  currentFilter = cat;
  currentPage = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTable();
}

// =============================================
// 写真判定 (Photo Judgment) ロジック
// =============================================
function initPhotoJudgment() {
  const uploadArea = document.getElementById('pjUploadArea');
  const fileInput = document.getElementById('pjFileInput');
  const preview = document.getElementById('pjPreview');
  const uploadContent = document.getElementById('pjUploadContent');
  const resultArea = document.getElementById('pjResultArea');
  const loading = document.getElementById('pjLoading');
  const resultContent = document.getElementById('pjResultContent');
  const resetBtn = document.getElementById('pjResetBtn');
  
  // Camera Elements
  const cameraBtn = document.getElementById('pjCameraBtn');
  const cameraOverlay = document.getElementById('cameraOverlay');
  const cameraVideo = document.getElementById('cameraVideo');
  const cameraCanvas = document.getElementById('cameraCanvas');
  const cameraCloseBtn = document.getElementById('cameraCloseBtn');
  const cameraCaptureBtn = document.getElementById('cameraCaptureBtn');
  let currentStream = null;

  // 要素が存在しない場合はスキップ
  if (!uploadArea) return;

  // ドラッグ＆ドロップイベント
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
  });
  function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

  ['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => uploadArea.classList.add('dragover'), false);
  });
  ['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => uploadArea.classList.remove('dragover'), false);
  });

  uploadArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length) handleFile(files[0]);
  });

  // クリックでファイル選択
  uploadArea.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', function() {
    if (this.files.length) handleFile(this.files[0]);
  });

  // カメラ起動
  if (cameraBtn) {
    cameraBtn.addEventListener('click', async (e) => {
      e.stopPropagation(); // アップロードエリアのクリックイベントをキャンセル
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        cameraVideo.srcObject = currentStream;
        cameraOverlay.style.display = 'flex';
      } catch (err) {
        console.error('Camera access error:', err);
        alert('カメラにアクセスできませんでした。ブラウザの権限設定をご確認いただくか、https環境でお試しください。');
      }
    });
  }

  // カメラキャンセル
  if (cameraCloseBtn) {
    cameraCloseBtn.addEventListener('click', () => {
      closeCamera();
    });
  }

  // 撮影
  if (cameraCaptureBtn) {
    cameraCaptureBtn.addEventListener('click', () => {
      if (!currentStream) return;
      
      cameraCanvas.width = cameraVideo.videoWidth;
      cameraCanvas.height = cameraVideo.videoHeight;
      const ctx = cameraCanvas.getContext('2d');
      ctx.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
      
      const dataUrl = cameraCanvas.toDataURL('image/jpeg', 0.8);
      
      // カメラを閉じる
      closeCamera();
      
      // プレビューと判定処理へ
      preview.src = dataUrl;
      preview.style.display = 'block';
      uploadContent.style.display = 'none';
      startAnalysis();
    });
  }

  function closeCamera() {
    if (currentStream) {
      currentStream.getTracks().forEach(track => track.stop());
      currentStream = null;
    }
    cameraVideo.srcObject = null;
    cameraOverlay.style.display = 'none';
  }

  // リセットボタン
  resetBtn.addEventListener('click', () => {
    fileInput.value = '';
    preview.style.display = 'none';
    uploadContent.style.display = 'block';
    resultArea.style.display = 'none';
    resultContent.style.display = 'none';
  });

  function handleFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('画像ファイルを選択してください。');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      preview.src = reader.result;
      preview.style.display = 'block';
      uploadContent.style.display = 'none';
      
      // 分析開始
      startAnalysis();
    };
  }

  function startAnalysis() {
    resultArea.style.display = 'flex';
    loading.style.display = 'block';
    resultContent.style.display = 'none';
    
    // スクロール
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // モックの遅延処理（2.5秒）
    setTimeout(() => {
      showAnalysisResult();
    }, 2500);
  }

  function showAnalysisResult() {
    loading.style.display = 'none';
    resultContent.style.display = 'block';
    
    // ランダムな結果を生成（デモ用）
    const itemTypes = ['スニーカー (Nike Air Jordan)', 'トレーディングカード', 'ブランドバッグ (LV)', '高級腕時計', 'ヴィンテージ古着'];
    const ranks = ['S (新品同様)', 'A (美品)', 'B (一般的な中古)', 'C (使用感あり)'];
    const risks = ['低 (正規品の可能性高)', '中 (要詳細確認)', '低 (正規品の可能性高)'];
    
    const type = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const risk = risks[Math.floor(Math.random() * risks.length)];
    const price = Math.floor(Math.random() * 500 + 50) * 100; // 5000 ~ 55000
    
    document.getElementById('pjResultTitle').textContent = `推定: ${type}`;
    document.getElementById('pjRank').textContent = rank;
    document.getElementById('pjPrice').textContent = `¥${price.toLocaleString()}`;
    document.getElementById('pjRisk').textContent = risk;
    
    const insightText = risk.includes('低') 
      ? `状態は「${rank.split(' ')[0]}」と判定されました。現在の相場（¥${price.toLocaleString()}）に対して出品数が少ないため、強気の価格設定が可能でsightText').textContent = insightText;
  }
}

