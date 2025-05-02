export default {
  showRegion({ commit }, data) {
    return (
      this.$axios.$get(
        "https://dev.khoomkha.com/supplier/api/v1/MasterData/Regions?countryCode=TH&languageCode=TH"
      ),
      {
        withCredentials: true,
      }
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((err) => {
          return Promise.reject(err);
        })
    );
  },
  provinceApi({ commit }, data) {
    return this.$axios
      .$post(
        `https://dev.khoomkha.com/supplier/api/v1/MasterData/Provinces?regionId=${data.regionId}&languageCode=TH`,
        data
      )
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  districtApi({ commit }, data) {
    return this.$axios
      .$get(
        `https://dev.khoomkha.com/supplier/api/v1/MasterData/Districts?provinceId=${data.district}&languageCode=TH`
      )
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  subdistrictApi({ commit }, data) {
    return this.$axios
      .$get(
        `https://dev.khoomkha.com/supplier/api/v1/MasterData/Provinces?regionId=${data.subDis}&languageCode=TH`
      )
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
