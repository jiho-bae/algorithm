/*
    고속도로 차량.
    단속용카메라 최소 1번 만나야함.
    routes : 고속도로 이용하는 차량의 경로. 
    모든 차량이 최소 한번의 단속용 카메라를 만나려면 카메라 몇대?
    
    1 <= 차량대수 <= 1만
    routes[i][0] = i번째 차가 고속도로에 진입한 지점과, [i][1]=나간 지점.
    진입/진출에 카메라 설치 = 카메라 만난 것임.
    -3만 <= 진입/진출지점 <= 3만
    
    그리디문제.
    맨 처음 or 맨 끝에 카메라를 둬야 할텐데,
    진입시점으로 해도 될까? -> 맨 처음에 진입하는 차량에서 무조건 카메라 1대가 차량 1대만 담당하므로
    갯수에서의 손해 발생. -> 최소갯수가 아님.

    그래서 진출시점 기준으로 routes sorting을 수행하고.. 
    만약 나가야하는 시점의 차량이 지나간 구간 내에 가장 최근에 설치한 카메라가 있었으면... 
    그냥 나가도록 두면 되고, 
    나가야할 때 카메라에 한번도 찍힌적이 없다면 진출시점에 카메라를 설치해주자.         
*/

function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let cameraPos = routes[0][1];
  answer++;

  function existCamera(route, cameraPos) {
    if (route[0] <= cameraPos && cameraPos <= route[1]) return true;
    return false;
  }

  routes.forEach((route) => {
    if (existCamera(route, cameraPos)) return;
    cameraPos = route[1];
    answer++;
  });

  return answer;
}
