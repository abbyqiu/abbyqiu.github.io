function updateCountdownDisplay(endDate, displayElementId, type) {
    const countDownDate = new Date(endDate).getTime();
    const now = new Date().getTime();
    const nowYear = new Date().getFullYear();
    const distance = countDownDate - now;
 
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(type === 1){
        document.getElementById(displayElementId).innerHTML = seconds < 0 ? `下班啦 ~` : `距离下班还有：${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }else if (type === 2) {
        // document.getElementById(displayElementId).innerHTML = `今年还有：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        document.getElementById(displayElementId).innerHTML = `${nowYear}年还剩下：${days}天`;
    }else {
        document.getElementById(displayElementId).innerHTML = `刘小志婚礼倒计时：${days}天`;
    }
}
 
// 获取当前年份，用于元旦的日期计算
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();
const workEndDate = `${currentYear}-${currentMonth}-${currentDay} 17:30:00`;
const newYearDate = `${currentYear}-12-31 17:30:00`;
const WeddingDate = '2025-05-11 00:00:00' 
// 设置下班倒计时
updateCountdownDisplay(workEndDate, 'workEndCountdown', 1);
// 设置元旦倒计时
updateCountdownDisplay(newYearDate, 'newYearCountdown', 2);
// 设置刘小志婚礼倒计时
updateCountdownDisplay(WeddingDate, 'weddingCountdown', 3);
