import json

# 讀取 2023 上半季資料成 rebas_open_data (存放資料的資料夾須跟程式檔案在同一個資料夾裡)
with open('./CPBL-2023-G1-G150-OpenData/中職2023年-OpenData.json') as f:
    rebas_open_data = json.load(f)

# 篩選出 富邦悍將 出賽的資料
fubon_games = [game for game in rebas_open_data if game["awayTeam"] == "富邦悍將"
               or game["homeTeam"] == "富邦悍將"]

# 顯示陣列長度 沒有錯誤的話執行後會顯示 60 (2023 上半季各隊出賽數為 60)
print(len(fubon_games))
