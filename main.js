let chassis = createChassis()

console.log(chassis)
> {}
return
/*
	Note in the code below that the object that gets returned from the
	makeChassis() function above is stored in the chassis variable. That
	value is then sent to the addBody() function as that function's input.
*/
let chassisWithBody = addBody(chassis)
console.log(chassisWithBody)
> { wheels: 4 }

let chassisWithEngine = addEngine(chassis)
console.log(chassisWithEngine)
> { wheels: "4.8L" }

let chassisWithSteeringWheel = addSteeringWheel(chassis)
console.log(chassisWithSteeringWheel)
> { steeringWheel: "Tilting" }

let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassisWithDriveTrain)
> { driveTrain: "Two wheel drive" }