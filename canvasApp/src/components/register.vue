<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-text-field
                                prepend-icon="person"
                                name="name"
                                label="Name"
                                type="text"
                                v-model="name"
                                :rules="requiredRules"
                                required
                        ></v-text-field>
                        <v-text-field
                                prepend-icon="email"
                                name="email"
                                label="Email"
                                type="email"
                                :rules="emailRules"
                                v-model="email"
                                required
                        ></v-text-field>
                        <v-text-field
                                id="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                v-model="password"
                                :rules="passwordRules"
                                type="password"
                                required
                        ></v-text-field>
                        <v-text-field
                                id="cpassword"
                                prepend-icon="lock"
                                name="cpassword"
                                label="Confirm Password"
                                v-model="cpassword"
                                :rules="cpasswordRules"
                                type="password"
                                required
                        ></v-text-field>
                        <v-text-field
                                id="phonenumber"
                                prepend-icon="phone"
                                name="phone"
                                label="Phone Number"
                                v-model="phone"
                                :rules="cpasswordRules"
                                type="password"
                                required
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Sign Up</v-btn>
                    <v-btn color="primary">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: "register",
        data() {
            return {
                valid: false,
                emailRules: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                cpasswordRules: [
                    v => !!v || "Confirm password is required",
                    v => v === this.password || "Password is not matching"
                ],
                requiredRules: [v => !!v || "User name is required"],
                passwordRules: [v => v.length > 0 || "Password is required"],
                email: "",
                password: "",
                name: "",
                phone:"",
                cpassword: ""
            };
        },
        methods: {}
    };
</script>
