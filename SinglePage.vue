<template>
  <div class="ljxfw-page">
    <header class="site-header">
      <div class="top-banner" :style="bannerStyle">
        <div class="overlay"></div>
        <div class="header-content">
          <img class="logo" src="images/logo.png" alt="龙江先锋网" />
          <h1>龙江先锋网</h1>
          <p>党建引领 · 服务先锋 · 凝聚振兴力量</p>
        </div>
      </div>

      <nav class="nav-bar">
        <a
          v-for="item in navItems"
          :key="item"
          href="#"
          class="nav-item"
        >
          {{ item }}
        </a>
      </nav>
    </header>

    <main class="content">
      <section class="headline">
        <h2>{{ leadNews.title }}</h2>
        <p>{{ leadNews.summary }}</p>
      </section>

      <section class="hero-news">
        <div class="hero-image">
          <img :src="currentHero.image" :alt="currentHero.title" />
          <div class="caption">{{ currentHero.title }}</div>
        </div>
        <div class="hero-list">
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              :class="['tab-button', { active: activeTab === tab.key }]"
              @click="activeTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
          <ul>
            <li v-for="item in activeNews" :key="item.title">
              <span class="date">{{ item.date }}</span>
              <a href="#">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </section>

      <section class="section-grid">
        <article class="panel" v-for="panel in panels" :key="panel.title">
          <div class="panel-title">{{ panel.title }}</div>
          <ul>
            <li v-for="item in panel.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </section>
    </main>

    <footer class="site-footer">
      <p>Copyright © 龙江先锋网</p>
      <p>本页面已使用 Vue2 单文件组件重构为单页结构。</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LongjiangPioneerSinglePage',
  data() {
    return {
      heroIndex: 0,
      activeTab: 'central',
      navItems: ['先锋首页', '中央声音', '龙江要闻', '部领导活动', '组工动态', '党建专题'],
      leadNews: {
        title: '全面提升基层党建质量，以高质量组织工作服务龙江振兴发展',
        summary:
          '聚焦政治建设、组织建设、作风建设，持续推进党员教育、干部队伍建设和人才工作，为现代化新龙江建设提供坚强组织保证。'
      },
      heroSlides: [
        { title: '新时代组织工作高质量发展专题报道', image: 'images/index_img_01.png' },
        { title: '基层党组织标准化规范化建设现场会', image: 'images/index_img_02.png' },
        { title: '龙江先锋党员教育平台学习专栏', image: 'images/zgdyjypt.png' }
      ],
      tabs: [
        { key: 'central', label: '中央声音' },
        { key: 'province', label: '龙江要闻' },
        { key: 'leaders', label: '部领导活动' }
      ],
      newsMap: {
        central: [
          { date: '2026-02-01', title: '坚持大抓基层鲜明导向，推动基层党建提质增效' },
          { date: '2026-01-26', title: '以改革精神完善干部选育管用全链条机制' },
          { date: '2026-01-19', title: '着力建设堪当民族复兴重任的高素质干部队伍' }
        ],
        province: [
          { date: '2026-02-11', title: '全省组织部长会议召开，部署年度重点任务' },
          { date: '2026-02-08', title: '“龙江先锋讲堂”开展基层治理专题培训' },
          { date: '2026-02-03', title: '党建引领乡村振兴典型案例交流活动举行' }
        ],
        leaders: [
          { date: '2026-02-13', title: '部领导赴基层联系点调研党建工作' },
          { date: '2026-02-07', title: '走访慰问老党员和困难党员，传递组织关怀' },
          { date: '2026-01-30', title: '专题研究年轻干部培养和选拔使用工作' }
        ]
      },
      panels: [
        {
          title: '组工动态',
          items: ['全省组织系统信息化建设推进会召开', '党务干部能力提升班开班', '基层党组织书记抓党建述职评议完成']
        },
        {
          title: '通知公告',
          items: ['2026年度党员教育重点课题申报通知', '关于开展基层党建创新案例征集的公告', '龙江先锋网栏目优化升级说明']
        },
        {
          title: '党员教育',
          items: ['“三会一课”实务课程上线', '党纪学习教育微课堂（第12期）', '红色教育基地云参观专栏开放']
        },
        {
          title: '人才工作',
          items: ['重点产业人才引育计划发布', '青年人才返乡创业支持政策解读', '高层次人才服务专窗正式启用']
        }
      ],
      timer: null
    };
  },
  computed: {
    currentHero() {
      return this.heroSlides[this.heroIndex];
    },
    activeNews() {
      return this.newsMap[this.activeTab] || [];
    },
    bannerStyle() {
      return {
        backgroundImage: 'url(images/banner_bg.png)'
      };
    }
  },
  mounted() {
    this.timer = window.setInterval(() => {
      this.heroIndex = (this.heroIndex + 1) % this.heroSlides.length;
    }, 4000);
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.ljxfw-page {
  font-family: 'Microsoft YaHei', sans-serif;
  color: #222;
  background: #f5f7fb;
  min-height: 100vh;
}

.top-banner {
  position: relative;
  background-size: cover;
  background-position: center;
  min-height: 220px;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(150, 0, 0, 0.5);
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 24px;
  color: #fff;
}

.logo {
  width: 72px;
  margin-bottom: 12px;
}

.header-content h1 {
  margin: 0;
  font-size: 36px;
}

.nav-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  padding: 12px;
  background: #b40000;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
}

.content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 16px 24px;
}

.headline,
.hero-news,
.panel {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.headline {
  margin-bottom: 16px;
  padding: 18px 20px;
}

.headline h2 {
  margin: 0 0 8px;
  color: #9c0000;
}

.hero-news {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 14px;
  padding: 14px;
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  border-radius: 8px;
  height: 320px;
  object-fit: cover;
}

.caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  padding: 26px 12px 10px;
  border-radius: 0 0 8px 8px;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tab-button {
  border: none;
  background: #f0f2f7;
  color: #555;
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
}

.tab-button.active {
  background: #b40000;
  color: #fff;
}

.hero-list ul,
.panel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero-list li,
.panel li {
  padding: 8px 0;
  border-bottom: 1px dashed #ddd;
}

.hero-list li:last-child,
.panel li:last-child {
  border-bottom: none;
}

.date {
  font-size: 12px;
  margin-right: 8px;
  color: #888;
}

.hero-list a {
  text-decoration: none;
  color: #333;
}

.section-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.panel {
  padding: 14px;
}

.panel-title {
  font-size: 20px;
  font-weight: bold;
  color: #9c0000;
  border-left: 5px solid #b40000;
  padding-left: 10px;
  margin-bottom: 10px;
}

.site-footer {
  text-align: center;
  padding: 22px 16px 30px;
  color: #666;
}

@media (max-width: 900px) {
  .hero-news {
    grid-template-columns: 1fr;
  }

  .hero-image img {
    height: 220px;
  }

  .section-grid {
    grid-template-columns: 1fr;
  }
}
</style>
