document.getElementById("addRoundBtn").addEventListener("click", function () {
  var roundCount = document.querySelectorAll("tbody tr").length - 1;
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
      <th scope="row">Round ${roundCount}</th>
      <td><input class="input1" type="number" value="0" /></td>
      <td><input class="input2" type="number" value="0" /></td>
      <td><input class="input3" type="number" value="0" /></td>
      <td><input class="input4" type="number" value="0" /></td>
    `;
  document.querySelector("tbody").appendChild(newRow);

  updateSum(); // Cập nhật tổng sau khi thêm hàng mới

  // Lắng nghe sự kiện khi người dùng thay đổi giá trị trong ô input
  newRow.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("change", function () {
      updateSum();
    });
  });
});

function updateSum() {
  var sumInput1 = 0;
  var sumInput2 = 0;
  var sumInput3 = 0;
  var sumInput4 = 0;

  // Lặp qua tất cả các hàng trừ hàng tổng
  var rows = document.querySelectorAll("tbody tr:not(.sumPoint)");
  rows.forEach(function (row) {
    var input1 = parseInt(row.querySelector(".input1").value);
    var input2 = parseInt(row.querySelector(".input2").value);
    var input3 = parseInt(row.querySelector(".input3").value);
    var input4 = parseInt(row.querySelector(".input4").value);

    sumInput1 += input1;
    sumInput2 += input2;
    sumInput3 += input3;
    sumInput4 += input4;
  });

  // Cập nhật tổng vào các ô tương ứng
  document.querySelector(".sumInput1").textContent = sumInput1;
  document.querySelector(".sumInput2").textContent = sumInput2;
  document.querySelector(".sumInput3").textContent = sumInput3;
  document.querySelector(".sumInput4").textContent = sumInput4;

  // Tính tổng các ô và gán vào ô tổng
  var totalSum = sumInput1 + sumInput2 + sumInput3 + sumInput4;
  document.querySelector(".totalSum").textContent =
    "Sum of scores (" + totalSum + ")";
}

// chuyển trang next page
document.getElementById("nextPage").addEventListener("click", function () {
  window.location.href = "http://localhost:3000/score";
});
