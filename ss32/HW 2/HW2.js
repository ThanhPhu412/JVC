let information = {
    id: 1,
    name: 'Name',
    phone: '0123456789',
    address: 'Address'
};
delete information.address;
information.email = 'email@example.com';
console.log(information);
