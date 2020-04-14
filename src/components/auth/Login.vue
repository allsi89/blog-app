<template>
    <div>
      <v-card class="px-12 center"  max-width="460px" min-width="300px">
        <v-card-text>
      <v-icon large>mdi-account</v-icon>
      <div class="caption py-2">Login</div>
          <v-form ref="loginForm" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  type="password"
                  :error-messages="passwordErrors"
                  label="Password"
                  hint="Must be between 6 and 12 characters"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                <v-btn x-large block color="success" :disabled="isDisabled()" @click.prevent="submit">Login</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [validationMixin],
  data: function() {
    return {
      valid: true,
      email: "",
      password: ""
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long!");
      !this.$v.password.maxLength &&
        errors.push("Password must be no longer than 12 characters!");
      return errors;
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(12) }
  },
  methods: {
    submit() {
       if (this.$v.$error) {
        return;
      }
      this.$v.$touch();
      console.log("Form was submitted!");
      this.success = true;
    },
    isDisabled() {
      if (this.$v.$dirty) {
        return this.$v.$error;
      } else {
          return !this.$v.$error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center{
   align-self: center;
}
</style>