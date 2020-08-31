<template>
  <section class="product">
    <h4 class="mb-4 font-weight-bold">ភ្នាក់ងារលក់</h4>
    <div class="thead bg-white p-4 pr-lg-5 d-sm-flex justify-content-between align-items-center">
      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-3">
        <label for="basic-url">ស្វែងរកតាមឈ្មោះផលិតផល</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control border-right-0"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-left-0 rounded-right">
              <search />
            </span>
          </div>
        </div>
      </div>
      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-2 ml-sm-4">
        <label for="basic-url">ស្វែងរកតាមទីតាំង</label>
        <div class="input-group">
          <select class="custom-select" id="__BVID__43">
            <option value>ខណ្ឌ ចំការមន</option>
            <option value="a">ខណ្ឌ មានជ័យ</option>
            <option value="b">ខណ្ឌ ទួលគក</option>
          </select>
        </div>
      </div>
      <div class="input-group mb-4 mb-sm-0 px-0 col-sm-2 mr-auto ml-sm-4">
        <label for="basic-url">ស្វែងរកប្រភេទភ្នាក់ងារលក់</label>
        <div class="input-group">
          <select class="custom-select" id="__BVID__43">
            <option value>ទាំងអស់</option>
            <option value="a">ខណ្ឌ មានជ័យ</option>
            <option value="b">ខណ្ឌ ទួលគក</option>
          </select>
        </div>
      </div>

     <div class="d-sm-flex col-lg-4 px-0">
        <nuxt-link
          to="/saleagent/add"
          tag="button"
          class="btn w-100 mb-4 mb-sm-0 btn-danger d-flex justify-content-center align-items-center"
        >
          <plus />
          <span class="ml-2">ភ្នាក់ងារលក់ថ្មី</span>
        </nuxt-link>
        <nuxt-link
          to="/saleagent/add"
          tag="button"
          class="btn w-100 btn-danger d-flex justify-content-center align-items-center ml-sm-3"
        >
          <download />
          <span class="ml-2">ទាញយក</span>
        </nuxt-link>
     </div>
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
        width="80px"
        >
        <b-img src="/images/user-1.png" fluid class="rounded-circle" alt="Responsive image"></b-img>
      </el-table-column>
      <el-table-column
        prop="name"
        label="ឈ្មោះ​ភ្នាក់ងារលក់"
        width="180px">
      </el-table-column>
       <el-table-column
        prop="phone"
        label="លេខទូរស័ព្ទ">
      </el-table-column>
      <el-table-column
        prop="type"
        label="ប្រភេទអ្នកលក់">
      </el-table-column>
     
      <el-table-column
        prop="plate"
        label="ស្លាកលេខ">
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
        label="កាលបរិច្ឆេទបង្កើត"
        width="130px">
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
            <eye /> <span class="ml-2">មើល</span>
          </b-dropdown-item>
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
import Navbar from "~/components/svg/ellish.vue";
import Edit from "~/components/svg/edit.vue";
import Delete from "~/components/svg/delete.vue";
import Plus from "~/components/svg/plus.vue";
import Download from "~/components/svg/download.vue";
import { Table, TableColumn } from "element-ui";

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
          name: 'Thaily',
          phone: '0123456789',
          type: 'ម៉ូតូ',
          plate: '1GS-6181',
          request: '80',
          date: '27-05-2020',
        }, 
      ],
    };
  },
  methods: {},
};
</script>