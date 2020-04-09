<i18n>
{
  "ru": {
    "title": "Название",
    "miniText": "Короткое описание",
    "description": "Описание",
    "img": "Адрес изображения {number}",
    "addWork": "Добавление работы",
    "createWork": "Опубликовать работу",
    "titleImage": "Изображение"
  },
  "en": {
    "title": "Title",
    "miniText": "Short description",
    "description": "Description",
    "img": "Address for image {number}",
    "addWork": "add work",
    "createWork": "Public work",
    "titleImage": "Image"
  }
}
</i18n>
<template>
  <main class="work">
    <div class="work__container">
      <div class="work__layer">
        <div class="work__title">{{ $t('addWork') }}</div>
        <div class="work__body">
          <div class="work__line">
            <TextBox v-model="title" :title="$t('title')" />
          </div>
          <div class="work__line">
            <TextArea v-model="miniDescription" :title="$t('miniText')" />
          </div>
          <div class="work__line">
            <TextArea v-model="description" :title="$t('description')" />
          </div>
          <div class="work__line">
            <div class="work__subtitle">{{ $t('titleImage') }}</div>
            <Images @imgArray="imgRecontruct($event)"/>
          </div>
          <div class="work__line">
            <Button
              :theme="`coral`"
              size="small"
              :radius="true"
              @click.native="addWork()"
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
import Images from "@/components/Admin/AddWork/Images";
import { mapState, mapGetters, mapActions } from "vuex";
import { Works } from "@/api";

export default {
  name: "AddWork",
  components: {
    TextBox,
    TextArea,
    Button,
    Images
  },
  data() {
    return {
      maxImg: 10,
      title: null,
      miniDescription: null,
      description: null,
      images: null
    };
  },
  computed: {
    // ...mapGetters("addwork", ["images"])
  },
  methods: {
    ...mapActions("admin", ["setWorkAction"]),
    addWork() {
      this.setWorkAction({
        title: this.title, 
        miniDescription: this.miniDescription, 
        description: this.description, 
        images: this.images
      })
    },
    imgRecontruct(e) {
      this.images = e
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
