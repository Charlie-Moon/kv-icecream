<template>
    <div>
       <b-breadcrumb>
            <b-breadcrumb-item active>
            សំណួរវាយតម្លៃ
            </b-breadcrumb-item>
            <b-breadcrumb-item href="javascript:void(0)">សំណួរវាយតម្លៃថ្មី</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="bg-white p-4 p-sm-5 mb-5">
            
               <div class="row">
                   <div class="col-sm-5">
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="សំណួរវាយតម្លៃ"
                        label-for="input-horizontal"
                        >
                        <b-form-input id="input-horizontal" size=""></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="fieldset-horizontal"
                        label-cols-sm="4"
                        label="ចំណាំ"
                        label-for="input-horizontal"
                        >
                        <b-form-textarea id="input-horizontal" rows="3" max-rows="6"></b-form-textarea>
                        </b-form-group>
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