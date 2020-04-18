export const ConsentReadMock = {
  id: 0,
  name: 'Slava P',
  email: 'kainsp92@gmail.com',
  consentsGivenFor: 'Recieive newsletter, Be shown targeted ads, Contribute to anonymous visit statistics'
};

export const ConsentWriteMock = {
  id: 0,
  name: 'Slava P',
  email: 'kainsp92@gmail.com',
  consentsGivenFor: [
    {
      label: 'Recieive newsletter',
      checked: true
    },
    {
      label: 'Be shown targeted ads',
      checked: false
    },
    {
      label: 'Contribute to anonymous visit statistics',
      checked: false
    }
  ]
};
