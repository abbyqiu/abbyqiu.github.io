function updateCountdownDisplay(endDate, displayElementId) {
    const countDownDate = new Date(endDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
 
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
    document.getElementById(displayElementId).innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById(displayElementId).innerHTML = "时间到！";
    }
}
 
// 获取当前年份，用于元旦的日期计算
const currentYear = new Date().getFullYear();
const workEndDate = `${currentYear}-12-31 18:00:00`; // 假设下班时间是12月31日18:00
const newYearDate = `${currentYear + 1}-01-01 00:00:00`; // 元旦是新年的第一天，即下一年的1月1日午夜
 
// 设置下班倒计时
updateCountdownDisplay(workEndDate, 'workEndCountdown');
// 设置元旦倒计时
updateCountdownDisplay(newYearDate, 'newYearCountdown');
