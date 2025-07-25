// export default async function handler(req, res) {
//   fetchWeather(req, res);
// }

import getWeather from "@/pages/controllers/getWeather";

export default async function handler(req, res) {
  getWeather(req, res);
}
