$(() => {
	//변수초기화
	const visual = $('#brand_visual>ul>li');
	let current = 0;
	let setIntervalID;

	//간격마다 실행함수
	//clearInterval(setIntervalID)
	function timer() {
		setIntervalID = setInterval(() => {
			slideFn();
		}, 2000);
	}
	//슬라이드 인덱스번호 계산함수
	function slideFn() {
		let prev = visual.eq(current);
		move(prev, '0%', '-100%');
		current++;
		if (current == visual.length) {
			//0,1,2
			current = 0;
		}
		console.log(current, visual.length);
		let next = visual.eq(current); //1
		move(next, '100%', '0%');
	}

	//움직이는 함수
	function move(tg, start, end) {
		tg.css('left', start).animate({ left: end }, 500, 'easeOutCubic');
	}

	//정지,실행하기
	$('#slide_wrap').on({
		mouseenter: function () {
			clearInterval(setIntervalID);
		},
		mouseleave: function () {
			timer();
		},
	});
}); //jQuery