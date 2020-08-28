<template>

 <section class="product">
   <b-breadcrumb>
        <b-breadcrumb-item active>
        អតិថិជន
        </b-breadcrumb-item>
        <b-breadcrumb-item href="javascript:void(0)">មើលអតិថិជន</b-breadcrumb-item>
   </b-breadcrumb>

    <div class="thead bg-white p-4 mb-3 mb-sm-4 d-sm-flex justify-content-between">
         <div class="text-center text-sm-left">
            <img src="/images/usercircle.png" class="mb-4 mb-sm-0 rounded-circle">
        </div>
        <div class="d-sm-flex justify-content-between">
             <li class="d-sm-flex align-item-start list-unstyled">
               
                <div class="media-body ml-sm-4">
                    <dl class="row">
                        <dt class="col-5 col-sm-4 mb-3">ឈ្មោះអតិថិជន</dt>
                        <dd class="col-5 col-sm-8">Thaily</dd>

                        <dt class="col-5 col-sm-4 mb-3">លេខទូរស័ព្ទ</dt>
                        <dd class="col-5 col-sm-8">
                        0123456789
                        </dd>

                        <dt class="col-5 col-sm-4 mb-3">ភេទ</dt>
                        <dd class="col-5 col-sm-8">ស្រី</dd>

                        <dt class="col-5 col-sm-4 mb-3">អាយុ</dt>
                        <dd class="col-5 col-sm-8">25</dd>
                    
                    </dl>
                </div>
            </li>

        </div>
        <div class="d-sm-flex justify-content-between">
            <dl class="row no-gutters">
                <dt class="col-5 col-sm-4 mb-3">មុខរបរ</dt>
                <dd class="col-5 col-sm-8">បុគ្គលិកក្រុមហ៊ុនឯកជន</dd>

                <dt class="col-5 col-sm-4 mb-3">សង្កាត់</dt>
                <dd class="col-5 col-sm-8">
                ផ្សារ​ដេប៉ូទី២
                </dd>

                <dt class="col-5 col-sm-4 mb-3">ខណ្ឌ</dt>
                <dd class="col-5 col-sm-8">ខណ្ឌទួលគោក</dd>

                <dt class="col-5 col-sm-4 mb-3">រាជធានី/ខេត្ត</dt>
                <dd class="col-5 col-sm-8">រាជធានីភ្នំពេញ</dd>
            
            </dl>
           
        </div>
         <dl class="d-sm-flex">
            <dt>
                 <div class="custom-control custom-checkbox label-left">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck">ស្ថានភាព</label>
                </div>
            </dt>
                
         </dl>
    </div>

   <div class="thead bg-white p-4 pr-sm-5 d-sm-flex justify-content-between align-items-center">

      <div class="grid-group mb-4 mb-sm-0 px-0 col-sm-9">
        <div class="d-flex mb-4 mb-sm-0 grid-column-2">
            <div class="input-group">
                <label for="basic-url" class="mb-3">ស្វែងរកតាមថ្ងៃ</label>
                <div class="input-group">
                    <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
                    </div>
                </div>
            </div>
            <span class="align-self-end px-3">ដល់</span>
            
        </div>
        <div class="input-group">
                <label for="" class="mb-3 d-none d-sm-block">&nbsp;</label>
                <div class="input-group">
                    <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
                    </div>
                </div>
            </div>
     
            <div class="input-group">
                <label for="basic-url" class="mb-3">ស្វែងរកតាមថ្ងៃ</label>
                <div class="input-group">
                    <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
                    </div>
                </div>
            </div>
            <div class="input-group">
                <label for="" class="mb-3">ស្វែងរកតាមស្ថានភាព</label>
                <div class="input-group">
                    <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
                    </div>
                </div>
            </div>
      

      </div>

      <div class="group-right">
          <h5 class="font-weight-bold">85</h5>
          <h5 class="font-weight-bold">ការស្នើរសរុប</h5>
      </div>

   </div>
   
   <div class="table table-responsive-sm bg-white">
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
        <b-form-checkbox v-model="checked1" name="check-button" switch>
          
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
<script>
export default {
    
}
</script>