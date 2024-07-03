# 打者成績表格｜Batter Box Table
儲存打者成績，每個 `game` 會包含 `awayBatterBox` 與 `homeBatterBox` 各一張

| 欄位名稱 | 欄位型態 | 欄位說明 | 範例 | 備註 |
| - | - | - | - | - |
| order | Int | 打序 | 1 | 同隊第二個相同打序即為替補上場 |
| playerId | String | 球員ID | xdLku |  |
| playerNumber | String | 球員背號 | 98 |  |
| playerName | String | 球員名稱 | 陳晨威 |  |
| PA | Int | 打席 | 4 |  |
| AB | Int | 打數 | 3 |  |
| R | Int | 得分 | 0 |  |
| H | Int | 安打 | 1 |  |
| RBI | Int | 打點 | 0 |  |
| 2B | Int | 二壘安打 | 0 |  |
| 3B | Int | 三壘安打 | 0 |  |
| HR | Int | 全壘打 | 0 |  |
| GIDP | Int | 滾地雙殺 | 0 |  |
| DP | Int | 雙殺打 | 0 | 包含滾地雙殺 |
| TP | Int | 三殺打 | 0 |  |
| BB | Int | 四壞 | 1 | 包含故意四壞，不包含觸身球 |
| IBB | Int | 故意四壞 | 0 |  |
| HBP | Int | 觸身球 | 0 |  |
| SO | Int | 三振 | 0 |  |
| SH | Int | 犧牲觸擊 | 0 |  |
| SF | Int | 犧牲飛球 | 0 |  |
| E | Int | 失誤上壘 | 0 |  |
| SB | Int | 盜壘成功 | 0 |  |
| CS | Int | 盜壘失敗 | 0 |  |
