import { fixerKey } from "../config/fixer-key";

const urls = {
  basic: "http://data.fixer.io/api/",
};

export const Api = {
  getRatest() {
    return fetch(urls.basic + "latest?" + "access_key=" + fixerKey);
  },
};
