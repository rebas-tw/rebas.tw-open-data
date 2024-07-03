# 跑者表格｜Runner Table
儲存打/跑者的得分/出局，每個 `event` 會儲存一個 `runners` 欄位，作為儲存 0 至 n 個 `runner` 的陣列

| 欄位名稱 | 欄位型態 | 欄位說明 | 範例 | 備註 |
| - | - | - | - | - |
| type | [RUNNER TYPE](#runner-type) | 跑壘型態 |  |  |
| runnerName | String | 跑者名稱 | PA |  |
| isOut | Boolean | 是出局 | 陳晨威 |  |
| scored | Boolean | 是得分 | false |  |
| isRBI | Boolean | 是打者的打點 | false |  |
| isER | Boolean | 是投手責失 | false |  |
| ERPitcherName | String | 被算責失的投手 | null | 非責失為 null |

## RUNNER TYPE
| 值 | 代表意義 |
| - | - |
| PA | 打者 |
| ADVANCE | 推進 |
| SB | 盜壘成功 |
| CS | 盜壘失敗 |
| CS_E | 盜壘失敗但野手失誤上壘 |
| PO | 牽制出局 |
