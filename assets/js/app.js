$(document).ready(function(){
            
    $('form').submit(function(){
        let consulta = $('#busqueda').val();
        let llave = `742c046c53f5f032ee980e3abad7d520`;
        const idioma = 'es';
        let unidad = 'metric';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${consulta}&appid=${llave}&lang=${idioma}&units=${unidad}`;
        $.get(url , function(recopilacion){
            $('#resultado').empty();
            let ciudad = recopilacion.name;
            let temperatura = recopilacion.main.temp;
            const latitud = recopilacion.coord.lat;
            const longitud = recopilacion.coord.lon;
            $('#resultado').append(`<h1>Resultado de la consulta</h1>
            <h2>Ciudad: ${ciudad}</h2>
            <h3>La temperatura actual es: ${temperatura}</h3>
            <h3>latitud : ${latitud}</h3>
            <h3>Longitud : ${longitud}</h3>`);
            for(let estado of recopilacion.weather){
                let cielo = estado.description;
                $('#resultado').append(`<h3>El estado del cielo es: ${cielo}</h3>`);
            }
        },'json');
        
    return false;
    })
});