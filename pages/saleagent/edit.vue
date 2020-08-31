<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item active>ភ្នាក់ងារលក់</b-breadcrumb-item>
      <b-breadcrumb-item href="javascript:void(0)">ភ្នាក់ងារលក់ថ្មី</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="bg-white p-4 p-sm-5 mb-5">
      <div class="row">
        <div class="col-sm-5">
          <div class="b-aspect d-flex position-relative col-8 col-sm-4 mx-auto mb-5">
            <div class="b-aspect-sizer flex-grow-1" style="padding-bottom: 100%; height: 0px;"></div>
            <div class="b-aspect-content flex-grow-1 w-100 mw-100" style="margin-left: -100%;">
              <b-img
                src="https://townsquare.media/site/204/files/2020/03/taylor-swift-donates-to-fans-coronavirus.jpg"
                class="w-100 h-100 object-cover object-center rounded-circle"
              ></b-img>
            </div>
            <button type="button" aria-label="Close" class="close btn-close">×</button>
          </div>
        </div>
        <div class="col-sm-6"></div>
        <div class="col-sm-6">
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="រូបភាព"
            label-for="input-horizontal"
          >
            <!-- <b-form-input id="input-horizontal" size=""></b-form-input> -->
            <b-form-file accept=".jpg, .png, .gif"></b-form-file>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ភេទ"
            label-for="input-horizontal"
          >
            <b-form-select v-model="selected" :options="options">
              <b-form-select-option value="male">ប្រុស</b-form-select-option>
              <b-form-select-option value="female">ស្រី</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ឈ្មោះភ្នាក់ងារលក់"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" size></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="លេខទូរស័ព្ទ"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" size></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="អ៊ីមែល"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" size></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="អាសយដ្ឋាន"
            label-for="input-horizontal"
          >
            <b-form-textarea id="textarea" v-model="text" rows="3" max-rows="6"></b-form-textarea>
          </b-form-group>
        </div>
        <div class="col-sm-5 ml-auto">
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ម៉ាកយាន្តជំនិះ"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" size></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ប្រភេទភ្នាក់ងារលក់"
            label-for="input-horizontal"
          >
            <b-form-select :options="options">
              <b-form-select-option value="male">ម៉ូតូ</b-form-select-option>
              <b-form-select-option value="female"></b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ស្លាកលេខ"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" size></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label="ឯកសារភ្ជាប់"
            label-for="input-horizontal"
            class="icon-file"
          >
            <b-form-file multiple></b-form-file>
            <div class="d-inline-block mt-3">
              <span
                title="apple"
                class="badge b-form-tag d-inline-flex align-items-baseline mw-100 mr-1 badge-secondary"
                id="__BVID__553"
                aria-labelledby="__BVID__553__taglabel_"
              >
                <span
                  class="b-form-tag-content flex-grow-1 text-truncate"
                  id="__BVID__553__taglabel_"
                >Khmer ID.pdf</span>
                <button
                  aria-keyshortcuts="Delete"
                  type="button"
                  aria-label="Remove tag"
                  class="close b-form-tag-remove"
                  aria-controls="__BVID__553"
                  aria-describedby="__BVID__553__taglabel_"
                >×</button>
              </span>
              <span
                title="orange"
                class="badge b-form-tag d-inline-flex align-items-baseline mw-100 mr-1 badge-secondary"
                id="__BVID__554"
                aria-labelledby="__BVID__554__taglabel_"
              >
                <span
                  class="b-form-tag-content flex-grow-1 text-truncate"
                  id="__BVID__554__taglabel_"
                >Passpord.pdf</span>
                <button
                  aria-keyshortcuts="Delete"
                  type="button"
                  aria-label="Remove tag"
                  class="close b-form-tag-remove"
                  aria-controls="__BVID__554"
                  aria-describedby="__BVID__554__taglabel_"
                >×</button>
              </span>
              <span
                title="banana"
                class="badge b-form-tag d-inline-flex align-items-baseline mw-100 mr-1 badge-secondary"
                id="__BVID__555"
                aria-labelledby="__BVID__555__taglabel_"
              >
                <span
                  class="b-form-tag-content flex-grow-1 text-truncate"
                  id="__BVID__555__taglabel_"
                >Certificate.pdf</span>
                <button
                  aria-keyshortcuts="Delete"
                  type="button"
                  aria-label="Remove tag"
                  class="close b-form-tag-remove"
                  aria-controls="__BVID__555"
                  aria-describedby="__BVID__555__taglabel_"
                >×</button>
              </span>
            </div>
          </b-form-group>
          <b-form-group
            id="fieldset-vertical"
            class="align-items-center"
            label-cols="4"
            label="ស្ថានភាព"
            label-for="input-vertical"
          >
            <b-form-checkbox checked size="lg"></b-form-checkbox>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="bg-white p-3 p-sm-5 d-flex justify-content-end">
      <b-button-group>
        <nuxt-link to tag="button" class="btn btn-danger mr-4 rounded-sm">រក្សារទុក</nuxt-link>
        <nuxt-link to tag="button" class="btn btn-dark rounded-sm">បោះបង់</nuxt-link>
      </b-button-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>