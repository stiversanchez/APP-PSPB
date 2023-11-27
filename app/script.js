document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.nav-footer .nav-link');
    const divs = document.querySelectorAll('.div');

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', function () {
            // Oculta todos los divs
            divs.forEach((div) => {
                div.style.display = 'none';
            });

            // Muestra el div correspondiente al índice del enlace seleccionado
            divs[index].style.display = 'block';

            // Elimina la clase 'activo' de todos los enlaces
            menuLinks.forEach((link) => {
                link.classList.remove('activo');
            });

            // Agrega la clase 'activo' al enlace seleccionado
            link.classList.add('activo');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const volverBtn = document.querySelector('.volverBtn');

    volverBtn.addEventListener('click', function () {
        console.log('Clic en el botón de volver');
        window.history.back();
    });
});




    document.addEventListener('DOMContentLoaded', function () {
        const toggleModeButton = document.getElementById('btn-switch');
        const content = document.getElementById('content');
        const liSesion = document.getElementById('li-sesion');
        const liModo = document.getElementById('li-modo');
        const btnSwitch = document.getElementById('btn-switch');
        const btnNav = document.querySelector('.nav-div');
        const btnNavSpan = document.querySelector('.nav-span');
        const navFooter = document.getElementById('nav-footer');
        const navContainer = document.querySelector('.nav-container');
        const div = document.querySelector('.div-oscuro')
        const body = document.body;
    
        toggleModeButton.addEventListener('click', function () {
            content.classList.toggle('dark'); 
            body.classList.toggle('dark'); 
            liSesion.classList.toggle('dark'); 
            liModo.classList.toggle('dark'); 
            btnSwitch.classList.toggle('dark'); 
            // btnSwitchBefore.classList.toggle('dark'); 
            btnNav.classList.toggle('dark'); 
            btnNavSpan.classList.toggle('.efectoAplicado'); 
            navFooter.classList.toggle('dark'); 
            navContainer.classList.toggle('dark');
            div.classList.toggle('dark');
        });


        btnNav.addEventListener('click', function () {
            // Toggle de las clases 'open' en el contenedor de navegación y el botón de navegación
            navContainer.classList.toggle('open');
            btnNav.classList.toggle('open');
        
            // Comprueba si el contenedor de navegación tiene la clase 'open' para decidir su visibilidad
            if (navContainer.classList.contains('open')) {
                navContainer.style.display = 'block';
            } else {
                navContainer.style.display = '';
            }
        });
    });
    

    


    


    let clickSeguridad = ()=>{
        let btnSeguridad =  document.getElementById("btn-seguridad");
        window.location.href= "/app/editarSeguridad/index.html";
    }

    let clickContraseña = ()=>{
       let btnContraseña = document.getElementById("btn-contraseña");
        window.location.href= "/app/editarSeguridad/contraseña/index.html";
    }
    let clickCorreo = ()=>{
       let btnCorreo = document.getElementById("btn-correo");
        window.location.href= "/app/editarSeguridad/correo/index.html";
    }
    
    let clickDatos = ()=>{
      let btnDatos =  document.getElementById("btn-datos");
        window.location.href= "/app/datosPersonales/informacionPersonal/index.html";
    }    




    // function calculateLoan() {
    //     // Obtener los valores de los campos de entrada
    //     const activity = document.getElementById('activity').value;
    //     const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    //     const installments = parseInt(document.getElementById('installments').value);
    //     const interestRate = parseFloat(document.getElementById('interestRate').value);

    //     // Realizar el cálculo del préstamo
    //     const monthlyInterest = (interestRate / 100) / 12;
    //     const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -installments));

    //     // Crear la tabla para mostrar los resultados
    //     const resultTable = document.createElement('table');
    //     resultTable.classList.add('result-table');

    //     // Crear la fila de encabezado
    //     const headerRow = resultTable.insertRow(0);
    //     const headerCell1 = headerRow.insertCell(0);
    //     const headerCell2 = headerRow.insertCell(1);
    //     headerCell1.textContent = 'Cuota';
    //     headerCell2.textContent = 'Pago Mensual';

    //     // Llenar la tabla con los resultados
    //     for (let i = 1; i <= installments; i++) {
    //         const row = resultTable.insertRow(i);
    //         const cell1 = row.insertCell(0);
    //         const cell2 = row.insertCell(1);
    //         cell1.textContent = i;
    //         cell2.textContent = monthlyPayment.toFixed(2);
    //     }

    //     // Mostrar la tabla en el documento
    //     const resultContainer = document.getElementById('resultContainer');
    //     resultContainer.innerHTML = ''; // Limpiar cualquier resultado anterior
    //     resultContainer.appendChild(resultTable);

    //     // Determinar si el préstamo es viable o no
    //     const viabilityMessage = document.getElementById('viabilityMessage');
    //     if (monthlyPayment <= 0.3 * loanAmount) {
    //         viabilityMessage.textContent = 'Préstamo viable.';
    //     } else {
    //         viabilityMessage.textContent = 'Préstamo no viable.';
    //     }
    // }

    

    // function calculateLoan() {
    //     // Obtener los valores del formulario
    //     const activity = document.getElementById('activity').value;
    //     const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    //     const installments = parseInt(document.getElementById('installments').value);
    //     const interestRate = parseFloat(document.getElementById('interestRate').value);

    //     // Realizar los cálculos
    //     const monthlyInterestRate = interestRate / 100 / 12;
    //     const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -installments));
        
    //     // Crear una nueva ventana o pestaña
    //     const newWindow = window.open('', '_blank');
        
    //     // Construir la tabla con los resultados
    //     const table = `
    //         <table border="1">
    //             <tr>
    //                 <th>Cuota</th>
    //                 <th>Saldo Pendiente</th>
    //                 <th>Intereses</th>
    //                 <th>Cuota Total</th>
    //             </tr>
    //     `;

    //     let remainingBalance = loanAmount;

    //     for (let i = 1; i <= installments; i++) {
    //         const interestPayment = remainingBalance * monthlyInterestRate;
    //         const totalPayment = monthlyPayment + interestPayment;
            
    //         table += `
    //             <tr>
    //                 <td>${i}</td>
    //                 <td>${remainingBalance.toFixed(2)}</td>
    //                 <td>${interestPayment.toFixed(2)}</td>
    //                 <td>${totalPayment.toFixed(2)}</td>
    //             </tr>
    //         `;

    //         remainingBalance -= (monthlyPayment - interestPayment);
    //     }

    //     table += `</table>`;

    //     // Mostrar la tabla en la nueva ventana
    //     newWindow.document.write(table);

    //     // Verificar si el préstamo es viable y mostrar el resultado
    //     const viabilityMessage = loanAmount <= 5000 ? 'El préstamo es viable.' : 'El préstamo no es viable.';
    //     newWindow.document.write(`<p>${viabilityMessage}</p>`);
    // }

    document.addEventListener('DOMContentLoaded', function () {
        const calculateLoanButton = document.querySelector('.simular-btn');
    
        calculateLoanButton.addEventListener('click', function () {
            calculateLoan();
        });
    });
    
    function calculateLoan() {
        const activity = document.getElementById('activity').value;
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const installments = parseInt(document.getElementById('installments').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
    
        const newWindow = window.open('', '_blank');
    
        if (newWindow) {
            const viabilityMessage = loanAmount <= 5000 ? 'El préstamo es viable.' : 'El préstamo no es viable.';
    
            newWindow.document.write(`
                <h2>Resultados de la Simulación</h2>
                <table border="1">
                    <tr>
                        <th>Cuota</th>
                        <th>Saldo Pendiente</th>
                        <th>Intereses</th>
                        <th>Cuota Total</th>
                    </tr>
            `);
    
            const monthlyInterestRate = interestRate / 100 / 12;
            const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -installments));
            let remainingBalance = loanAmount;
    
            for (let i = 1; i <= installments; i++) {
                const interestPayment = remainingBalance * monthlyInterestRate;
                const totalPayment = monthlyPayment + interestPayment;
    
                newWindow.document.write(`
                    <tr>
                        <td>${i}</td>
                        <td>${remainingBalance.toFixed(2)}</td>
                        <td>${interestPayment.toFixed(2)}</td>
                        <td>${totalPayment.toFixed(2)}</td>
                    </tr>
                `);
    
                remainingBalance -= (monthlyPayment - interestPayment);
            }
    
            newWindow.document.write(`</table>`);
            newWindow.document.write(`<p>${viabilityMessage}</p>`);
        } else {
            // alert('¡No se pudo abrir la ventana emergente! Asegúrate de permitir ventanas emergentes en tu navegador.');
        }
    }
    


    
    function obtenerSaludo() {
        var fecha = new Date();
        var hora = fecha.getHours();
        var saludo;

        // // if (hora >= 5 && hora < 12) {
        //     saludo = "¡Buenos días, Bienvenido!";
        if (hora >= 12 && hora < 18) {
            saludo = "¡Buenas tardes, Bienvenido!";
        } else if (hora >= 18 && hora <= 24){
            saludo = "¡Buenas noches, Bienvenido!";
        }else {
            saludo = "¡Buenos días, Bienvenido!";
        }

        return saludo;
        
    }
    // Obtener el elemento HTML con el ID "saludo"
    var elementoSaludo = document.getElementById("saludo");

    // Asignar el saludo al contenido del elemento
    elementoSaludo.innerHTML = obtenerSaludo();
