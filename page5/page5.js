//입력 안 하면 넘어갈 수 없도록 하는 함수
function checkFilled(obj) {
    if (obj.value == "") {
        obj.focus();
    }
}



// 이메일 도메인을 선택할 때 이벤트 리스너 추가
document.getElementById('emailSelect').addEventListener('change', function () {
    document.getElementById('emailDomain').value = this.value; // 선택한 도메인을 이메일 입력란에 자동으로 추가
});
function updateEmail() {
    var emailSelect = document.getElementById('emailSelect');
    var emailDomain = document.getElementById('emailDomain');

    if (emailSelect.value === 'type') {  // 직접 입력일 때 이메일 도메인을 비활성화
        emailDomain.disabled = true;
        emailDomain.value = '';
    } else {
        emailDomain.disabled = false;
        emailDomain.value = emailSelect.value;
    }
}



// 에스크와 무통장입금 선택시 div 나타나게 하기
function showDiv(divId) {
    // 모든 div를 숨김
    document.getElementById('askName').style.display = 'none';
    document.getElementById('bankName').style.display = 'none';

    // 선택한 div만 보이게 함
    if (divId !== '') {
        document.getElementById(divId).style.display = 'block';
    }
}