"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitAPI = exports.fetchAPI = void 0;

var seededRandom = function seededRandom(seed) {
  var m = Math.pow(2, 35) - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

var fetchAPI = function fetchAPI(date) {
  var result = [];
  var random = seededRandom(date.getDate());

  for (var i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }

  return result;
};

exports.fetchAPI = fetchAPI;

var submitAPI = function submitAPI(formData) {
  return true;
};

exports.submitAPI = submitAPI;