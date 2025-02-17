// 下班时间（例如，下午5点）
const workdayEndTime = new Date();
workdayEndTime.setHours(17, 0, 0, 0); // 设置为下午5点
 
// 元旦时间（例如，2024年1月1日）
const newYearDate = new Date('2024-01-01T00:00:00');
 
function updateCountdown(elementId, endTime) {
    const countdownElement = document.getElementById(elementId);
    const currentTime = new Date();
    const timeRemaining = endTime - currentTime;
 
    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
 
        countdownElement.innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    } else {
        countdownElement.innerHTML = '时间到！';
    }
}
 
// 设置下班倒计时每秒更新一次
setInterval(function() {
    updateCountdown('workdayCountdown', workdayEndTime);
}, 1000);
 
// 设置元旦倒计时每秒更新一次
setInterval(function() {
    updateCountdown('newYearCountdown', newYearDate);
}, 1000);
