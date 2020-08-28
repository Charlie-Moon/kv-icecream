<template>
 <div :class="isOn ? 'show' : ''" class="screen">
   <Navbar />
   <Sidebar />
    <div class="py-5"></div>
    <main class="mt-5 mx-auto px-4 overflow-y-auto">
      
          <nuxt/>
  
    </main>
 
</div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';
import { mapState, mapActions } from "vuex";
export default {
  computed: {
      ...mapState('dashboard', ['isOn'])
  },
}
</script>