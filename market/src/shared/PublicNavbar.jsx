import React from 'react'
import FeatherIcon from 'feather-icons-react';

export const PublicNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand text-white"><FeatherIcon icon="shopping-bag"/>&nbsp;<b>MARKET</b></a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" href='http://localhost:3000/products'>Productos</a>
                        </li>
                    </ul>
                    <form class="d-flex" action='http://localhost:3000/auth'>
                            <button class="btn bg-light">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}