let jobs = [];
function Job(id, title, description, completed) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.completed = completed;
}
function addJob() {
  let id = prompt("Nhập ID công việc:");
  let title = prompt("Nhập tiêu đề công việc:");
  let description = prompt("Nhập mô tả công việc:");
  let completed = prompt("Công việc đã hoàn thành? (true/false):") === 'true';
  let job = new Job(id, title, description, completed);
  jobs.push(job);
}
function printJobs() {
  jobs.forEach(job => {
    console.log(`ID: ${job.id}, Title: ${job.title}, Description: ${job.description}, Completed: ${job.completed}`);
  });
}
function findJobById() {
  let id = prompt("Nhập ID công việc cần tìm:");
  let job = jobs.find(job => job.id === id);
  if (job) {
    console.log(`Tìm thấy công việc: ID: ${job.id}, Title: ${job.title}, Description: ${job.description}, Completed: ${job.completed}`);
  } else {
    console.log("Không tìm thấy công việc với ID đã nhập.");
  }
}
function main() {
  let running = true;
  while (running) {
    let choice = prompt("Nhập lựa chọn của bạn (1: Thêm công việc, 2: In danh sách, 3: Tìm kiếm theo ID, 4: Thoát):");
    switch (choice) {
      case '1':
        addJob();
        break;
      case '2':
        printJobs();
        break;
      case '3':
        findJobById();
        break;
      case '4':
        running = false;
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
  }
}
main();
