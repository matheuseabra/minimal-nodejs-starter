/* eslint-disable no-console */
const api = require('./api');

const PORT = process.env.PORT || 4444;

api.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
