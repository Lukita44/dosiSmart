function alarma() {
    //Crear variable fecha
    const ahora = new Date();
    //Obtener horas, minutos, segundos
    const horas = ahora.getHours();      // Horas (0–23)
    const minutos = ahora.getMinutes();  // Minutos (0–59)
    const segundos = ahora.getSeconds(); // Segundos (0–59)

    if  ((horas == 8) && (minutos == 22))
    {
        console.log('Toma las pastillas')
    }else{
        console.log('todavia no')
    }

}