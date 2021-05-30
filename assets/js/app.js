$(document).ready(function(){
    const urlPaises = 'https://restcountries.eu/rest/v2/all';
    $.get(urlPaises , function(datos){
        let paises = [];
        for(let pais of datos){
            paises.push(pais.name);
            $('#paises').append(`<option value="${pais.name}">`);
        }
        console.log(paises)
        $( "#busqueda" ).autocomplete({
            source: paises
        });
    },'json');
    
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
            <h2>Pais ó Ciudad: ${ciudad}</h2>
            <h3>La temperatura actual es: ${temperatura}</h3>
            <h3>latitud : ${latitud}</h3>
            <h3>Longitud : ${longitud}</h3>`);
            for(let estado of recopilacion.weather){
                $('#resultado').append(`<h3>El estado del cielo es: ${estado.description}</h3>`);
            }
        },'json');
        
    return false;
    });
});