export function calcularTotal(cantidad, plazo) {
	// Porcentajes
	// 0 - 1000 = 25%
	// 1001 - 5000 = 20%
	// 5001 - 10000 = 15%
	// +10000 = 10%

	let totalInteres;

	if (cantidad <= 1000) {
		totalInteres = cantidad * 0.25;
	} else if (cantidad > 1000 && cantidad <= 5000) {
		totalInteres = cantidad * 0.2;
	} else if (cantidad > 5000 && cantidad <= 10000) {
		totalInteres = cantidad * 0.15;
	} else {
		totalInteres = cantidad * 0.1;
	}
	// console.log(totalInteres);

	// Calcular el plazo
	// 3 meses = 5%
	// 6 meses = 10%
	// 12 meses = 15%
	// 24 meses = 20%

	let totalPlazo = 0;

	switch (plazo) {
		case 3:
			totalPlazo = cantidad * 0.05;
			break;
		case 6:
			totalPlazo = cantidad * 0.1;
			break;
		case 12:
			totalPlazo = cantidad * 0.15;
			break;
		case 24:
			totalPlazo = cantidad * 0.2;
			break;

		default:
			break;
	}
	// console.log(totalPlazo);
	return totalPlazo + totalInteres + cantidad;
}
