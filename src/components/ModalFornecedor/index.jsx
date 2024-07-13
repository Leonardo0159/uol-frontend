import { useState, useEffect } from 'react';
import { FaX } from "react-icons/fa6";
import axios from 'axios';

export default function ModalFornecedor({ isOpen, onClose, onSave, onDelete, fornecedor }) {
    const [nome, setNome] = useState(fornecedor?.nome || '');
    const [codigoPais, setCodigoPais] = useState(fornecedor?.codigoPais || '');
    const [nomeError, setNomeError] = useState('');
    const [codigoPaisError, setCodigoPaisError] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countryCodes = response.data.map(country => ({
                    code: country.cca2,
                    name: country.name.common
                }));
                setPaises(countryCodes);
            } catch (error) {
                console.error("Erro ao buscar países:", error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        setNome(fornecedor?.nome || '');
        setCodigoPais(fornecedor?.codigoPais || '');
        setShowDeleteConfirm(false);
        setNomeError('');
        setCodigoPaisError('')
    }, [fornecedor]);

    const handleSave = () => {
        let hasError = false;

        if (!nome.trim()) {
            setNomeError('* Campo nome é obrigatório');
            hasError = true;
        } else {
            setNomeError('');
        }

        if (!codigoPais.trim()) {
            setCodigoPaisError('* Campo código do país é obrigatório');
            hasError = true;
        } else {
            setCodigoPaisError('');
        }

        if (hasError) {
            return;
        }

        const fornecedorData = { nome, codigoPais };
        onSave(fornecedorData);
        onClose();
    };

    const handleDelete = () => {
        onDelete(fornecedor.id);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{fornecedor ? 'Editar Fornecedor' : 'Novo Fornecedor'}</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <FaX size={20} />
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${nomeError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {nomeError && <p className="text-red-500 text-base">{nomeError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Código do País</label>
                    <select
                        value={codigoPais}
                        onChange={(e) => setCodigoPais(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${codigoPaisError ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Selecione um país</option>
                        {paises.map((pais) => (
                            <option key={pais.code} value={pais.code}>{pais.name}</option>
                        ))}
                    </select>
                    {codigoPaisError && <p className="text-red-500 text-base">{codigoPaisError}</p>}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="bg-red-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-red-500"
                        onClick={() => setShowDeleteConfirm(true)}
                        disabled={!fornecedor}
                    >
                        Deletar
                    </button>
                    <div className="space-x-4">
                        <button className='bg-green-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-green-500'
                            onClick={handleSave}>
                            Salvar
                        </button>
                    </div>
                </div>
                {showDeleteConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                            <h2 className="text-sm font-semibold mb-4">Tem certeza que deseja deletar?</h2>
                            <div className="flex justify-end space-x-4">
                                <button
                                    className="bg-gray-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-gray-500"
                                    onClick={() => setShowDeleteConfirm(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="bg-red-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-red-500"
                                    onClick={handleDelete}
                                >
                                    Deletar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
