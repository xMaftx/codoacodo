
function valida_envia(){
     //valido el usuario
     if (document.ingreso.usuario.value.length==0){
             alert("Tiene que escribir su usuario")
             document.ingreso.usuario.focus()
             return 0;
     }
     else {
           if (document.ingreso.usuario.value.indexOf('@',0)){
               alert("Su usuario debe incluir como caracter un @")
               document.ingreso.usuario.focus()
               return 0;
           }
     }
     //valido la clave
     if (document.ingreso.clave.value.length==0){
          alert("Tiene que escribir su clave")
          document.ingreso.clave.focus()
          return 0;
     }
     //el formulario se envia
     alert("Muchas gracias por enviar el formulario");
        document.ingreso.submit();
     }