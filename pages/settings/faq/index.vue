<template>

 <section class="product">
    <b-breadcrumb>
        <b-breadcrumb-item active>
        សំណួរវាយតម្លៃ
        </b-breadcrumb-item>
    </b-breadcrumb>
   <div class="thead bg-white p-4 d-sm-flex justify-content-between align-items-center">

      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-4">
        <label for="basic-url">ស្វែងរក</label>
        <div class="input-group">
          <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
          </div>
        </div>
      </div>

      <nuxt-link to="/settings/faq/add" tag="button" class="btn btn-danger d-flex justify-content-center align-items-center">
        <plus /> <span class="ml-2">សំណួរវាយតម្លៃ</span>
      </nuxt-link>

   </div>
   
   <div class="table bg-white table-responsive">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="#"
        width="80">
      </el-table-column>
     
      <el-table-column
        prop="name"
        label="សំណួរវាយតម្លៃ">
      </el-table-column>
      <el-table-column
        prop="note"
        label="ចំណាំ">
      </el-table-column>
      
      <el-table-column
        prop="option"
        width="80"
        >
        <b-dropdown id="dropdown-1" dropright text="Drop-Right" variant="link" toggle-class="text-decoration-none" no-caret class="m-md-2">
          <template v-slot:button-content>
           <ellish/>
          </template>
          <b-dropdown-item to="/settings/faq/edit">
            <edit /> <span class="ml-2">កែសម្រួល</span>
          </b-dropdown-item>
          <b-dropdown-item v-b-modal.modal-1>
            <delete /> <span class="ml-2">លុប</span>
          </b-dropdown-item>
        </b-dropdown>
      </el-table-column>
    </el-table>
  </div>
  <b-modal id="modal-1" hide-footer>
    <p class="my-4 h4 text-center"><alert /><strong class="ml-2">បញ្ជាក់</strong></p>
    <h5 class="text-center">តើអ្នកពិតជាចង់លុបភ្នាក់ងារនេះ?</h5>
    <h5 class="text-center">Thaily</h5>
    <div class="text-center my-3 btn-groups">
      <button class="btn btn-dark">យល់ព្រម</button>
      <button class="btn btn-danger ml-3">បោះបង់</button>
    </div>
  </b-modal>
 </section>
  
</template>
<script>
import Navbar from '~/components/svg/ellish.vue';
import Edit from '~/components/svg/edit.vue';
import Delete from '~/components/svg/delete.vue';
import Plus from '~/components/svg/plus.vue';
import { Table, TableColumn, } from 'element-ui'

export default {
    components: {
      Table,
      TableColumn,
    },
    data() {
      return {
        checked: false,
        tableData: [{
          num: '1',
          name: 'ម៉ូតូ',
          note: '0001',
        }, 
        ]
      }
    },
    methods: {
      
    }
}

</script>