export function addEntry(entry) {
  localforage.setItem(Date.now(), entry).then(() => {
    console.log("Entry added")
  });
}

export function getEntryByDate(date) {
  var entries = [];
  localforage.iterate(function (value, key, iterationNumber) {
    if (value.date == date) {
      entries.push({
        key: key,
        value: value
      });
    }
    console.log([key, value]);
  }).then(function () {
    console.log('Iteration has completed');
    return entries;
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
    //TODO return null?
  });
}

export function getEntriesByMonth(month) {
  var entries = [];
  localforage.iterate(function (value, key, iterationNumber) {
    if (Date(month).getMonth() == Date(value.date).getMonth() ||
        Date(month).getYear() == Date(value.date).getYear()) {
      entries.push({
        key: key,
        value: value
      });
    }
    console.log([key, value]);
  }).then(function () {
    console.log('Iteration has completed');
    return entries;
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
    //TODO return null?
  });
}

export function removeEntryByKey(key) {
  localforage.removeItem(key).then(function () {
    // Run this code once the key has been removed.
    console.log('Key is cleared!');
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
    //TODO handle this
  });
}