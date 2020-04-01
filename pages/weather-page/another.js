module.exports = [
  [["湿度", 'humidity'], ['能见度', 'visibility']],
  [['体感温度', 'tem'], ['气压', 'pressure']],
  [['风', info => [info.win, info.win_speed].join(' ')],['紫外线','level']]
]