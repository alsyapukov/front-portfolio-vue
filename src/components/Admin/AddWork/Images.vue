<i18n>
{
	"ru": {
    "title": "Загрузите фотографии",
    "text": "Помните, что первое фото будут видеть ваши гости при поиске жилья. Перетаскивайте нужные фото для сортировки.",
    "dragFiles": "Перетащите сюда файлы или",
    "selectImage": "выберите на компьютере"
	},
	"en": {
    "title": "Uploaded photo",
    "text": "Remember that the first photo will be seen by your guests when searching for housing. Drag and drop the photos you want to sort.",
    "dragFiles": "Drag and drop files or",
    "selectImage": "select on your computer"
	}
}
</i18n>
<template>
  <div>
    <div class="load-image">
      <div class="load-image__wrap">
        <p class="load-image__drag-text">
          {{ $t('dragFiles') }}&nbsp;
          <span class="load-image__select-files" @click="addFiles()">
            <input type="file" id="files" ref="files" name="img" multiple @change="handleFilesUpload()" />
            {{ $t('selectImage') }}
          </span>
        </p>
        <div class="load-image__track">
          <sortable
            v-for="(image, index) in files"
            v-model="dragData"
            :key="index"
            :index="index"
            @sortend="sortend($event, files)"
            replace-direction="horizontal"
            class="item track__item"
          >
            <img class="track__image" :ref="`image-${index}`" />
          </sortable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Sortable from "vue-drag-sortable";

export default {
  name: "Images",
  components: {
    Sortable
  },
  data() {
    return {
      files: [],
      images: [],
      dragData: {}
    };
  },
  watch: {
    files: {
      deep: true,
      handler(val) {
        this.$emit("imgArray", val);
      }
    }
  },
  computed: {},
  methods: {
    handleFilesUpload() {
      for (var i = 0; i < this.$refs.files.files.length; i++) {
        if (/\.(jpe?g|png)$/i.test(this.$refs.files.files[i].name)) {
          this.files.push(this.$refs.files.files[i]);
        }
      }
      this.getImgPrev();
    },
    getImgPrev() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png)$/i.test(this.files[i].name)) {
          let reader = new FileReader();

          reader.addEventListener(
            "load",
            function() {
              this.$refs[`image-${i}`][0].src = reader.result;
            }.bind(this),
            false
          );

          reader.readAsDataURL(this.files[i]);
        }
      }
    },
    addFiles() {
      this.$refs.files.click();
    },
    removeFile(i) {
      this.$delete(this.files, i);
    },
    click(e) {
      // __preventClick will be set when then click item is dragging
      // so you can prevent the click action
      if (e.currentTarget.__preventClick) {
        delete e.currentTarget.__preventClick;
        return;
      }
    },
    sortend(e, list) {
      const { oldIndex, newIndex } = e;
      console.log(oldIndex, newIndex);
      this.rearrange(list, oldIndex, newIndex);
    },
    rearrange(array, oldIndex, newIndex) {
      const newArr = [...array];
      const tmp = newArr[oldIndex];
      this.$set(newArr, oldIndex, newArr[newIndex]);
      this.$set(newArr, newIndex, tmp);
      console.log(array);
      console.log(newArr);


      this.files = newArr;

    }
  }
};
</script>
<style lang="scss">
.load-image {
  width: 100%;
  padding-top: 25px;

  &__wrap {
    padding: 20px;
    border: 1px dashed #a6a6a6;
    min-height: 167px;
  }
  &__drag-text {
    font-size: 16px;
    line-height: 21px;
  }
  &__select-files {
    input[type="file"] {
      display: none;
    }
    cursor: pointer;
    color: #2d6cb4;
    background: transparent;
    border: none;
    text-decoration: none;
    outline: none;
    padding: 0;
    &:hover {
      color: #f51449;
    }
  }
  &__track {
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    margin-left: -10px;
    width: calc(100% + 20px);
    margin-bottom: -20px;
    position: relative;

    .track {
      &__item {
        width: calc((100% / 4) - 1px);
        cursor: move;
        // width: 124px;
        height: 130px;
        overflow: hidden;
        padding: 0 10px;
        margin-bottom: 20px;
        display: inline-block;
        box-sizing: border-box;
      }
      &__image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
