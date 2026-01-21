module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
