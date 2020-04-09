<template>
  <main class="main">
    <div class="container">
      <Title :title="title" />
      <section class="tech">
        <div class="tech__item" v-for="item in tech" :key="item.id">
          <div class="tech__view">
            <div class="tech__image">
              <img :src="generateImage(item.title)">
            </div>
            <Diagram class="tech__diagram"/>
          </div>
          <div class="tech__text">
            В SVG заливка и обводка имеют много разных интересных опций, которые предоставляют возможности гораздо шире того, что есть в CSS.
            Например, можно нарисовать SVG-паттерн и использовать его не только в заливке, но и в обводке. Заливке и обводке можно указывать разную прозрачность, также можно управлять пунктирной обводкой, на чем можно построить интересные анимированные эффекты.
            В качестве заливки и обводки можно задавать none, цвета, ключевые слова (currentColor и transparent), а также градиенты и паттерны.
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Title from '@/components/base/Title'
import Diagram from '@/components/Tech/Diagram'

export default {
  components: {
    Title,
    Diagram
  },
  data () {
    return {
      title: 'Technology',
      tech: require('@/assets/json/tech.json')
    }
  },
  methods: {
    generateImage (title) {
      return require(`assets/img/${title}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: calc(100% - 80px);
  height: 100%;

  &__container {
    display: flex;
    align-items: flex-start;
    height: 100%;
    justify-content: flex-start;
  }
}

.tech {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &__item {
    // width: 100%;
    width: calc(50% - 20px);
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 10px;
    background: #333333;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.08), 0 1px 3px 1px rgba(0,0,0,.16);
    border-radius: 6px;
    
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__text {
    padding-top: 20px;
    font-size: 16px;
    line-height: 20px;
  }
  &__view {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    width: 200px;
    min-width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__diagram {
    width: 200px;
    min-width: 200px;
    height: 200px;
  }
}

</style>
