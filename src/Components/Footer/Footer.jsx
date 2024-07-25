import { Box, chakra, Container, Stack, Text, Image, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import logo from './../../Assets/logo.png';


const SocialButton = ({ children, label, href }) => {
    return (
        
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>

    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.700')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'8xl'}
                py={2}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                
                <Image style={{ height: '44px' }} src={logo} alt="logo" />

                <Text>2024 &copy;elSaleh, All rights reserved</Text>

                <Stack direction={'row'} spacing={2}>
                    <SocialButton label={'Github'} href={'https://github.com/Saleh0987'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/saleh23/'}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/OfficialMoSaleh'}>
                        <FaTwitter />
                    </SocialButton>
                </Stack>

            </Container>
        </Box>
    );
}