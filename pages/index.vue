<template>
  <div class="mt-10 mx-auto">
    <template class="">
      <v-sheet class="mx-auto" width="500">
        <v-form class="form-input">
          <v-row>
            <v-col cols="12" md="12" class="">
              <v-text-field
                v-model="addNo"
                label="ที่อยู่"
                outlined
                hide-details
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-select v-model="region" label="ภาค" outlined hide-details>
              </v-select>
            </v-col>
            <v-col cols="12" md="12">
              <v-select
                v-model="province"
                label="จังหวัด"
                outlined
                hide-details
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="12">
              <v-select v-model="district" label="อำเภอ" outlined hide-details>
              </v-select>
            </v-col>
            <v-col cols="12" md="12">
              <v-select v-model="subDis" label="ตำบล" outlined hide-details>
              </v-select>
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea
                v-model="myAddress"
                label="ที่อยู่ของฉัน"
                outlined
                hide-details
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </template>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      addNo: "",
      region: "",
      province: "",
      district: "",
      subDis: "",
      myAddress: "",
      dataRegion: "",
      regionItem: [],
    };
  },
  async mounted() {
    // await this.getRegion()
  },
  methods: {
    ...mapActions({
      showRegion: "users/showRegion",
      provinceApi: "users/province",
      districtApi: "users/district",
      subdistrictApi: "users/subdistrict",
    }),
    async getRegion() {
      let data = await this.showRegion();

    },
  },
};
</script>

<style></style>
