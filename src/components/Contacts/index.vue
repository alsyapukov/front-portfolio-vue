<i18n>
{
  "ru": {
    "name": "ФИО",
    "email": "Электронный адресс",
    "phone": "Номер телефона",
    "message": "Сообщение",
    "connect": "Свяжитесь со мной"
  },
  "en": {
    "name": "Full name",
    "email": "Email",
    "phone": "Phone number",
    "message": "Message",
    "connect": "Connect with me"
  }
}
</i18n>
<template>
  <main class="main">
    <div class="container_fluid">
      <section class="contacts">
        <div class="contacts__left">
          <Map />
        </div>
        <div class="contacts__right">
          <div class="feedback">
            <h3 class="feedback__title">Заказать разработку</h3>

            <div class="feedback__form" target="_blank" action="lol.php">
              <div class="feedback__inputs">
                <TextBox :title="$t('name')" />
                <TextBox :title="$t('email')" />
                <TextBox :title="$t('phone')" />
                <TextArea :title="$t('message')" />
                <CheckBox :text="$t('connect')" />
              </div>

              <div class="feedback__button">
                <Button :theme="`coral`" size="medium" :radius="true">
                  {{ $t('addImg') }}
                </Button>
                <!-- <Button :theme="`coral`" :radius="true">Send</Button> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Title from '@/components/base/Title'
import Map from '@/components/base/Map'
import TextBox from '@/components/base/Form/TextBox'
import TextArea from '@/components/base/Form/TextArea'
import Button from '@/components/base/Form/Button'
import CheckBox from '@/components/base/Form/CheckBox'

export default {
  components: {
    Title,
    Map,
    TextBox,
    TextArea,
    Button,
    CheckBox
  },
  data () {
    return {
      title: 'Contacts',
      works: require('@/assets/json/work.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: calc(100% - 80px);
  min-height: 100%;
  .container_fluid {
    height: 100%;
    padding: 0;
  }
}

.contacts {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    width: 50%;
  }
  &__left {
    // background: #ececec;
  }
  &__right {
    background: #333333;
    padding: 50px;

    .feedback {
      &__title {
        color: #ececec;
      }

      &__button {
        padding-top: 20px;
        .button {
          min-width: 150px;
        }
      }
    }
  }
}
</style>
