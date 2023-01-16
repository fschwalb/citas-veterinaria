const Paciente = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md p-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Fernando</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
                <span className="font-normal normal-case">10 Diciembre 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Cras viverra posuere nibh ac facilisis. In cursus risus a ante sollicitudin viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non nunc ut justo pulvinar facilisis. Vivamus volutpat at metus in faucibus. Quisque auctor ex orci, id pulvinar ante cursus ultrices.</span>
            </p>
        </div>
    )
}

export default Paciente;