export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    const a = 1 + 1;
    if (a) { resolve('Success!'); } else { reject(Error('Failure!')); }
  });
}
