import { useState, useEffect } from 'react';
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
} from "@chakra-ui/react"

export default function Calculator() {
  const [form, setForm] = useState({
    minimo: 0,
    glucemia: '',
    ratio: '',
    correction: '',
    amountOfCarbs: '',
  });
  const [result, setResult] = useState();

  /**
   * Runs on every refresh
   */
  useEffect(() => {
    console.log('form', form);
  }, [form]);

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
    let res = form.amountOfCarbs / form.ratio;
    if (form.glucemia > form.correction) {
      res = res + form.minimo;
    }
    console.log(res);
    res = Math.round(res * 2) / 2;
    setResult(res);
  };

  const handleSlider = value => {
    setForm((prevState) => {
      const newForm = {
        ...prevState,
        minimo: Number(value),
      };
      localStorage.setItem('form', JSON.stringify(newForm));

      return newForm;
    });
  };

  return (
    <Container maxW="md">
      <Box padding="4" bg="blue.50">
        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl id="minimo">
              <FormLabel>Mínimo: {form.minimo}</FormLabel>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Slider value={form.minimo} defaultValue={0} step={0.25} min={0} max={1} onChange={handleSlider}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
            <FormControl id="glucemia">
              <FormLabel>Glucemia</FormLabel>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Input onChange={handleChange} type="number" name="glucemia" />
            </FormControl>
            <FormControl id="ratio">
              <FormLabel>Ratio</FormLabel>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Input onChange={handleChange} type="number" name="ratio" />
            </FormControl>
            <FormControl id="correction">
              <FormLabel>Corrección</FormLabel>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Input onChange={handleChange} type="number" name="correction" />
            </FormControl>
            <FormControl id="amountOfCarbs">
              <FormLabel>Cantidad de carbohidratos</FormLabel>
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Input onChange={handleChange} type="number" name="amountOfCarbs" />
            </FormControl>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              colorScheme="blue"
              type="submit"
              style={{ margin: "24px auto" }}
            >
              Calcular
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Text fontSize="6xl">{result}</Text> 
            </div>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
