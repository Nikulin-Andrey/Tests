const tests = [{
	name: "Минск",
	description: "О Беларуси очень мало известно даже ближайшим соседям.А люди из стран подальше часто интересуются, где она находится, и является ли Беларусь вообще страной.",
	picture: "./img/minsk.jpg",
	time: 1000 * 60,
	questions: [{
		text: "1. На какой реке располагается город Минск?",
		rightans: [1],
		points: 2,
		answers: ["Свислочь", "Птичь", "Припять"]
	}, {
		text: "2. Почему минск назвали городом героем?",
		rightans: [1, 3],
		points: 1,
		answers: ["Потому что многие жвущие являются героями", "Потому что живут герои советского союза", "За выдающиеся заслуги перед Родиной", "Потому что это столица"]
	}, {
		text: "3. К какому году относится первое упоминание города?",
		rightans: [1],
		points: 3,
		answers: ["1067", "1125", "1386"]
	}, {
		text: "4. Сколько линий в метрополитене Минска?",
		rightans: [1],
		points: 1,
		answers: ["3", "2", "5"]
	}, {
		text: "5. Правда ли что Минский ботанический сад по площади занимает 3-е место в Европе после Королевского ботанического сада Кью в Лондоне и парка в Мадриде?",
		rightans: [1],
		points: 3,
		answers: ["Да", "Нет"]
	}]
}, {
	name: "Физика",
	description: "Большинству из нас школьные предметы давались не так просто, как хотелось бы.Сейчас даже отличники не помнят многое из школьной программы. Почему? Мы редко применяем школьные знания во взрослой жизни.",
	picture: "./img/physics.jpg",
	time: 1000 * 100,
	questions: [{
		text: "1. Какой термометр появился раньше?",
		rightans: [1],
		points: 2,
		answers: ["Термометр Фаренгейта", "Термометр Цельсия", "Первый термометр был рука"]
	}, {
		text: "2. Какая жидкость легче?",
		rightans: [1],
		points: 2,
		answers: ["Сжиженный водород", "Перекись водорода", "Холодная вода"]
	}, {
		text: "3. Кто создал первый паровой двигатель в мире?",
		rightans: [2],
		points: 3,
		answers: ["Иван Гончаров", "Иван Ползунов", "Иван Иванов"]
	}, {
		text: "4. Чему равна скорость света?",
		rightans: [3],
		points: 3,
		answers: ["500 000 км/с", "150 000 км/с", "300 000 км/с"]
	}]
}, {
	name: "Гигиена",
	description: "Медицинская наука, изучающая влияние факторов внешней среды на организм человека с целью оптимизации благоприятных и профилактики неблагоприятных воздействий.",
	time: 1000 * 50,
	picture: "./img/hygiene.jpg",
	questions: [{
		text: "1.Гигиена питания (определение)",
		rightans: [1],
		points: 4,
		answers: ["Наука о закономерностях и принципах организации рационального (оптимального) питания здорового и больного человека", "Наука о закономерностях формирования рациона питания здорового и больного человека", "Наука о принципах организации профилактического питания здорового человека"]
	}, {
		text: "2. Очистка воздуха на бактериальных фильтрах в приточных системах вентиляции должна быть предусмотрена для следующих помещений больницы",
		rightans: [3],
		points: 3,
		answers: ["Инфекционного бокса", "Бактериологических лабораторий", "Операционного блока и палат ожоговых больных", "Палат терапевтического отделения"]
	}, {
		text: "3.Как правильно мыть руки?",
		rightans: [1, 2],
		points: 3,
		answers: ["Невероятно хорошо!", "Очень хорошо!", "Плохо("]
	}]
}];
function renderTests(tests) {
	const testsConteiner = document.getElementById('tests-container');
	const oTest = document.getElementById('open-test');
	oTest.innerHTML = '';
	testsConteiner.innerHTML = '';
	testsConteiner.innerHTML = '<h1 class="choice">ВЫБОР ТЕСТА</h1>';
	tests.forEach((test) => {
		testsConteiner.insertAdjacentHTML('beforeend', `
      <div class="all" data-category='${test.name}'>
         <h2 data-category='${test.name}' class="name">${test.name}</h2> 
      </div> 
   `);
	});
	testsConteiner.addEventListener('click', function (e) {
		if (e.target.hasAttribute('data-category')) {
			e.preventDefault();
			const testName = e.target.getAttribute('data-category');
			testsConteiner.parentElement.classList.add('hidewrap');
			setTimeout(renderDescription, 600, testName, testsConteiner, true);
		}
	})
};
function renderDescription(testName, testsConteiner) {
	testsConteiner.innerHTML = '';
	const selectedTest = tests.find((test) => test.name === testName);
	const oTest = document.getElementById('open-test');
	oTest.innerHTML = `
   
   <div class="container">
      <h1 class="test">${selectedTest.name}</h1>
      <div class="imtext">
         <div class="image_container">
            <img src="${selectedTest.picture}">
         </div>
         <div>
            <p>${selectedTest.description}</p>
         </div>
      </div>
      <div class="button" id="start"><p>Начать</p></div>
   </div>
   `;
	const start = document.getElementById('start');
	start.addEventListener('click', function () {
		testsConteiner.innerHTML = '';
		testsConteiner.parentElement.classList.remove('hidewrap');
		oTest.classList.add('hidewrap');
		setTimeout(openTest, 600, selectedTest, oTest, true);
	});
}
function openTest(selectedTest, oTest) {
	oTest.innerHTML = `<div class="timer"><span id="timer">${selectedTest.time / 1000}</span></div>`;
	selectedTest.questions.forEach((question, qnumber) => {
		oTest.insertAdjacentHTML('beforeend', `
      <div class="container">
         <div class="question" id="question${qnumber}">
            <h3>${question.text}</h3>
         </div>   
      </div>
      `);
		const questionContainer = document.getElementById('question' + qnumber);
		question.answers.forEach((answer, number) => {
			questionContainer.insertAdjacentHTML('beforeend',
				`
         <label>
            <div data-number="${qnumber + 1}-${number + 1}">
               <input type="checkbox" name="${question.text}" value="${number + 1}" id="${qnumber + 1}-${number + 1}" >
               ${answer}
            </div>
         </label>
         `
			);
		});
	});
	const timer = document.getElementById('timer');
	let a = selectedTest.time / 1000;
	const second = setInterval(() => {
		timer.innerText = `${--a}`;
	}, 1000);
	oTest.insertAdjacentHTML('beforeend', `<div id="go" class="button">Завершить</div>`);
	const button = document.getElementById('go');
	const timerId = setTimeout(endTest, selectedTest.time, selectedTest, oTest, second, true);
	button.addEventListener('click', function () {
		endTest(selectedTest, oTest, second, false, timerId);
	});
	oTest.addEventListener('click', function (e) {
		if (e.target.hasAttribute('data-number')) {
			if (!e.target.lastElementChild.checked) {
				e.target.classList.add('selected');
			} else {
				e.target.classList.remove('selected');
			}

		}
	});
};
function endTest(selectedTest, oTest, second, isTimeOver, timerId) {
	let right = 0, right1 = 0, mark = 0, textRight = 'Правильно вопросы №: ';
	if (!isTimeOver) {
		let counter = 0, counter1 = 0;
		for (let i = 0; i < selectedTest.questions.length; i++) {
			for (let j = 0; j < selectedTest.questions[i].answers.length; j++) {
				const somech = document.getElementById(`${i + 1}-${j + 1}`);
				if (somech.checked) {
					counter1++;
					break;
				}
			}
			if (!(counter1 === 0)) {
				counter++;
				counter1 = 0;
			}
		}
		if (counter >= selectedTest.questions.length) {
			clearTimeout(timerId);
			endTest(selectedTest, oTest, second, true);
		} else {
			alert("Ответьте на все вопросы!");
		}
	} else {
		for (let i = 0; i < selectedTest.questions.length; i++) {
			for (let k = 0; k < selectedTest.questions[i].rightans.length; k++) {
				const chbox = document.getElementById(`${i + 1}-${selectedTest.questions[i].rightans[k]}`);
				if (chbox.checked) {
					right1++;
				}
			}
			if (right1 === selectedTest.questions[i].rightans.length) {
				right++;
				mark += selectedTest.questions[i].points;
				textRight += (i + 1) + '; ';
			}
			for (let j = 0; j < selectedTest.questions[i].answers.length; j++) {
				const somech = document.getElementById(`${i + 1}-${j + 1}`);
				if (somech.checked) {
					if (!(selectedTest.questions[i].rightans.includes(j + 1)) && right1 === selectedTest.questions[i].rightans.length) {
						right--;
						mark -= selectedTest.questions[i].points;
						break;
					}
				}
			};
			right1 = 0;
		};
		clearInterval(second);
		oTest.classList.remove('hidewrap');
		oTest.parentElement.classList.add('hidewrap');
		setTimeout(function () {
			oTest.innerHTML = `
         <div class="container">
            <h1>Результат: ${right} правильно и ${selectedTest.questions.length - right} неправильно</h1>
            <h2>${textRight}</h2>
            <h3>Оценка: ${mark} / 10</h3>
         </div>   
      `;

		}, 600, true);
	}
};
const home = document.getElementById('home');
home.addEventListener('click', function () {
	location.reload();
});
renderTests(tests);