# rebas.tw Open Data
野球革命｜台灣棒球進階資料庫｜原始數據共享計劃

## 📦[原始數據](https://github.com/rebas-tw/rebas.tw-open-data/releases)
> 部分資料為手動紀錄，非球場儀器量測

## 共享緣起
台灣棒球參與人數眾多，不乏許多熱切關注也有程式或數據分析能力的球迷。
不過原始資料的取得，至今仍是許多好想法會被擱置的主要原因之一。
野球革命網站成立後秉持著大多數據免費的精神，也是希望有興趣的球迷能夠有更方便的管道取得我們分析後的成果。

有感於野革成立至今收到非常多球迷的需求，分享他們對於數據分析的想法與實作流程與建議，在非常的感謝的同時，也漸漸發現野革的開發量能有時沒辦法反應及滿足所有的需求，畢竟網站越來越龐大的同時，彈性也逐漸的降低了。

## 共享目標
***Don't hesitate to share your viewpoint!*** 我們希望透過資料的分享，讓所有人省去最繁瑣的步驟－資料蒐集 的同時，也同樣能將結果分享給大家。
無論最終成果是個網站、APP、文章、甚至是表格都沒有問題，數據是中性客觀的，加上每個人的觀點就會越發有趣！

## 資料結構
詳細資料結構可參考 [schema](./schema/README.md)

我們將資料分成 6 張主要的表格，透過 json 格式巢狀儲存
| 表格名稱 | 表格定義 | 關係 |
| - | :-: | :-: |
| [game](./schema/game.md) | 比賽 |  |
| [batterBox](./schema/batterBox.md) | 打者成績 |  |
| [pitcherBox](./schema/pitcherBox.md) | 投手成績 |  |
| [PA](./schema/PA.md) | 打席內容 | 一場比賽有 1 - n 個 PA |
| [event](./schema/event.md) | 事件（投球, 盜壘等） | 一個 PA 有 1 - n 個 event |
| [runner](./schema/runner.md) | 跑者 | 一個 event 有 0 - n 個 runner |


## 使用原則
在標註來源的情況下，可以任意使用數據，詳細可參考 [ODC-By License](./LICENSE)

## 更多資料索取
如您有商業需求或需要更詳細的資料進行分析，可透過 [rebastaiwan@gmail.com](mailto:rebastaiwan@gmail.com) 與我們聯繫
