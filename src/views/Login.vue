<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Вход в систему</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        >
        <label for="email">Email</label>
        <small 
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small>
          <small 
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Неверный формат Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }"
        >
        <label for="password">Пароль</label>
        <small 
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Поле не должно быть пустым</small>
        <small 
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Длина пароля не может быть меньше {{$v.password.$params.minLength.min}} символов</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect lime auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import {mapActions} from 'vuex'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required}, //условия валидации
    password: {required, minLength: minLength(6)}
  },
  methods: {
    ...mapActions(["login"]),
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.login(formData)
        this.$router.push('/')
      } catch (error) {
        throw error
      }
    }
  }
}
</script>