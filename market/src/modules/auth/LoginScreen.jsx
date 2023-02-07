import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Col, Container, Figure, Row, Form } from 'react-bootstrap'
import * as yup from 'yup'

import { AuthContext } from "./authContext";
import AxiosClient from "../../shared/plugins/axios";
import Alert from "../../shared/plugins/alert";

export const LoginScreen = () => {
    const navigation = useNavigate();
    const { user, dispatch } = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            username: yup.string()
                .required('Ingresar usuario')
                .min(3, 'Mínimo tres carácteres'),
            password: yup.string()
                .required('Ingresar su contraseña')
                .min(3, 'Ingresa mínimo de tres carácteres')
        }),
        onSubmit: async (values) => {
            try {
                const URI = '/auth/login'
                const response = await AxiosClient({
                    url: URI,
                    method: 'POST',
                    data: JSON.stringify(values),
                })
                if (!response.error) {
                    const action = {
                        type: 'LOGIN',
                        payload: response.data
                    };
                    dispatch(action);
                    navigation('/products', { replace: true });
                }
            } catch (er) {
                Alert.fire({
                    title: 'Verificar datos ingresados',
                    text: 'Usuario y/o contraseña incorrectos',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar',
                })
            }
        },
    })
    const handleReturn = () => {
        navigation('/')
    }
    useEffect(() => {
        document.title = 'MT | Login'
    }, [])
    if (user.isLogged) {
        return <Navigate to={'/'} />
    }
    //<></> -> fragments
    return (
        <>
            <section className="h-100 gradient-form"
                style={{ backgroundColor: '#eee' }}>
                <Container className="py-5 h-100">
                    <Row className="d-flex justify-content-center 
                    align-items-center h-100">
                        <Col>
                            <div className="card rounded-3 text-black">
                                <Row className="g-0">
                                    <Col className="col-lg-6">
                                        <div className="card-body pd-md-5 mx-md-4">
                                            <div className="text-center">
                                                <Figure>
                                                    <Figure.image />
                                                </Figure>
                                                <h4 className="mt-1 mb-5 pb-1">
                                                    Market
                                                </h4>
                                            </div>
                                            <Form onSubmit={formik.handleSubmit}>
                                                <Form.Group className="form-outline mb-4">
                                                    <Form.Label htmlFor="username">
                                                        Usuario o correo electrónico
                                                    </Form.Label>
                                                    <Form.Control placeholder="mikemoreno"
                                                        id="username"
                                                        autoComplete="off"
                                                        name="username"
                                                        value={formik.values.username}
                                                        onChange={formik.handleChange}
                                                    />
                                                </Form.Group>

                                            </Form>
                                        </div>
                                    </Col>
                                    <Col className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}