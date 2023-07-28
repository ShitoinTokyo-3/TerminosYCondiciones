import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>POLÍTICA DE PRIVACIDAD DE TORTILLERÍA MÍA</h1>
      <div className="card">
        <p>
        Esta Política de privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o hace una compra en  {'('}denominado en lo sucesivo el “Sitio”{')'}.
        </p>
      </div>
      <h1>INFORMACIÓN PERSONAL QUE RECOPILAMOS</h1>
      <div className="card">
        <p>
        Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo. Además, a medida que navega por el Sitio, recopilamos información sobre las páginas web individuales o los productos que ve, las páginas web o los términos de búsqueda que lo remitieron al Sitio e información sobre cómo interactúa usted con el Sitio. Nos referimos a esta información recopilada automáticamente como “Información del dispositivo”.

Recopilamos Información del dispositivo mediante el uso de las siguientes tecnologías:

- Los “Archivos de registro” rastrean las acciones que ocurren en el Sitio y recopilan datos, incluyendo su dirección IP, tipo de navegador, proveedor de servicio de Internet, páginas de referencia/salida y marcas de fecha/horario.
    - Las “balizas web”, las “etiquetas” y los “píxeles” son archivos electrónicos utilizados para registrar información sobre cómo navega usted por el Sitio.

Además, cuando hace una compra o intenta hacer una compra a través del Sitio, recopilamos cierta información de usted, entre la que se incluye su nombre, dirección de facturación, dirección de envío, información de pago (incluidos los números de la tarjeta de crédito), dirección de correo electrónico y número de teléfono.  Nos referimos a esta información como “Información del pedido”.

Cuando hablamos de “Información personal” en la presente Política de privacidad, nos referimos tanto a la Información del dispositivo como a la Información del pedido.

        </p>
      </div>
      <h1>¿CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL?</h1>
      <div className="card">
        <p>
        Usamos la Información que recopilamos en general para preparar los pedidos realizados a través del Sitio {'('}incluido el procesamiento de su información de pago, la organización de los envíos y la entrega de facturas y/o confirmaciones de pedido{')'}.  Además, utilizamos esta Información del pedido para: comunicarnos con usted;
examinar nuestros pedidos en busca de fraudes o riesgos potenciales; y cuando de acuerdo con las preferencias que usted compartió con nosotros, le proporcionamos información o publicidad relacionada con nuestros productos o servicios.

Utilizamos la Información del dispositivo que recopilamos para ayudarnos a detectar posibles riesgos y fraudes {'('}en particular, su dirección IP{')'} y, en general, para mejorar y optimizar nuestro Sitio {'('}por ejemplo, al generar informes y estadísticas sobre cómo nuestros clientes navegan e interactúan con el Sitio y para evaluar el éxito de nuestras campañas publicitarias y de marketing{')'}.
        </p>
      </div>
    </>
)
}

export default App
