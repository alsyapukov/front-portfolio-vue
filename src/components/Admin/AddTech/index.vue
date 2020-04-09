<i18n>
{
  "ru": {
    "title": "Название",
    "titleAlternate": "Альтернативное название",
    "description": "Описание",
    "addTech": "Добавление технологии",
    "createWork": "Опубликовать технологию",
    "percent": "Процент изучение технологии"
  },
  "en": {
    "title": "Title",
    "titleAlternate": "Alternate title",
    "description": "Description",
    "addWork": "add tech",
    "createWork": "Public tech",
    "percent": "Percent of lern this technology"
  }
}
</i18n>
<template>
  <main class="work">
    <div class="work__container">
      <div class="work__layer">
        <div class="work__title">{{ $t('addTech') }}</div>
        <div class="work__body">
          <div class="work__line">
            <TextBox v-model="title" :title="$t('title')" />
          </div>
          <div class="work__line">
            <TextBox v-model="titleAlternate" :title="$t('titleAlternate')" />
          </div>
          <div class="work__line">
            <TextArea v-model="description" :title="$t('description')" />
          </div>
          <div class="work__line">
            <TextBox v-model="percent" type="number" min="0" max="100" :title="$t('percent')" />
          </div>
          <div class="work__line">
            <Button
              :theme="`coral`"
              size="small"
              :radius="true"
              @click.native="addTech()"
            >{{ $t('createWork') }}</Button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TextBox from "@/components/base/Form/TextBox";
import TextArea from "@/components/base/Form/TextArea";
import Button from "@/components/base/Form/Button";
import { mapState, mapGetters } from "vuex";
import { Techs } from "@/api";

export default {
  name: "AddTech",
  components: {
    TextBox,
    TextArea,
    Button
  },
  data() {
    return {
      title: null,
      titleAlternate: null,
      description: null,
      percent: null
    };
  },
  computed: {
    // ...mapGetters("addwork", ["images"])
  },
  methods: {
    addTech() {
      Techs.setTech({
        title: this.title,
        titleAlternate: this.titleAlternate,
        description: this.description,
        percent: this.percent
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.work {
  width: calc(100% - 260px);
  position: relative;
  overflow: hidden;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 50px;
  }

  &__layer {
    background: #282828;
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 100%;
    min-height: 100%;
    padding: 30px;
  }

  &__title {
    font-size: 18px;
  }

  &__line {
    padding-top: 20px;
    &:first-child {
      padding-top: 0;
    }
  }
}
</style>
