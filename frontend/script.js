let doors = [];

for (let i = 1; i <= 100;) {
	doors[i] = {
		"doorNumber": i + 1,
		"isOpen": false
	}
}
for (let i = 1; let <= 100;) {
	for (const door of doors) {
		let shouldToggle = door.doorNumber % (i + 1);
			if (shouldToggle = true) {
				door.isOpen = !doorisOpen;
			}
		
	}
}
for (doors of doors) {
	if (doors.isOpen === true) {
		console.log(doors.doorNumber);
	}
}	
