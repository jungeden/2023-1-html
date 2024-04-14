function open_outer(newImage, dImage, text) {
  document.getElementById("myclodet").style.display = "block";
  document.getElementById("dImage").src = dImage;
  document.getElementById("text").textContent = text;

  document.getElementById("mc1").style.display = "block";
  document.getElementById("mc1").src = newImage;
}
function open_top(newImage, dImage, text) {
  document.getElementById("myclodet").style.display = "block";
  document.getElementById("dImage").src = dImage;
  document.getElementById("text").textContent = text;

  document.getElementById("mc2").style.display = "block";
  document.getElementById("mc2").src = newImage;
}
function open_pan(newImage, dImage, text) {
  document.getElementById("myclodet").style.display = "block";
  document.getElementById("dImage").src = dImage;
  document.getElementById("text").textContent = text;

  document.getElementById("mc3").style.display = "block";
  document.getElementById("mc3").src = newImage;
}
function open_sho(newImage, dImage, text) {
  document.getElementById("myclodet").style.display = "block";
  document.getElementById("dImage").src = dImage;
  document.getElementById("text").textContent = text;

  document.getElementById("mc4").style.display = "block";
  document.getElementById("mc4").src = newImage;
}
function close_clo_det() {
  document.getElementById("myclodet").style.display = "none";
  //   document.getElementById("mc1").style.display = "none";
}

function wpage() {
  // 새로운 페이지의 URL로 변경
  window.location.href = "10.1.html"; // 다른 HTML 파일로 이동하려면 경로 설정
}

function mpage() {
  // 새로운 페이지의 URL로 변경
  window.location.href = "10.1.m.html"; // 다른 HTML 파일로 이동하려면 경로 설정
}
// function open_clo_det(newImage, dImage, outerId, miId) {
//   document.getElementById("myclodet").style.display = "block";
//   document.getElementById("dImage").src = dImage;

//   // 기존 이미지를 감추지 않음
//   // document.getElementById("mc1").style.display = "none";

//   // 새로운 이미지로 교체
//   document.getElementById(outerId).style.display = "flex";
//   document.getElementById(miId).style.display = "flex";

//   document.getElementById("mc1").src = newImage;
// }

// function close_clo_det() {
//   document.getElementById("myclodet").style.display = "none";
// }

// let prevClickedGroup = null;

// function open_clo_det(newImage, dImage, group) {
//   document.getElementById("myclodet").style.display = "block";
//   document.getElementById("dImage").src = dImage;

//   const outerImages = document.querySelectorAll(".outer");
//   outerImages.forEach((image) => {
//     const imageGroup = image.getAttribute("data-group");
//     if (imageGroup === group) {
//       image.style.display = "block";
//     } else {
//       image.style.display = "none";
//     }
//   });

//   // 기존 클릭한 그룹과 현재 클릭한 그룹이 다를 경우
//   if (prevClickedGroup !== group) {
//     const prevClickedImages = document.querySelectorAll(
//       '.outer[data-group="' + prevClickedGroup + '"]'
//     );
//     prevClickedImages.forEach((image) => {
//       image.style.display = "block";
//     });
//   }

//   // 현재 클릭한 그룹을 기억
//   prevClickedGroup = group;
// }

// function close_clo_det() {
//   document.getElementById("myclodet").style.display = "none";
// }
