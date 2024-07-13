import { useState, useEffect } from 'react';
import { FaX } from "react-icons/fa6";
import axios from 'axios';

export default function ModalProduto({ isOpen, onClose, onSave, onDelete, produto }) {
    const [nome, setNome] = useState(produto?.nome || '');
    const [descricao, setDescricao] = useState(produto?.descricao || '');
    const [preco, setPreco] = useState(produto?.preco || '');
    const [quantidade, setQuantidade] = useState(produto?.quantidade || '');
    const [categoria, setCategoria] = useState(produto?.categoria || '');
    const [fornecedorId, setFornecedorId] = useState(produto?.fornecedor?.id || '');
    const [nomeError, setNomeError] = useState('');
    const [descricaoError, setDescricaoError] = useState('');
    const [precoError, setPrecoError] = useState('');
    const [quantidadeError, setQuantidadeError] = useState('');
    const [categoriaError, setCategoriaError] = useState('');
    const [fornecedorIdError, setFornecedorIdError] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        const fetchFornecedores = async () => {
            try {
                const response = await axios.get('http://localhost:3333/fornecedores');
                setFornecedores(response.data);
            } catch (error) {
                console.error("Erro ao buscar fornecedores:", error);
            }
        };

        fetchFornecedores();
    }, []);

    useEffect(() => {
        setNome(produto?.nome || '');
        setDescricao(produto?.descricao || '');
        setPreco(produto?.preco || '');
        setQuantidade(produto?.quantidade || '');
        setCategoria(produto?.categoria || '');
        setFornecedorId(produto?.fornecedor?.id || '');
        setShowDeleteConfirm(false);
        setNomeError('');
        setDescricaoError('');
        setPrecoError('');
        setQuantidadeError('');
        setCategoriaError('');
        setFornecedorIdError('');
    }, [produto]);

    const handleSave = () => {
        let hasError = false;

        if (!nome.trim()) {
            setNomeError('* Campo nome é obrigatório');
            hasError = true;
        } else {
            setNomeError('');
        }

        if (!descricao.trim()) {
            setDescricaoError('* Campo descrição é obrigatório');
            hasError = true;
        } else {
            setDescricaoError('');
        }

        if (!preco || isNaN(preco)) {
            setPrecoError('* Campo preço é obrigatório e deve ser um número');
            hasError = true;
        } else {
            setPrecoError('');
        }

        if (!quantidade || isNaN(quantidade)) {
            setQuantidadeError('* Campo quantidade é obrigatório e deve ser um número');
            hasError = true;
        } else {
            setQuantidadeError('');
        }

        if (!categoria.trim()) {
            setCategoriaError('* Campo categoria é obrigatório');
            hasError = true;
        } else {
            setCategoriaError('');
        }

        if (!fornecedorId) {
            setFornecedorIdError('* Campo fornecedor é obrigatório');
            hasError = true;
        } else {
            setFornecedorIdError('');
        }

        if (hasError) {
            return;
        }

        const produtoData = { nome, descricao, preco, quantidade, categoria, fornecedorId };
        onSave(produtoData);
        onClose();
    };

    const handleDelete = () => {
        onDelete(produto.id);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{produto ? 'Editar Produto' : 'Novo Produto'}</h2>
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
                    <label className="block text-gray-700">Descrição</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${descricaoError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {descricaoError && <p className="text-red-500 text-base">{descricaoError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Preço</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${precoError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {precoError && <p className="text-red-500 text-base">{precoError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantidade</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${quantidadeError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {quantidadeError && <p className="text-red-500 text-base">{quantidadeError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Categoria</label>
                    <input
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${categoriaError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {categoriaError && <p className="text-red-500 text-base">{categoriaError}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Fornecedor</label>
                    <select
                        value={fornecedorId}
                        onChange={(e) => setFornecedorId(e.target.value)}
                        className={`w-full p-2 border rounded-lg ${fornecedorIdError ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Selecione um fornecedor</option>
                        {fornecedores.map((fornecedor) => (
                            <option key={fornecedor.id} value={fornecedor.id}>{fornecedor.nome}</option>
                        ))}
                    </select>
                    {fornecedorIdError && <p className="text-red-500 text-base">{fornecedorIdError}</p>}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="bg-red-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-red-500"
                        onClick={() => setShowDeleteConfirm(true)}
                        disabled={!produto}
                    >
                        Deletar
                    </button>
                    <div className="space-x-4">
                        <button
                            className="bg-green-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-green-500"
                            onClick={handleSave}
                        >
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
