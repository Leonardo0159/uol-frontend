import Router from 'next/router';
import { useState } from 'react';

export const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = async () => {
        try {
            const response = await fetch('https://uol-backend.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                Router.push('/');
            } else {
                alert(data.error || 'Erro ao fazer login');
            }
        } catch (error) {
            alert('Erro ao fazer login');
        }
    };

    const keyPressInput = (event) => {
        if (event.keyCode == 13) {
            entrar();
        }
    };

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex justify-center flex-wrap">
                    <div className="bg-white mt-16 p-8 rounded w-96">
                        <form>
                            <div className="flex flex-col items-center">
                                <div>
                                    <img src="/images/logo.png" className="w-full h-full" alt="Flowbite Logo" />
                                </div>
                            </div>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
                            <div>
                                <div className="mb-6">
                                    <input
                                        onKeyDown={keyPressInput}
                                        type="email"
                                        className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="email"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        onKeyDown={keyPressInput}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="senha"
                                        placeholder="Senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="w-full bg-action-medium rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-action-light active:bg-action-dark"
                                        onClick={entrar}
                                    >
                                        Entrar
                                    </button>
                                </div>
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center text-gray-600 font-semibold mx-4 mb-0">Ou</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        onClick={() => Router.push('/cadastro')}
                                        type="button"
                                        className="w-full bg-action-medium rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-action-light active:bg-action-dark"
                                    >
                                        Cadastre-se
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
