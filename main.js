var container = document.querySelector(".container");
var btn = document.getElementById('spin');
var results = []; // Mảng chứa kết quả đã quay
var maxResults = 8; // Số lượng kết quả tối đa

btn.addEventListener("click", function(){
    var number = generateRandomNumber(); // Tạo số ngẫu nhiên mới

    container.style.transform = "rotate(" + number + "deg)";

    results.push(number); // Thêm kết quả mới vào mảng

    // Kiểm tra số lượng kết quả đã quay
    if (results.length >= maxResults) {
        results.shift(); // Xóa kết quả cũ nhất nếu đã quay đủ tối đa
        showCongratulation(); // Hiển thị hiệu ứng chúc mừng
    }
});

// Hàm tạo số ngẫu nhiên không trùng với kết quả đã quay trước đó
function generateRandomNumber() {
    var newNumber;
    do {
        newNumber = Math.ceil(Math.random() * 10000);
    } while (results.includes(newNumber)); // Kiểm tra xem số đã tồn tại trong mảng kết quả hay chưa

    return newNumber;
}

// Hàm hiển thị hiệu ứng chúc mừng
function showCongratulation() {
    // Tạo một phần tử div chứa nội dung chúc mừng
    var congratsDiv = document.createElement("div");
    congratsDiv.classList.add("congrats");
    congratsDiv.innerHTML = "Chúc mừng! Bạn đã quay đủ tám lượt.";

    // Thêm phần tử div vào body
    document.body.appendChild(congratsDiv);

    // Xóa phần tử div sau 3 giây
    setTimeout(function() {
        congratsDiv.remove();
    }, 3000);
}
