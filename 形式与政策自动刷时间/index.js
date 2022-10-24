// document.querySelectorAll(".dropdown-toggle")[1].click()
// 索引：1-4

// document.querySelectorAll(".dropdown-menu.pull-right")[0].querySelectorAll("li a")[0].click()
// 第一个索引位置是0-3

// document.querySelector(".panel.window .widget-content .table tr:nth-child(3) td a").click()

function delay(time = 1) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  })
}
/* 是否关闭视频了 */
function isClose() {
  return document.querySelector(".panel.window").style.display === "none";
}
let curRow = 0;//当前第几个专题，0-3
let times = [
  [0, 82],
  [0, 82],
  [0, 82],
  [0, 82]
]
let curTargetTime = 0;
startScript();
async function startScript() {
  for (let i = curRow; i < 4; i++) {
    document.querySelectorAll(".dropdown-menu.pull-right")[i].querySelectorAll("li a")[0].click()
    let targetTime = times[i][1] - times[i][0];
    targetTime = targetTime * 60;
    curTargetTime = targetTime;
    while (targetTime >= 0) {
      await delay(2);
      if (isClose()) {
        console.log("11111111")
        document.querySelectorAll(".dropdown-menu.pull-right")[i].querySelectorAll("li a")[0].click()
      } else {
        console.log("22222222")
      }
      targetTime -= 2;
      curTargetTime -= 2;
    }
    if (!isClose()) {
      document.querySelector(".panel.window .page-heading li:nth-child(4) span").click()
    }
    await delay(5);
  }

}



