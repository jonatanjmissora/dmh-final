
🔷  SPRINT 1 (landing, login, register)    

    usuario de prueba 👉   email: jonatanjmissora1@gmail.com
                            password: 123qQ*

    ✅ Crear Home page responsive.
    ✅ Crear el UI del navbar.
            Renderizado condicional, segun el pathname, y si el usuario se encuentra logueado.
    ✅ Lógica de los Links del Nav.
    ✅ Crear /login responsive:
        Controlar la validacion del form, usando React-hook-form y yup.
        Contemplar todas las posibles respuestas del swagger.
        ✅ Si el login es correcto:
            Crear las cookies con los datos del usuario logueado.
            Redirigir al /dashboard.
    ✅ Crear /register responsive:
        Controlar la validacion del form, usando React-hook-form y yup.
        Contemplar todas las posibles respuestas del swagger.
        Redirigir al /login si el registro es correcto.
    ✅ Lógica del middleware para usuarios logueados/no-logueados.


🔷  SPRINT 2 (dashboard: Inicio - Perfil - Tarjetas)

    Inicio:
        ✅ Layout con un DashboardMenu.
            Resaltado del menu segun pathname.
        ✅ Contenido del dashboard/
            ✅ Card con los el monto disponible y links a tarjetas y perfil.
            ✅ Acciones posibles de la cuenta.
                Links de Cargar dinero y Pago de servicios.
            ✅ Searchbar para actividades.
                Utilizamos el paquete "use-debounce"
            ✅ Listado de actividades recientes y link a todas las actividades.

    Perfil:
        ✅ Datos del usuario
            Link al formulario que me permite editar algunos datos del usuario (email, nombre, apellido y teléfono)
        ✅ Link a los medios de pago (tarjetas)
        ✅ Datos de la cuenta CVU y alias
            Boton para copiar dichos datos en el portapapeles

    Tarjetas:
        ✅ Link al formulario para agregar una nueva tajeta
            Utilizamos el paquete "react-credit-cards-2"
        ✅ Listado de las tajetas asociadas a la cuenta
            Posibilidad de eliminar una tajeta


🔷  SPRINT 3 (dashboard: Actividad - Cargar dinero)

    Actividad:
        ✅ Searchbar para filtrar actividades.
            Utilizamos el paquete "use-debounce".
            Utilizamos un searchParams "search".
        ✅ Menu de filtro.
            Utilizamos <details>.
            Radio para visualizar el filtro actual.
            Boton para borrar el filtro actual.
            Utilizamos un searchParams "filter".
        ✅ Listado de actividades.
            Visualizamos sólo 4 actividades por página.
            Listado segun los searcParams: search - filter y page.
            Paginacion en el caso que sean mas de 4 actividades. Segun el "search" y "filter"
            Las actividades estan ordenadas de la fecha actual a las mas antiguas.
            Se pueden ver mas datos de la actividad clickeada.

    Cargar dinero:
        ✅ Por transferencia bancaria.
            Me permite seleccionar si realizo la transferencia por CVU o alias.
            Utilizo un searchParamas "account" para almacenar la opcion elegida.
        ✅ Por tarjetas asociadas a la cuenta previamente. cargadas.
            Me permite seleccionar la tarjeta con la que se realizará la transferencia.
            Utilizo un searchParamas "cardnum" para almacenar la opcion elegida.
        ✅ Formulario para cargar una cantidad positiva a transferir, con su propia validación.
        ✅ Utilizo un searchParamas "amount" para almacenar el monto a transferir.
        ✅ Por último, una vez recolectados los datos en el searchParams, voy al checkout para realizar la transferencia.
        ✅ Posibilidad de modificar el valor a transferir.
        ✅ Visualizacion de pagina de éxito de la operación, o error de la misma.

🔷  SPRINT 4 (dashboard: Pagar servicios)

    Pagar servicios:
        ✅ Searchbar para filtrar o buscar una cadena dentro de los nombres de los servicios asociados a la cuenta.
        ✅ Listado de todos los servicios.
        ✅ Una vez seleccionado el servicio, nos lleva al formulario para cargar el número de factura.
            Como no existe éste dato en swagger, hacemos un hardcode del número de boleta. Cualquier número distinto de "99999999999" nos arrojará el mensaje de que no existe la boleta asociada al servicio.
        ✅ Podemos ver más detalles del pago, o podemos elegir el medio de pago (tarjeta) y realizar la operación.
        Si el saldo de la cuenta lo permite, se realizará el pago, mostrando su respectiva pantalla de éxito. De lo contrario mostrará pantalla de error en el pago.

🔷  EXTRAS (loading, error)

    ✅ Se contemplaron páginas de loading y Suspense para ciertas partes de la aplicación, como también el uso de spinner en los botones submit de algunos formularios, que debían interactuar con el swagger.
    ✅ Se contemplaron errores de conexión, de servidor, de base de datos caida, asi como también la manipulación intencional en la dirección de los endpoints no porporcionados por la app. Proporcionando un mensaje de error y link con redirección.  