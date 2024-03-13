// innerHTML:
// Thuộc tính innerHTML đọc cả nội dung văn bản và các thẻ HTML của phần tử.
// Khi bạn sử dụng innerHTML để đặt nội dung cho phần tử, bạn có thể bao gồm các thẻ HTML, và trình duyệt sẽ hiển thị chúng đúng cách.
// Tuy nhiên, hãy cẩn thận khi chèn nội dung từ nguồn không đáng tin cậy (ví dụ: đầu vào người dùng) bằng innerHTML, vì kẻ tấn công có thể sử dụng thẻ <script> để chèn mã độc hại vào ứng dụng của bạn.
// innerText:
// Thuộc tính innerText tập trung vào nội dung văn bản đã hiển thị.
// Khi bạn sử dụng innerText để đọc nội dung của một phần tử, nó trả về văn bản như nó xuất hiện trên màn hình, bỏ qua các thẻ HTML.
// Nó cũng không bao gồm văn bản bị ẩn bằng các kiểu CSS.
// Khi bạn cần xem xét các kiểu định dạng, hãy sử dụng innerText.
// textContent:
// Thuộc tính textContent cũng bỏ qua tất cả các thẻ HTML và chỉ trả về văn bản thuần túy.
// Khác với innerText, textContent đọc văn bản như nó xuất hiện trong mã nguồn, không quan tâm đến việc hiển thị trên màn hình.
// Nó cũng bao gồm tất cả văn bản, bất kể có hiển thị trên màn hình hay không.
// textContent không xem xét các kiểu định dạng, vì vậy trong các tình huống cần tối ưu hiệu suất và không cần xem xét kiểu định dạng, bạn có thể sử dụng textContent.