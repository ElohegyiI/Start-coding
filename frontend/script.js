let doors = [];

for (let i = 0; i <= 100; i++) {
	doors[i] = [
        doors.push(), {
            "isOpen": false,
            "doorNumber": i
		}
	]
}
for (let i = 0;  i <= 100; i++) {
	for (const door of doors) {
		let shouldToggle = doors.doorNumber % (i + 1);
			if (shouldToggle === true) {
				doors.isOpen = !doors.isOpen;
			}
		
	}
}
for (const door of doors) {
	if (door.isOpen === true) {
		console.log(door.doorNumber);
	}
}	

