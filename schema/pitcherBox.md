# 投手成績表格｜Pitcher Box Table
儲存投手成績，每個 `game` 會包含 `awayPitcherBox` 與 `homePitcherBox` 各一張

| 欄位名稱 | 欄位型態 | 欄位說明 | 範例 | 備註 |
| - | - | - | - | - |
| order | Int | 上場順序 | 1 |  |
| playerId | String | 球員ID | hHLGE |  |
| playerNumber | String | 球員背號 | 44 |  |
| playerName | String | 球員名稱 | 威達爾 |  |
| IPOuts | Int | 出局數 | 18 | 非常見IP局數，是出局數 |
| NP | Int | 用球數 | 96 |  |
| BF | Int | 面對打席 | 24 |  |
| H | Int | 被安打 | 4 |  |
| HR | Int | 被全壘打 | 0 |  |
| BB | Int | 四壞 | 2 | 包含故意四壞，不包含觸身球 |
| IBB | Int | 故意四壞 | 0 |  |
| HB | Int | 觸身球 | 0 |  |
| SO | Int | 三振 | 6 |  |
| R | Int | 失分 | 1 |  |
| ER | Int | 責失 | 1 |  |
