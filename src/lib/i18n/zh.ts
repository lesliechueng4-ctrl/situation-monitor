/**
 * 中文翻译文件
 * 用于 Situation Monitor 的中文化
 */

export const zh = {
  // === 导航和界面 ===
  nav: {
    title: 'Situation Monitor',
    settings: '设置',
    monitors: '监控',
    onboarding: '配置向导',
    language: '语言',
  },

  // === 通用文本 ===
  common: {
    loading: '加载中...',
    error: '出错了',
    refresh: '刷新',
    save: '保存',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    add: '添加',
    search: '搜索',
    filter: '筛选',
    close: '关闭',
    confirm: '确认',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    done: '完成',
  },

  // === 面板名称 ===
  panels: {
    news: '新闻',
    markets: '市场',
    heatmap: '热力图',
    commodities: '大宗商品',
    crypto: '加密货币',
    mainChar: '主要特征',
    relation: '相关性',
    narrative: '叙事分析',
    monitors: '自定义监控',
    map: '地图',
    whale: '鲸鱼交易',
    polymarket: '预测市场',
    contracts: '政府合约',
    layoffs: '裁员追踪',
    intel: '情报',
    situation: '态势',
    worldLeaders: '世界领导人',
    printer: '美联储',
    fed: '美联储',
  },

  // === 新闻面板 ===
  news: {
    title: '全球新闻',
    categories: {
      politics: '政治',
      tech: '科技',
      finance: '金融',
      gov: '政府',
      ai: '人工智能',
      intel: '情报',
    },
    noNews: '暂无新闻',
    loadMore: '加载更多',
    source: '来源',
    time: '时间',
    readMore: '阅读更多',
  },

  // === 市场面板 ===
  markets: {
    title: '市场数据',
    indices: '指数',
    sectors: '板块',
    commodities: '商品',
    crypto: '加密货币',
    change: '涨跌幅',
    value: '数值',
    volume: '成交量',
  },

  // === 热力图面板 ===
  heatmap: {
    title: '市场热力图',
    description: '实时市场表现可视化',
    green: '上涨',
    red: '下跌',
    neutral: '持平',
  },

  // === 美联储面板 ===
  fed: {
    title: '美联储监控',
    indicators: '经济指标',
    news: '美联储新闻',
    printer: '印钞机',
    isPrinting: '正在印钞',
    notPrinting: '未印钞',
    balanceSheet: '资产负债表',
  },

  // === 裁员面板 ===
  layoffs: {
    title: '科技裁员追踪',
    company: '公司',
    layoffs: '裁员人数',
    date: '日期',
    industry: '行业',
    totalLayoffs: '总裁员人数',
    thisYear: '今年',
    last30Days: '最近30天',
  },

  // === 鲸鱼交易面板 ===
  whale: {
    title: '鲸鱼交易追踪',
    description: '大额加密货币交易',
    token: '代币',
    amount: '数量',
    value: '价值',
    transaction: '交易',
    recent: '最近交易',
  },

  // === 预测市场面板 ===
  polymarket: {
    title: 'Polymarket 预测',
    description: '去中心化预测市场',
    question: '问题',
    yes: '是',
    no: '否',
    probability: '概率',
    volume: '交易量',
  },

  // === 自定义监控面板 ===
  monitors: {
    title: '自定义监控',
    addMonitor: '添加监控',
    editMonitor: '编辑监控',
    deleteMonitor: '删除监控',
    monitorName: '监控名称',
    keyword: '关键词',
    source: '数据源',
    enabled: '启用',
    noMonitors: '暂无自定义监控',
    createFirst: '创建第一个监控',
  },

  // === 设置面板 ===
  settings: {
    title: '设置',
    general: '通用',
    panels: '面板配置',
    data: '数据源',
    language: '语言',
    theme: '主题',
    darkMode: '深色模式',
    lightMode: '浅色模式',
    refreshInterval: '刷新间隔',
    dataRetention: '数据保留',
    resetSettings: '重置设置',
    resetOnboarding: '重新配置',
  },

  // === 配置向导 ===
  onboarding: {
    title: '配置向导',
    welcome: '欢迎使用 Situation Monitor',
    description: '这是一个实时全球态势监控仪表板，帮助您追踪新闻、市场数据和地事件。',
    preset: {
      title: '选择配置预设',
      minimal: '极简版',
      full: '完整版',
      custom: '自定义',
    },
    minimalDesc: '只显示核心功能，适合快速浏览',
    fullDesc: '显示所有面板，完整监控体验',
    customDesc: '手动选择要显示的面板',
    selectPanels: '选择面板',
    ready: '配置完成',
    startUsing: '开始使用',
  },

  // === 相关性面板 ===
  correlation: {
    title: '市场相关性',
    description: '分析不同资产之间的关联',
    strong: '强相关',
    weak: '弱相关',
    negative: '负相关',
    positive: '正相关',
  },

  // === 叙事分析面板 ===
  narrative: {
    title: '叙事分析',
    description: '识别热门市场叙事',
    trending: '热门叙事',
    emerging: '新兴叙事',
    fading: '衰退叙事',
    sentiment: '情绪',
    positive: '正面',
    negative: '负面',
    neutral: '中性',
  },

  // === 地图面板 ===
  map: {
    title: '全球事件地图',
    description: '可视化全球事件分布',
    filterByType: '按类型筛选',
    filterByRegion: '按地区筛选',
  },

  // === 情报面板 ===
  intel: {
    title: '情报聚合',
    description: '多源情报汇总',
    sources: '情报源',
    priority: '优先级',
    high: '高',
    medium: '中',
    low: '低',
    verified: '已验证',
    unverified: '未验证',
  },

  // === 世界领导人面板 ===
  worldLeaders: {
    title: '世界领导人追踪',
    description: '重要领导人活动监控',
    country: '国家',
    leader: '领导人',
    position: '职位',
    activity: '近期活动',
    meetings: '会议',
    statements: '声明',
  },

  // === 数据时间 ===
  time: {
    now: '现在',
    today: '今天',
    yesterday: '昨天',
    thisWeek: '本周',
    thisMonth: '本月',
    thisYear: '今年',
    lastWeek: '上周',
    lastMonth: '上月',
    lastYear: '去年',
    minutesAgo: '{0} 分钟前',
    hoursAgo: '{0} 小时前',
    daysAgo: '{0} 天前',
    weeksAgo: '{0} 周前',
    monthsAgo: '{0} 月前',
    yearsAgo: '{0} 年前',
  },

  // === 错误消息 ===
  errors: {
    networkError: '网络错误，请检查连接',
    dataError: '数据加载失败',
    authError: '认证错误',
    rateLimit: '请求过于频繁，请稍后再试',
    parseError: '数据解析错误',
    unknownError: '未知错误',
  },

  // === 成功消息 ===
  success: {
    saved: '已保存',
    deleted: '已删除',
    updated: '已更新',
    added: '已添加',
    deployed: '已部署',
  },
};
