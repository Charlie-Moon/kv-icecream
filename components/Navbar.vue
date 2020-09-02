<template>

    <b-navbar toggleable="lg" type="light" class="bg-white pr-lg-4 py-3 fixed-top">
            <div class="item-logo d-flex justify-content-between align-items-center pl-lg-4 navbar-light">
                    <div class="d-none d-sm-block">
                        <logo />
                    </div>
                    <button @click="toggleDashboard" class="border-0 btn ml-3">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
        <!-- <b-navbar-toggle @click="isOn = !isOn"></b-navbar-toggle> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto align-items-center justify-content-end flex-row col pl-3 pl-md-0 px-0 col-sm">
                <b-nav-form>
                    <div class="input-group">
                        <div class="input-group-prepend align-items-center mr-lg-3">
                        
                            <search />
                        
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="ស្វែងរក">
                    </div>
                </b-nav-form>
                <b-nav-item class="ml-lg-2 mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </b-nav-item>
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    អ្នកគ្រប់គ្រង
                </template>
                <b-dropdown-item href="#">ព័ត៌មានផ្ទាល់ខ្លួន</b-dropdown-item>
                <b-dropdown-item href="#">ចាកចេញ</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item class="ml-2 ml-lg-0">

                    <user/>

                </b-nav-item>

            </b-navbar-nav>
    </b-navbar>
       
</template>
<script>
import Logo from '~/components/svg/logo.vue';
import Search from '~/components/svg/search.vue';
import User from '~/components/svg/user.vue';
 import { mapState, mapActions } from "vuex";
 export default {
    methods: {
        ...mapActions('dashboard', ['toggleDashboard'])
    },
}
</script>