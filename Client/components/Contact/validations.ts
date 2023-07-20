import { Contactanos } from "./Contact"



const validations = (info: Contactanos) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPhone = /^\d+(\.\d +)?$/
    let error: Contactanos = {}

    info.phone = info.phone?.toString();


    if (info.firstName === "") {
        error.firstName = "debes escribir tu nombre..."
    }
    if (info.lastName === "") {
        error.lastName = "debes escribir tu apellido..."
    }

    if (!info.email) {
        info.email = ""
        if (!regexEmail.test(info.email)) {
            error.email = "Debe ser un correo electronico valido..."
        }
    }
    if (!info.phone) {
        info.phone = ""
        if (!regexPhone.test(info.phone)) {
            error.phone = "debes escribir tu nombre..."
        }
    }
    if (info.reason === "") {
        error.reason = "debes seleccionar una opcion..."
    }
    if (info.message === "") {
        error.message = "escribe el mensaje que nos deseas comunicar..."
    }

    return error
}

export default validations
