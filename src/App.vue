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
      <div class="form-control">
        <label for="name">Как тебя зовут?</label>
        <input
        type="text"
        id="name"
        placeholder="Введи имя"
        v-model.trim="inputName"
        >
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
        type="number"
        id="age"
        v-model="age">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox"/> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref} from 'vue'
 export default defineComponent({
  setup() {
    const inputName = ref("")
      const age = ref(23)
      // city: 'nsk',
      // trip: '',
      // vueSkills: [],


  function submitForm() {
    console.group("Form data")
    console.log("name", inputName.value);
    console.log("age", age.value);
    console.groupEnd()
  }

  return {submitForm, age, inputName}
}
  })
</script>

<style>

</style>
