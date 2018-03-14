<template>
  <v-container fluid> 
    <v-flex>
        <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="20"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="[v => !!v || 'Password is required']"
          type="password"
          required
        ></v-text-field>
        <v-checkbox
          label="Accept terms and Cotditions?"
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
        ></v-checkbox>

        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          Sign Up
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      password: '',
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>