<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Регистрация</span>
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
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Поле не должно быть пустым</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect lime auth-submit"
            type="submit"
            :disabled="disableButton"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators' 
import messages from '@/utils/messages'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false,
    disableButton: false
  }),
  validations: {
    email: {email, required}, //условия валидации
    password: {required, minLength: minLength(6)},
    name: {required},
    agree: {checked: v => v} //самописный валидатор
  },
  mounted() {
    if(messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    submitHandler() {

      this.disableButton = true //чтобы предотвратить повторную отправку

      if(this.$v.$invalid) {
        this.$v.$touch()
        return
    }
    const formData = {
      email: this.email,
      password: this.password,
      name: this.name
    }
    this.$router.push('/')
  }
    }
}
</script>