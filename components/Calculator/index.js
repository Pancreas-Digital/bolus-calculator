import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
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
import localeContent from './locale';

export default function Calculator() {
  const { locale } = useRouter();
  const {
    minimum: { label: sliderLabel, helperText: sliderText },
    glycemia: { label: glycemiaLabel, helperText: glycemiaText },
    ratio: { label: ratioLabel, helperText: ratioText },
    correction: { label: correctionLabel, helperText: correctionText },
    objective: { label: objectiveLabel, helperText: objectiveText },
    carbohydrates: { label: carbohydratesLabel, helperText: carbohydratesText },
    calculateButtonText,
    result: {
      recommendedText,
      notRecommendedText,
      errorText,
      recalculateButtonText,
    },
  } = localeContent[locale];
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
    let res =
      form.carbohydrates / form.ratio +
      (form.glycaemia - form.objective) / form.correction;
    //Round to minimum and then round for a fix for some strange cases
    res =
      Math.round(
        (Math.round(res / form.minimum) * form.minimum + Number.EPSILON) * 100
      ) / 100;

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
    <Container maxW='container.md' padding='4' bg='blue.50'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl id='minimum' isRequired size='sm'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <FormLabel>{sliderLabel}</FormLabel>
              <Text fontSize='xl' color='blue.600' fontWeight='bold'>
                {form.minimum}
              </Text>
            </Box>
            <FormHelperText>{sliderText}</FormHelperText>
            <Slider
              value={form.minimum}
              defaultValue={0.5}
              step={0.05}
              min={0.05}
              max={1}
              onChange={handleSlider}
              onChangeStart={() => setShowSliderValue(true)}
              onChangeEnd={() => setShowSliderValue(false)}
              id='calculator-slider-1'
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb>
                {showSliderValue && (
                  <Box
                    position='absolute'
                    bottom='-40px'
                    bg='blue.300'
                    color='white'
                    borderRadius='4px'
                    padding='4px'
                    fontSize='14px'
                  >
                    {form.minimum}
                  </Box>
                )}
              </SliderThumb>
            </Slider>
          </FormControl>
          <FormControl id='glycaemia' isRequired size='sm'>
            <FormLabel>{glycemiaLabel}</FormLabel>
            <FormHelperText>{glycemiaText}</FormHelperText>
            <Input
              onChange={handleChange}
              type='number'
              min='0'
              value={form.glycaemia === 0 ? '' : form.glycaemia}
              name='glycaemia'
            />
          </FormControl>
          <FormControl id='ratio' isRequired size='sm'>
            <FormLabel>{ratioLabel}</FormLabel>
            <FormHelperText>{ratioText}</FormHelperText>
            <Input
              onChange={handleChange}
              type='number'
              min='0'
              value={form.ratio === 0 ? '' : form.ratio}
              name='ratio'
            />
          </FormControl>
          <FormControl id='correction' isRequired size='sm'>
            <FormLabel>{correctionLabel}</FormLabel>
            <FormHelperText>{correctionText}</FormHelperText>
            <Input
              onChange={handleChange}
              type='number'
              min='0'
              value={form.correction === 0 ? '' : form.correction}
              name='correction'
            />
          </FormControl>
          <FormControl id='objective' isRequired size='sm'>
            <FormLabel>{objectiveLabel}</FormLabel>
            <FormHelperText>{objectiveText}</FormHelperText>
            <Input
              onChange={handleChange}
              type='number'
              min='0'
              value={form.objective === 0 ? '' : form.objective}
              name='objective'
            />
          </FormControl>
          <FormControl id='carbohydrates' isRequired size='sm'>
            <FormLabel>{carbohydratesLabel}</FormLabel>
            <FormHelperText>{carbohydratesText}</FormHelperText>
            <Input
              onChange={handleChange}
              type='number'
              min='0'
              value={form.carbohydrates === 0 ? '' : form.carbohydrates}
              name='carbohydrates'
            />
          </FormControl>
          <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            colorScheme='blue'
            type='submit'
            style={{ margin: '24px auto' }}
          >
            {calculateButtonText}
          </Button>
        </Stack>
        <Box
          ref={resultRef}
          height={result === null ? '1px' : '100vh'}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          {result != null && (
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              bg='white'
              padding='10'
            >
              <Stack spacing='60px'>
                <Text
                  fontSize='3xl'
                  textAlign='center'
                  fontWeight='bold'
                  color='blue.600'
                >
                  {result > 0 && result < Infinity
                    ? recommendedText
                    : result === 0
                    ? notRecommendedText
                    : errorText}
                </Text>
                <Text
                  fontSize='5xl'
                  textAlign='center'
                  fontWeight='bold'
                  color='red.700'
                  marginBottom='60px'
                >
                  {result > 0 && result < Infinity
                    ? result
                    : result === 0
                    ? '-'
                    : 'Error'}
                </Text>
                <Button
                  size='md'
                  height='48px'
                  width='200px'
                  border='2px'
                  colorScheme='blue'
                  style={{ margin: '24px auto' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setResult(null);
                  }}
                >
                  {recalculateButtonText}
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </form>
    </Container>
  );
}
