const localeContent = {
  'es-AR': {
    modalAccept: {
      disclaimerTitle: 'Advertencia importante',
      body: [
        'NO use ni confíe en este software ni en ningún material asociado para ningún propósito o decisión médica.',
        'NO confíe en este sistema para alarmas en tiempo real o datos críticos en el tiempo.',
        'NO use ni confíe en este sistema para tomar decisiones de tratamiento ni lo use como sustituto del juicio profesional de la salud.',
        'Todo el software y los materiales se han proporcionado con fines informativos solo como prueba de concepto para ayudar a las posibilidades de futuras investigaciones.',
        'No se hace ninguna afirmación sobre la idoneidad para ningún propósito y todo se proporciona "TAL CUAL". Cualquier parte del sistema puede fallar en cualquier momento.',
        'Siempre busque el consejo de un profesional de la salud calificado para cualquier pregunta médica.',
        'Siga siempre las instrucciones de su sensor de glucosa u otros fabricantes de dispositivos cuando utilice cualquier equipo; no suspenda el uso del lector o receptor que lo acompaña, salvo que le indique su médico.',
        'Este software no está asociado ni respaldado por ningún fabricante de equipos y todas las marcas comerciales pertenecen a sus respectivos propietarios.',
        'El uso de este software es bajo su propio riesgo.',
        'Los desarrolladores no han cobrado ningún cargo por el uso de este software.',
        'Este es un proyecto de código abierto que ha sido creado por voluntarios. El código fuente se publica de forma gratuita y de código abierto para que lo inspeccione y evalúe.',
        'Al utilizar este software y / o sitio web, usted acepta que es mayor de 18 años y ha leído, entendido y está de acuerdo con todo lo anterior.'
      ],
      acceptCheckboxText: 'He leído y estoy de acuerdo',
      acceptButtonText: 'Acepto'
    },
    minimum: {
      formControlId: 'glycaemia',
      label: 'Unidad mínima',
      helperText: 'La mínima cantidad de insulina que se puede administrar',
    },
    glycemia: {
      label: 'Glucemia',
      helperText: 'El valor de glucosa en sangre actual',
    },
    ratio: {
      label: 'Ratio de carbohidratos / insulina',
      helperText: 'La cantidad de carbohidratos para una unidad de insulina',
    },
    correction: {
      label: 'Factor de corrección',
      helperText: 'La cantidad de glucemia que reduce una unidad de insulina',
    },
    objective: {
      label: 'Objetivo de glucemia',
      helperText: 'El valor ideal de glucemia',
    },
    carbohydrates: {
      label: 'Carbohidratos',
      helperText: 'La cantidad de carbohidratos que va a consumir',
    },
    calculateButtonText: 'Calcular',
    result: {
      recommendedText: 'Unidades de insulina recomendadas',
      notRecommendedText: 'No se recomienda colocar insulina',
      errorText: 'Verifique los datos ingresados',
      recalculateButtonText: 'Volver a calcular'
    }
  },
  'en-US': {
    modalAccept: {
      disclaimerTitle: 'Important warning',
      body: [
        'DO NOT use or rely on this software or any associated material for any medical purpose or decision making.',
        'DO NOT rely on this system for real time alarms or time critical data.',
        'DO NOT use or rely on this system to make treatment decisions or use it as a substitute for professional healthcare judgment.',
        'All software and materials have been provided for informational purposes only as a proof of concept to aid future research possibilities.',
        'No claim is made as to fitness for any purpose and everything is provided "AS IS". Any part of the system can fail at any time.',
        'Always seek the advice of a qualified healthcare professional for any medical questions.',
        'Always follow the instructions of your glucose sensor or other device manufacturers when using any equipment; do not discontinue use of the accompanying reader or receiver unless directed by your physician.',
        'This software is not associated with or endorsed by any equipment manufacturer and all trademarks are the property of their respective owners.',
        'Use of this software is at your own risk.',
        'The developers have not charged any fees for the use of this software.',
        'This is an open source project that has been created by volunteers. The source code is released free and open source for your inspection and evaluation.',
        'By using this software and/or website, you agree that you are over the age of 18 and have read, understood and agree to all of the foregoing.'
      ],
      acceptCheckboxText: 'I have read and agree',
      acceptButtonText: 'Accept'
    },
    minimum: {
      label: 'Minimum unit',
      helperText: 'The minimum amount of insulin that can be administered',
    },
    glycemia: {
      label: 'Blood glucose',
      helperText: 'The current blood glucose value',
    },
    ratio: {
      label: 'Carbohydrate / Insulin Ratio',
      helperText: 'The amount of carbohydrates for a unit of insulin',
    },
    correction: {
      label: 'Correction factor',
      helperText:
        'The amount of blood glucose that is lowered by one unit of insulin',
    },
    objective: {
      label: 'Blood glucose goal',
      helperText: 'The ideal blood glucose value',
    },
    carbohydrates: {
      label: 'Carbohydrates',
      helperText: 'The amount of carbohydrates you are going to consume',
    },
    calculateButtonText: 'Calculate',
    result: {
      recommendedText: 'Recommended units of insulin',
      notRecommendedText: 'Insulin is not recommended',
      errorText: 'Check the data entered',
      recalculateButtonText: 'Recalculate'
    }
  },
};

export default localeContent;