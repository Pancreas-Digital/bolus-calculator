import { useRef, useState, useEffect } from 'react';
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

export default function ModalAccept() {
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
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="blue.50" minHeight="75vh">
          <ModalHeader color="red-700" textAlign="center" textColor="red.700">
            <WarningIcon bg="red-700" padding="1" />
            Advertencia importante
            <WarningIcon bg="red-700" padding="1" />
          </ModalHeader>
          <ModalBody>
            <Text p="4">
              NO use ni confíe en este software ni en ningún material asociado para ningún propósito o decisión médica.
            </Text>
            <Text p="4">NO confíe en este sistema para alarmas en tiempo real o datos críticos en el tiempo.</Text>
            <Text p="4">
              NO use ni confíe en este sistema para tomar decisiones de tratamiento ni lo use como sustituto del juicio
              profesional de la salud.
            </Text>
            <Text p="4">
              Todo el software y los materiales se han proporcionado con fines informativos solo como prueba de concepto
              para ayudar a las posibilidades de futuras investigaciones.
            </Text>
            <Text p="4">
              No se hace ninguna afirmación sobre la idoneidad para ningún propósito y todo se proporciona "TAL CUAL".
              Cualquier parte del sistema puede fallar en cualquier momento.
            </Text>
            <Text p="4">
              Siempre busque el consejo de un profesional de la salud calificado para cualquier pregunta médica.
            </Text>
            <Text p="4">
              Siga siempre las instrucciones de su sensor de glucosa u otros fabricantes de dispositivos cuando utilice
              cualquier equipo; no suspenda el uso del lector o receptor que lo acompaña, salvo que le indique su
              médico.
            </Text>
            <Text p="4">
              Este software no está asociado ni respaldado por ningún fabricante de equipos y todas las marcas
              comerciales pertenecen a sus respectivos propietarios.
            </Text>
            <Text p="4">El uso de este software es bajo su propio riesgo.</Text>
            <Text p="4">Los desarrolladores no han cobrado ningún cargo por el uso de este software.</Text>
            <Text p="4">
              Este es un proyecto de código abierto que ha sido creado por voluntarios. El código fuente se publica de
              forma gratuita y de código abierto para que lo inspeccione y evalúe.
            </Text>
            <Text p="4">
              Al utilizar este software y / o sitio web, usted acepta que es mayor de 18 años y ha leído, entendido y
              está de acuerdo con todo lo anterior.
            </Text>
          </ModalBody>
          <ModalFooter borderTop="2px" borderColor="blue.300">
            <form onSubmit={handleSubmit}>
              <Stack mr={100}>
                <FormControl id="accepted">
                  <Checkbox onChange={handleChange} ref={initialRef} isChecked={disclaimer.accepted} name="accepted">
                    He leído y estoy de acuerdo
                  </Checkbox>
                </FormControl>
                <Button
                  disabled={!disclaimer.accepted}
                  onClick={onClose}
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  colorScheme="blue"
                  name="submitted"
                  type="submit"
                  style={{ margin: '24px auto' }}
                >
                  Acepto
                </Button>
              </Stack>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
