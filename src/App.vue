<!-- <template>
  <div class="container pt-1">
    <async-component></async-component>
    <div class="card">
      <h2>Dynamic components</h2>
      <button :class="active === 'one' ? 'active' : ''" @click="active = 'one'">One</button>
      <button :class="active === 'two' ? 'active' : ''" @click="active = 'two'">Two</button>
      <keep-alive>
      <component :is="activeComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue'
export default defineComponent({
  components: { AppTextOne, AppTextTwo },
  setup() {
  let active = ref('one');
  const activeComponent = computed(() => {
    // if (active.value === 'one') {
    //   return "app-text-one"
    // }
    // else if (active.value === 'two') {
    //   return "app-text-two"
    // }
    return `app-text-${active.value}`
  });
  return { active, activeComponent }
  },
})
</script>

<style scoped>
.active {
  background-color: green;
}
</style>
 -->
<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>

      <app-input
        placeholder="Введи имя"
        :error="state.errors.name"
        label="Как тебя зовут?"
        v-model="state.inputName"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
        type="number"
        id="age"
        v-model.number="state.age">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="state.city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="state.relocate" name="trip" value="Yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="state.relocate" name="trip" value="No"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="state.vueSkills" value="Vuex" name="skills"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="state.vueSkills" value="Vue CLI" name="skills"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="state.vueSkills" value="Vue Router" name="skills"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Примите условия использования сервиса</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="state.usageConditions"/> С правилами использования сервиса согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive} from 'vue';
import AppInput from './AppInput.vue';
 export default defineComponent({
  components: {
    AppInput,
  },
  setup() {
    const state = reactive({
      inputName: "",
      age: 23,
      city: 'nsk',
      relocate: null,
      vueSkills: [],
      usageConditions: false,
      errors: {
        name: null
      }
    })
    // const inputName = ref("")
    //   const age = ref(23)
    //   const city = ref('nsk');
    //   const relocate = ref(null);
    //   const vueSkills = ref([]);
    //   const usageConditions = ref(false)

  function formIsValid() {
    let isValid = true;
    if (state.inputName.length === 0) {
      state.errors.name = "Имя не может быть пустым"
      isValid = false;
    }
    else {
      state.errors.name = null;
    }
    return isValid
  }


  function submitForm() {
    if (formIsValid()) {
    console.group("Form data")
    console.log("name", state.inputName);
    console.log("age", state.age);
    console.log("city", state.city);
    console.log("relocate", state.relocate);
    console.log("vueskills", state.vueSkills);
    console.log("agreement", state.usageConditions);
    console.groupEnd()
    }
  }

  return {
    submitForm,
    formIsValid,
    state,
  }
}
  })
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border-color: red;
}
</style>
