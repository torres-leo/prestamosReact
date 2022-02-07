import React from 'react';

const Resultado = (props) => {
	const { total, plazo, cantidad } = props;

	return (
		<div className='u-full-width resultado'>
			<h2>Resumen</h2>
			<p>Cantidad Solicitada: $ {cantidad}</p>
			<p>Plazo: {plazo} meses</p>
			<p>Pago mensual: $ {(total / plazo).toFixed(2)}</p>
			<p>Total a pagar: {total.toFixed(2)}</p>
		</div>
	);
};
export default Resultado;
