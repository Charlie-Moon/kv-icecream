<template>

 <section class="product">
   <b-breadcrumb>
        <b-breadcrumb-item active>
        អតិថិជន
        </b-breadcrumb-item>
        <b-breadcrumb-item href="javascript:void(0)">មើលអតិថិជន</b-breadcrumb-item>
   </b-breadcrumb>

    <div class="thead bg-white p-4 mb-3 mb-sm-4 d-sm-flex flex-md-column flex-lg-row">
         <div class="text-center text-sm-left mb-4">
              <img src="https://townsquare.media/site/204/files/2020/03/taylor-swift-donates-to-fans-coronavirus.jpg" style="width: 100px; height: 100px;" class="mb-4 mb-sm-0 object-cover object-center rounded-circle">
        </div>
        <div class="d-flex flex-column flex-lg-row">
            <div class="d-sm-flex">
                <li class="d-sm-flex align-item-start list-unstyled">
                  
                    <div class="ml-lg-4">
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
            <div class="d-sm-flex">
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
    </div>

   <div class="thead bg-white p-4 d-sm-flex flex-md-column flex-lg-row">

      <div class="grid-group mb-4 mb-sm-0 px-0 col-lg-10">
        <div class="d-flex flex-column flex-lg-row grid-column-2 mb-4 mb-lg-0">
            <div class="input-group mb-4 mb-lg-0">
                <label for="basic-url" class="mb-3">ស្វែងរកតាមថ្ងៃ</label>
                <div class="input-group">
                    <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    
                </div>
            </div>
            <span class="align-self-start align-self-lg-end px-3">ដល់</span>
            
        </div>
        <div class="input-group mb-4 mb-lg-0">
                <label for="" class="mb-3 d-none d-lg-block">&nbsp;</label>
                <div class="input-group">
                    <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    
                </div>
            </div>
     
            <div class="input-group mb-4 mb-lg-0">
                <label for="basic-url" class="mb-3">ស្វែងរកភ្នាក់ងារលក់</label>
                <div class="input-group">
                     <b-form-select :options="options">
                        <b-form-select-option value="chamkamon">ខណ្ឌ ចំការមន</b-form-select-option>
                        <b-form-select-option value="meanchey">ខណ្ឌ មានជ័យ</b-form-select-option>
                        <b-form-select-option value="toulkork">ខណ្ឌ ទួលគក</b-form-select-option>
                      </b-form-select>
                </div>
            </div>
            <div class="input-group mb-4 mb-lg-0">
                <label for="" class="mb-3">ស្វែងរកតាមស្ថានភាព</label>
                <div class="input-group">
                    <input type="text" class="form-control border-right-0" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white border-left-0 rounded-right"><search /></span>
                    </div>
                </div>
            </div>
      

      </div>

      <div class="group-right d-flex d-lg-block ml-lg-auto">
          <h5 class="font-weight-bold">85</h5>
          <h5 class="font-weight-bold ml-3 ml-lg-0">ការស្នើរសរុប</h5>
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
        prop="id"
        label="លេខបញ្ជាទិញ"
        width="130px"
        >
      </el-table-column>
      <el-table-column
        prop="agt_name"
        label="ឈ្មោះ​ភ្នាក់ងារលក់"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="date"
        label="កាលបរិច្ឆេទបង្កើត"
        width="130px">
      </el-table-column>
       <el-table-column
        prop="time"
        label="ម៉ោងស្នើរសុំ">
      </el-table-column>
      <el-table-column
        prop="place"
        label="ទីតាំងការស្នើរសុំ"
        width="120px">
      </el-table-column>
     
      <el-table-column
        prop="cus_name"
        label="ឈ្មោះ​អតិថិជន"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="end"
        label="ម៉ោងបញ្ចប់">
        <span class="text-primary">2:30 PM</span>
      </el-table-column>
      <el-table-column
        prop="status"
        label="ស្ថានភាព"
        >
        <span class="text-primary">ជោគជ័យ</span>

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
          name: 'Thaily',
          phone: '0123456789',
          type: 'ម៉ូតូ',
          plate: '1GS-6181',
          request: '80',
          date: '27-05-2020',
        }, 
        ],
        selected: null,
        options: [
          { value: 'a', text: 'ខណ្ឌ ចំការមន' },
          { value: 'b', text: 'ខណ្ឌ មានជ័យ' },
          { value: 'c', text: 'ខណ្ឌ ទួលគក' },
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