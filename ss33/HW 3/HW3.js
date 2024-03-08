var phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123–456–7890",
        email: "alice@example.com",
    },
    contact2: {
        name: "Bob",
        phone: "987–654–3210",
        email: "bob@example.com",
    },
};

// Duyệt qua danh bạ và hiển thị thông tin
for (var contactKey in phoneBook) {
    var contact = phoneBook[contactKey];
    console.log("Tên: " + contact.name);
    console.log("Điện thoại: " + contact.phone);
    console.log("Email: " + contact.email);
    console.log("\n");
}
