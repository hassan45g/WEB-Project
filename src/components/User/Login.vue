<template>
  <v-container>
    <v-flex md6 sm8 offset-md3 row justify-center="">
      <v-form @submit.prevent="valid">
        <v-text-field
          label="Email"
          v-model="email"
          :counter="50"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          required
        ></v-text-field>
        <v-btn>
          Submit
        </v-btn>
      </v-form>
    </v-flex>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      password: ''
    })
  }
</script>