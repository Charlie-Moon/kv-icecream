<template>

 <section class="product">
   <h4 class="mb-4 font-weight-bold">ផលិតផល</h4>
   <div class="thead bg-white p-4 pr-lg-5 d-sm-flex justify-content-between align-items-center">

      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-4">
        <label for="basic-url">ស្វែងរកតាមឈ្មោះផលិតផល</label>
        <div class="input-group">
          <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
          </div>
        </div>
      </div>

      <nuxt-link to="/product/add" tag="button" class="btn btn-danger d-flex justify-content-center align-items-center">
        <plus /> <span class="ml-2">ផលិតផលថ្មី</span>
      </nuxt-link>

   </div>
   
   <div class="table bg-white table-responsive-lg">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="#"
        width="80">
      </el-table-column>
      <el-table-column
        prop="image"
        label="រូបភាព"
        >
        <b-img src="/images/img-1.png" fluid class="img-circle-10" alt="Responsive image"></b-img>
      </el-table-column>
      <el-table-column
        prop="name"
        label="ឈ្មោះ​ផលិតផល">
      </el-table-column>
      <el-table-column
        prop="price"
        label="តម្លៃ">
      </el-table-column>
      <el-table-column
        prop="code"
        label="លេខកូដ">
      </el-table-column>
      <el-table-column
        prop="status"
        label="ស្ថានភាព">
        <b-form-checkbox v-model="checked" name="check-button" switch>
          
        </b-form-checkbox>
      </el-table-column>
      <el-table-column
        prop="date"
        label="កាលបរិច្ឆេទបង្កើត">
      </el-table-column>
      <el-table-column
        prop="option"
        width="80"
        >
        <b-dropdown id="dropdown-1" dropright text="Drop-Right" variant="link" toggle-class="text-decoration-none" no-caret class="m-md-2">
          <template v-slot:button-content>
           <ellish/>
          </template>
          <b-dropdown-item>
            <edit /> <span class="ml-2">កែសម្រួល</span>
          </b-dropdown-item>
          <b-dropdown-item>
            <delete /> <span class="ml-2">លុប</span>
          </b-dropdown-item>
        </b-dropdown>
      </el-table-column>
    </el-table>
  </div>

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
          address: 'No. 189, Grove St, Los Angeles',
          name: 'Scoop Bucket',
          price: '$ 2.00',
          code: '0001',
          date: '27-05-2020',
        }, 
        ]
      }
    },
    methods: {
      
    }
}

</script>