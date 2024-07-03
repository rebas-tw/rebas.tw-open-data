# 比賽表格｜Game Table
儲存比賽基本資料，每一個 `game` 能組成一場比賽

| 欄位名稱 | 欄位型態 | 欄位說明 | 範例 | 備註 |
| - | - | - | - | - |
| seasonId | String | 賽事ID | CPBL-2023-sk |  |
| season | String | 賽事名稱 | 中職2023年 |  |
| seq | Int | 比賽編號 | 1 |  |
| date | String | 比賽日期 | 2023-04-01 |  |
| stadium | String | 比賽場地 | 臺中市洲際棒球場 |  |
| awayTeamId | String | 客場球隊ID | 1zODE |  |
| awayTeam | String | 客場球隊名稱 | 樂天桃猿 |  |
| awayScores | []String | 客場得分 | ["0", "0", "0", "0", "0", "0", "3", "1", "0"] |  |
| awayBatterBox | [][batterBox](./batterBox.md) | 客場打者成績 |  |  |
| awayPitcherBox | [][pitcherBox](./pitcherBox.md) | 客場投手成績 |  |  |
| awayPAList | [][PA](./PA.md) | 客場打席列表 |  |  |
| homeTeamId | String | 主場球隊ID | HCHks |  |
| homeTeam | String | 主場球隊名稱 | 中信兄弟 |  |
| homeScores | []String | 主場得分 | ["0", "0", "1", "0", "0", "0", "0", "0", "0"] |  |
| homeBatterBox | [][batterBox](./batterBox.md) | 主場打者成績 |  |  |
| homePitcherBox | [][pitcherBox](./pitcherBox.md) | 主場投手成績 |  |  |
| homePAList | [][PA](./PA.md) | 主場打席列表 |  |  |
