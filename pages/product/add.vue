<template>
    <div>
       <b-breadcrumb>
            <b-breadcrumb-item active>
            ផលិតផល
            </b-breadcrumb-item>
            <b-breadcrumb-item href="javascript:void(0)">ផលិតផលថ្មី</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="bg-white p-4 p-sm-5 mb-5">
            
               <div class="row">
                   <div class="col-sm-6">
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="រូបភាព"
                        label-for="input-horizontal"
                        >
                        <!-- <b-form-input id="input-horizontal" size=""></b-form-input> -->
                        <b-form-file multiple ></b-form-file>
                        </b-form-group>
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="ឈ្មោះ"
                        label-for="input-horizontal"
                        >
                        <b-form-input id="input-horizontal" size=""></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="តម្លៃ"
                        label-for="input-horizontal"
                        >
                        <b-form-input id="input-horizontal" size=""></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="លេខកូដ"
                        label-for="input-horizontal"
                        >
                        <b-form-input id="input-horizontal" size=""></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="fieldset-vertical"
                        class="align-items-center"
                        label-cols="4"
                        label="បង្ហាញ"
                        label-for="input-vertical"
                        >
                        <b-form-checkbox checked size="lg"></b-form-checkbox>
                        </b-form-group>
                   </div>
                   <div class="col-sm-3">
                       <div class="b-aspect d-flex position-relative">
                            <div class="b-aspect-sizer flex-grow-1" style="padding-bottom: 100%; height: 0px;"></div><div class="b-aspect-content flex-grow-1 w-100 mw-100" style="margin-left: -100%;">
                                <b-img src="/images/ice-cream.png" class="w-100 h-auto object-cover object-center"></b-img>
                            </div>
                                <button type="button" aria-label="Close" class="close btn-close">×</button>

                        </div>
                   </div>
               </div>
        

        </div>
        <div class="bg-white p-3 p-sm-5 d-flex justify-content-end">
            <b-button-group>
                <nuxt-link to="" tag="button" class="btn btn-danger mr-4 rounded-sm">រក្សារទុក</nuxt-link>
                <nuxt-link to="" tag="button" class="btn btn-dark rounded-sm">បោះបង់</nuxt-link>
            </b-button-group>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        checked: true,
      }
    },
}
</script>