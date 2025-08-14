const isPasswordSecure = (password) =>{
    if (password.length < 8) return 'La contraseña debe incluir al menos 8 caracteres.'
    if(!/[A-Z]/.test(password)) return 'La contraseña debe incluir al menos una mayuscula.'
    if(!/[0-9]/.test(password)) return 'La contraseña debe incluir al menos un numero.'
    if(!/[@#$%^&*()+?]/.test(password)) return 'La contraseña debe incluir al menos uncaracter especial.'
    return null;
} 

module.exports = {isPasswordSecure}
