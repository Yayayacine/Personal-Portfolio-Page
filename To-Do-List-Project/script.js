document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.getElementById('dark-mode-btn');
	if (!toggleButton) return;
	toggleButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		document.querySelector('.header').classList.toggle('dark-mode');
		document.querySelector('.body-content').classList.toggle('dark-mode');
		document.querySelector('.footer').classList.toggle('dark-mode');
	});

	const addTaskButton = document.getElementById('add-task-btn');
	const taskInput = document.querySelector('.task-input');
	const taskList = document.querySelector('.task-list');
	addTaskButton.addEventListener('click' , () => {
		const taskText = taskInput.value.trim();
		if (taskInput.value == '') { 
			alert('plz enter a task');
			return; } else {
			const task = document.createElement('li');
			const taskCheckbox = document.createElement('input');
			taskCheckbox.type = 'checkbox';
			task.textContent = taskText;
			task.appendChild(listItem);
			taskInput.value = '';
			}

	});
});