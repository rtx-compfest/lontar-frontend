import {useState} from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import * as Yup from 'yup'
import {Field, Form, Formik} from 'formik'
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

import {Layout} from '@components/Layout'
import Logo from '../../public/loman.svg'

const SignIn = () => {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSubmit = (value) => {
    console.log(value)
  }

  return (
    <Layout hasNavbar={false} hasFooter={false}>
      <Grid as="main" placeItems="center" minHeight="100vh">
        <Grid marginBlock="85px" maxWidth="415px" width="100%">
          <VStack
            boxShadow="md"
            borderRadius="0.5rem"
            px="1.5rem"
            py="2rem"
            align="stretch"
            spacing="2rem"
          >
            <Box display="flex" justifyContent="flex-start">
              <Image src={Logo} alt="Loman logo" />
            </Box>

            <Heading>Sign In</Heading>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Email is invalid')
                  .required('Email is required'),
                password: Yup.string().required('Password is required'),
              })}
              onSubmit={formSubmit}
            >
              <Form>
                <Field name="email" type="email">
                  {({field, form}) => (
                    <FormControl
                      marginBlock="4"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="Email"
                        type="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password" type="password">
                  {({field, form}) => (
                    <FormControl
                      marginBlock="4"
                      isInvalid={
                        form.errors.password && form.touched.password
                      }
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          pr="4.5rem"
                          id="password"
                          type={show ? 'text' : 'password'}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShow(!show)}
                          >
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="green"
                  isLoading={isSubmitting}
                  width="100%"
                  marginBlock="4"
                >
                  Sign Up
                </Button>

                <Center alignSelf="stretch">
                  <Text mr="0.5rem">Doesn&apos;t have an account yet?</Text>
                  <Link as={NextLink} href="/sign-up">
                    <a>
                      <Text color="green">Sign Up</Text>
                    </a>
                  </Link>
                </Center>
              </Form>
            </Formik>
          </VStack>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default SignIn
