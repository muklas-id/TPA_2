var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Masukkan nilai lainnya";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Nilai BMI adalah " + bmi + ", " + "Kamu Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Nilai BMI adalah " + bmi + ", " + "Kamu Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Nilai BMI adalah " + bmi + ", " + "Kamu Overweight";
	} else if (bmi >= 30) {
		measure = "Nilai BMI adalah " + bmi + ", " + "Kamu Obesitas";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Nilai tidak boleh negatif";
	}
}
