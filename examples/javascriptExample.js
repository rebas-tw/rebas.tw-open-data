// 讀取 2023 上半季資料成 rebasOpenData (存放資料的資料夾須跟程式檔案在同一個資料夾裡)
const rebasOpenData = require('./CPBL-2023-G1-G150-OpenData/中職2023年-OpenData.json');

// 篩選出 統一7-ELEVEn獅 出賽的資料
const unilionsGames = rebasOpenData.filter(
  (game) => game.awayTeam === '統一7-ELEVEn獅' || game.homeTeam === '統一7-ELEVEn獅',
);

// 顯示陣列長度 沒有錯誤的話執行後會顯示 60 (2023 上半季各隊出賽數為 60)
console.log(unilionsGames.length);
