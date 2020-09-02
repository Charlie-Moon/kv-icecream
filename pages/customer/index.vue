<template>

 <section class="product">
   <h4 class="mb-4 font-weight-bold">អតិថិជន</h4>
   <div class="thead bg-white p-4 d-sm-flex justify-content-between align-items-center">

      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-4">
        <label for="basic-url">ស្វែងរកតាមឈ្មោះផលិតផល</label>
        <div class="input-group">
          <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
          </div>
        </div>
      </div>
      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-3 mr-auto ml-sm-4">
        <label for="basic-url">ស្វែងរកតាមទីតាំង</label>
        <div class="input-group">
           <b-form-select :options="options">
              <b-form-select-option value="chamkamon">ខណ្ឌ ចំការមន</b-form-select-option>
              <b-form-select-option value="meanchey">ខណ្ឌ មានជ័យ</b-form-select-option>
              <b-form-select-option value="toulkork">ខណ្ឌ ទួលគក</b-form-select-option>
            </b-form-select>
        </div>
      </div>

      <nuxt-link to="" tag="button" class="btn btn-danger d-flex justify-content-center align-items-center">
        <download /> <span class="ml-2">ទាញយក</span>
      </nuxt-link>

   </div>
   
   <div class="table table-responsive bg-white">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="#"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="image"
        label="រូបភាព"
        width="100px"
        >
        <b-img src="/images/img-1.png" fluid class="img-circle-10" alt="Responsive image"></b-img>
      </el-table-column>
      <el-table-column
        prop="cus_id"
        label="លេខសំគាល់អតិថិជន"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="ឈ្មោះ​ផលិតផល">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="លេខទូរស័ព្ទ">
      </el-table-column>
      <el-table-column
        prop="request"
        label="ការស្នើសុំសរុប">
      </el-table-column>
      <el-table-column
        prop="status"
        label="ស្ថានភាព"
        >
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
          <b-dropdown-item to="/customer/1">
            <eye /> <span class="ml-2">មើល</span>
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
    <h5 class="text-center">តើអ្នកពិតជាចង់លុបអតិថិជននេះ?</h5>
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
import Eye from '~/components/svg/eye.vue';
import Download from '~/components/svg/download.vue';
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
          cus_id: 'A001',
          name: 'Thaily',
          phone: '0123456789',
          request: '80',
          date: '27-05-2020',
        }, 
        ],
        selected: null,
        options: [
          { value: null, text: 'ខណ្ឌ ចំការមន' },
          { value: 'a', text: 'ខណ្ឌ មានជ័យ' },
          { value: 'b', text: 'ខណ្ឌ ទួលគក' },
        ]
      }
    },
    methods: {
      
    }
}

</script>