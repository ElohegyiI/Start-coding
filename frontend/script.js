let doors = [];

for (let i = 1; i <= 100; i++) {
	doors[i] = [
        doors.push(), {
            "isOpen": false,
            "doorNumber": i
		}
	]
}
for (let i = 1;  i <= 100; i++) {
	for (const door of doors) {
		let shouldToggle = doors.doorNumber % (i + 1);
			if (shouldToggle === true) {
				doors.isOpen = !doors.isOpen;
			}
		
	}
}
for (const door of doors) {
	if (doors.isOpen === true) {
		console.log(doors.doorNumber);
	}
}	

