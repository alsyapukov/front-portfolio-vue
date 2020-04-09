<i18n>
{
  "ru": {
    "title": "Название",
    "miniText": "Короткое описание",
    "description": "Описание",
    "img": "Адрес изображения {number}",
    "addWork": "Добавление работы",
    "createWork": "Опубликовать работу"
  },
  "en": {
    "title": "Title",
    "miniText": "Short description",
    "description": "Description",
    "img": "Address for image {number}",
    "addWork": "add work",
    "createWork": "Public work"
  }
}
</i18n>
<template>
  <main class="work">
    <div class="work__container">
      <div class="work__layer">
        <div class="work__title">{{ $t('addWork') }}</div>
        <div class="work__body" @click="worksAction()">
          <div class="work__line">
            <div v-for="work in works">{{ work }}</div>
          </div>
          <!-- <Button
              :theme="`coral`"
              size="small"
              :radius="true"
              @click.native="worksAction()"
            >{{ $t('createWork') }}</Button> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TextBox from "@/components/base/Form/TextBox";
import TextArea from "@/components/base/Form/TextArea";
import Button from "@/components/base/Form/Button";
import Images from "@/components/Admin/AddWork/Images";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Works",
  components: {
    TextBox,
    TextArea,
    Button,
    Images
  },
  firestore () {
    return {
      worksFs: fs.collection('works')
    }
  },
  data() {
    return {

    };
  },
  async mounted() {
    this.$nextTick(() => {
      if(this.worksFs) {
        this.worksAction(this.worksFs);
      }
    })
  },
  computed: {
    ...mapGetters("works", ["works"])
  },
  methods: {
    ...mapActions("works", ["worksAction"])
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
