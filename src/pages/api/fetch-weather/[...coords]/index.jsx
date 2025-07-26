// export default async function handler(req, res) {
//   fetchWeather(req, res);
// }

import getWeather from "../../../../lib/getWeather";

export default async function handler(req, res) {
  getWeather(req, res);
}
