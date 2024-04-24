export default function getResponseFromAPI(success) {
  const pr = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    else reject(Error('The fake API is not working currently'));
  });
  pr
    .then(() => 'Yay')
    .catch(() => 'Nay');

  return pr;
}
