import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function Calculator() {
  const [form, setForm] = useState({
    minimum: 0.5,
    glycaemia: '',
    ratio: '',
    //to calculate the correction you can use 1700/average total insulin in a day
    correction: '',
    objective: '',
    carbohydrates: '',
  });
  const [result, setResult] = useState(null);
  const [showSliderValue, setShowSliderValue] = useState(false);
  const resultRef = useRef();

  /**
   * Runs on init only
   */
  useEffect(() => {
    const valueInStorage = localStorage.getItem('form');
    if (valueInStorage) {
      setForm(JSON.parse(valueInStorage));
    }
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm((prevState) => {
      const newForm = {
        ...prevState,
        [name]: Number(value),
      };
      localStorage.setItem('form', JSON.stringify(newForm));

      return newForm;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //food + correction
    let res = form.carbohydrates / form.ratio + (form.glycaemia - form.objective) / form.correction;
    //Round to minimum and then round for a fix for some strange cases
    res = Math.round((Math.round(res / form.minimum) * form.minimum + Number.EPSILON) * 100) / 100;
    setResult(res);
    if (resultRef.current) {
      setTimeout(() => {
        resultRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, 100);
    }
  };

  const handleSlider = (value) => {
    setForm((prevState) => {
      const newForm = {
        ...prevState,
        minimum: Number(value),
      };
      localStorage.setItem('form', JSON.stringify(newForm));

      return newForm;
    });
  };

  return (
    <Container maxW="md">
      <Box padding="4" bg="blue.50" border="4px" borderColor="blue.600">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="minimum" isRequired>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormLabel>Unidad mínima</FormLabel>
                <Text fontSize="xl" color="blue.600" fontWeight="bold">
                  {form.minimum}
                </Text>
              </Box>
              <FormHelperText>La mínima cantidad de insulina que se puede administrar.</FormHelperText>
              <Slider
                value={form.minimum}
                defaultValue={0.5}
                step={0.05}
                min={0.05}
                max={1}
                onChange={handleSlider}
                onChangeStart={() => setShowSliderValue(true)}
                onChangeEnd={() => setShowSliderValue(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb>
                  {showSliderValue && (
                    <Box
                      position="absolute"
                      bottom="-40px"
                      bg="blue.300"
                      color="white"
                      borderRadius="4px"
                      padding="4px"
                      fontSize="14px"
                    >
                      {form.minimum}
                    </Box>
                  )}
                </SliderThumb>
              </Slider>
            </FormControl>
            <FormControl id="glycaemia" isRequired>
              <FormLabel>Glucemia</FormLabel>
              <FormHelperText>El valor de glucosa en sangre actual.</FormHelperText>
              <Input onChange={handleChange} type="number" value={form.glycaemia} name="glycaemia" />
            </FormControl>
            <FormControl id="ratio" isRequired>
              <FormLabel>Ratio de carbohidratos / insulina</FormLabel>
              <FormHelperText>La cantidad de carbohidratos para una unidad de insulina.</FormHelperText>
              <Input onChange={handleChange} type="number" value={form.ratio} name="ratio" />
            </FormControl>
            <FormControl id="correction" isRequired>
              <FormLabel>Factor de corrección</FormLabel>
              <FormHelperText>La cantidad de glucemia que reduce una unidad de insulina.</FormHelperText>
              <Input onChange={handleChange} type="number" value={form.correction} name="correction" />
            </FormControl>
            <FormControl id="objective" isRequired>
              <FormLabel>Objetivo de glucemia</FormLabel>
              <FormHelperText>El valor ideal de glucemia.</FormHelperText>
              <Input onChange={handleChange} type="number" value={form.objective} name="objective" />
            </FormControl>
            <FormControl id="carbohydrates" isRequired>
              <FormLabel>Carbohidratos</FormLabel>
              <FormHelperText>La cantidad de carbohidratos que va a consumir.</FormHelperText>
              <Input onChange={handleChange} type="number" name="carbohydrates" value={form.carbohydrates} />
            </FormControl>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              colorScheme="blue"
              type="submit"
              style={{ margin: '24px auto' }}
            >
              Calcular
            </Button>
            <Box
              ref={resultRef}
              height={result ? '100vh' : '1px'}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {result && (
                <Box
                  height="400px"
                  width="600px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  bg="rgba(255, 255, 255, 0.9)"
                  borderRadius="16px"
                >
                  <Box flex="1" display="flex" flexDirection="column" marginTop="24px" alignItems="center">
                    <Text fontSize="3xl" textAlign="center" fontWeight="bold" color="blue.600">
                      {result > 0 && result < Infinity
                        ? 'Cantidad de insulina necesaria'
                        : 'Verifique los datos ingresados'}
                    </Text>
                    <Text flex="1" fontSize="8xl" display="flex" alignItems="center" fontWeight="bold" color="blue.600">
                      {result > 0 && result < Infinity ? result : 'Error'}
                    </Text>
                  </Box>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    border="2px"
                    colorScheme="blue"
                    style={{ margin: '24px auto' }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setResult(null);
                    }}
                  >
                    Volver a calcular
                  </Button>
                </Box>
              )}
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
