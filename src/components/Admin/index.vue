<i18n>
{
  "en": {
    "authorization": "Авторизация",
    "login": "Логин",
    "password": "Пароль",
    "enter": "Войти"
  },
  "ru": {
    "authorization": "Authorization",
    "login": "Login",
    "password": "Password",
    "enter": "Login"
  }
}
</i18n>
<template>
  <main class="auth">
    <div class="auth__container">
      <div class="auth__login" v-if="isAuth">
        <div class="login__item">
          <h1>{{ userData.email }}</h1>
        </div>
        <div class="login__item">
          <h1>{{ userData.uid }}</h1>
        </div>

        <router-link :to="{name: 'AddWork'}">Добавление работы</router-link>
        <router-link :to="{name: 'AddTech'}">Добавление технологии</router-link>
      </div>
      <form class="auth__login" v-else>
        <div class="login__item">
          <h1>{{ $t('authorization') }}</h1>
        </div>
        <div class="login__item">
          <TextBox v-model="username" :required="true" type="text" :title="$t('login')" />
        </div>
        <div class="login__item">
          <TextBox v-model="password" :required="true" type="password" :title="$t('password')" />
        </div>
        <div class="login__item login__item_buttons" @click="authUser()">
          <Button :theme="`coral`" :radius="true">{{ $t('enter') }}</Button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import TextBox from "@/components/base/Form/TextBox";
import Button from "@/components/base/Form/Button";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    TextBox,
    Button
  },
  data() {
    return {
      username: null,
      password: null,
      userAuth: null
    };
  },
  computed: {
    ...mapState("user", ["userData", "isAuth"]),
  },
  methods: {
    ...mapActions("user", ["authUserAction"]),
    async authUser() {
      this.authUserAction({
        email: this.username,
        password: String(this.password)
      })
        .then(res => this.$localStorage.set('token', res.token))
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  width: calc(100% - 260px);
  position: relative;
  overflow: hidden;
  // height: 100%;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  &__login {
    width: 360px;
    padding: 20px;
    border-radius: 6px;
    background: #333333;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08),
      0 1px 3px 1px rgba(0, 0, 0, 0.16);
  }
  .login {
    &__item {
      &_buttons {
        padding-top: 40px;
      }
    }
  }
}
</style>
