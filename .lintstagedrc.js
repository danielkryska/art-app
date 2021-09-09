module.exports = {
  "src/**/*.js": [
    "npm run lint",
    "npm run test:related"
  ],
  "src/*.js": [
    "npm run lint",
    "npm run test:related"
  ],
};