module.exports = [
  [["湿度", 'humidity'], ['风', info => [info.win, info.win_speed].join(' ')]],
  [['体感温度', 'tem'], ['气压', 'pressure']],
  [['能见度', 'visibility'],['紫外线','level']]
]