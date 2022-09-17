import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  useDisclosure,
  Container,
  Button,
  Checkbox,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import localeContent from 'components/Calculator/locale';

export default function ModalAccept() {
  const { locale } = useRouter();
  const {
    modalAccept: {
      disclaimerTitle,
      body,
      acceptCheckboxText,
      acceptButtonText,
    },
  } = localeContent[locale];
  const [disclaimer, setDisclaimer] = useState({
    accepted: false,
    submitted: false,
  });

  /**
   * Runs on init only
   */
  useEffect(() => {
    const valueInStorage = localStorage.getItem('disclaimer');
    if (valueInStorage) {
      setDisclaimer(JSON.parse(valueInStorage));
    }
  }, []);

  const handleChange = (event) => {
    //accepted is the target name
    const { name } = event.target;
    setDisclaimer((prevState) => {
      const newDisclaimer = {
        ...prevState,
        //boolean accepted changes on every click
        [name]: !disclaimer.accepted,
      };
      localStorage.setItem('disclaimer', JSON.stringify(newDisclaimer));
      return newDisclaimer;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisclaimer((prevState) => {
      const newDisclaimer = {
        ...prevState,
        //boolean submitted uses the same value as accepted
        ['submitted']: disclaimer.accepted,
      };
      localStorage.setItem('disclaimer', JSON.stringify(newDisclaimer));
      return newDisclaimer;
    });
  };
  const { onClose } = useDisclosure();
  const initialRef = useRef();

  return (
    <Container>
      <Modal
        initialFocusRef={initialRef}
        defaultIsOpen={true}
        closeOnOverlayClick={false}
        isOpen={!disclaimer.submitted}
        scrollBehavior='inside'
        isCentered
      >
        <ModalOverlay />
        <ModalContent 
          bg='blue.50' 
          minHeight='75vh'
        >
          <ModalHeader 
            color='red-700' 
            textAlign='center' 
            textColor='red.700'
          >
            <WarningIcon bg='red-700' padding='1' />
            {disclaimerTitle}
            <WarningIcon bg='red-700' padding='1' />
          </ModalHeader>
          <ModalBody>
            {body.map((content, index) => (
              <Text p='4' key={index}>
                {content}
              </Text>
            ))}
          </ModalBody>
          <ModalFooter 
            borderTop='2px' 
            borderColor='blue.300'
          >
            <form onSubmit={handleSubmit}>
              <Stack mr={100}>
                <FormControl id='accepted'>
                  <Checkbox
                    onChange={handleChange}
                    ref={initialRef}
                    isChecked={disclaimer.accepted}
                    name='accepted'
                  >
                    {acceptCheckboxText}
                  </Checkbox>
                </FormControl>
                <Button
                  disabled={!disclaimer.accepted}
                  onClick={onClose}
                  size='md'
                  height='48px'
                  width='200px'
                  border='2px'
                  colorScheme='blue'
                  name='submitted'
                  type='submit'
                  style={{ margin: '24px auto' }}
                >
                  {acceptButtonText}
                </Button>
              </Stack>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
