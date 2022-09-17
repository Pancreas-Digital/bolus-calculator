const calculatorContent = {
  'es-AR': {
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

export default calculatorContent;