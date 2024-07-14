import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import ModalProduto from '../ModalProduto';

export default function ListProdutos() {
    const [dados, setDados] = useState([]);
    const [page, setPage] = useState(1);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProduto, setCurrentProduto] = useState(null);
    const limit = 10;

    const fetchData = async () => {
        try {
            let response;
            if (search) {
                response = await axios.get(`http://localhost:3333/produtos/nome/${search}`);
                setDados(response.data);
                setTotalProdutos(response.data.length);
            } else {
                response = await axios.get(`http://localhost:3333/produtos/paginados?page=${page}`);
                setDados(response.data.produtos);
                setTotalProdutos(response.data.totalProducts);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, search]);

    const totalPages = Math.ceil(totalProdutos / limit);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleSave = async (produtoData) => {
        try {
            if (currentProduto) {
                await axios.put(`http://localhost:3333/produtos/${currentProduto.id}`, produtoData);
            } else {
                await axios.post('http://localhost:3333/produtos', produtoData);
            }
            setModalOpen(false);
            setCurrentProduto(null);
            fetchData();
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/produtos/${id}`);
            setModalOpen(false);
            setCurrentProduto(null);
            fetchData();
        } catch (error) {
            if (error.response && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                console.error("Erro ao deletar produto:", error);
            }
        }
    };

    const handleEdit = (produto) => {
        setCurrentProduto(produto);
        setModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentProduto(null);
        setModalOpen(true);
    };

    return (
        <div className="p-8">
            <div className="mb-4 flex justify-between items-center gap-4">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Pesquisar Produto"
                    className="px-4 py-2 border rounded w-full"
                />
                <button className='bg-green-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-green-500'
                    onClick={handleAdd}>
                    Novo
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 hidden md:table">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left p-4">Nome</th>
                            <th className="text-left p-4">Descrição</th>
                            <th className="text-left p-4">Preço</th>
                            <th className="text-left p-4">Quantidade</th>
                            <th className="text-left p-4">Categoria</th>
                            <th className="text-left p-4">Fornecedor</th>
                            <th className="text-left p-4">Data de Criação</th>
                            <th className="text-left p-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((dado) => (
                            <tr key={dado.id} className="border-b">
                                <td className="p-4">{dado.nome}</td>
                                <td className="p-4">{dado.descricao}</td>
                                <td className="p-4">{'R$ '+dado.preco.toFixed(2)}</td>
                                <td className="p-4">{dado.quantidade}</td>
                                <td className="p-4">{dado.categoria}</td>
                                <td className="p-4">{dado.fornecedor.nome}</td>
                                <td className="p-4">{new Date(dado.created_at).toLocaleDateString()}</td>
                                <td className="p-4">
                                    <button className='bg-green-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-green-500'
                                        onClick={() => handleEdit(dado)}>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="bg-white border border-gray-200 block md:hidden">
                    {dados.map((dado) => (
                        <div key={dado.id} className="border-b-stroke-100 p-4 mb-4">
                            <div className="font-bold">Nome</div>
                            <div>{dado.nome}</div>
                            <div className="font-bold mt-2">Descrição</div>
                            <div>{dado.descricao}</div>
                            <div className="font-bold mt-2">Preço</div>
                            <div>{'R$ '+dado.preco.toFixed(2)}</div>
                            <div className="font-bold mt-2">Quantidade</div>
                            <div>{dado.quantidade}</div>
                            <div className="font-bold mt-2">Categoria</div>
                            <div>{dado.categoria}</div>
                            <div className="font-bold mt-2">Fornecedor</div>
                            <div>{dado.fornecedor.nome}</div>
                            <div className="font-bold mt-2">Data de Criação</div>
                            <div>{new Date(dado.created_at).toLocaleDateString()}</div>
                            <div className="mt-4">
                                <button className='bg-green-600 rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-green-500'
                                    onClick={() => handleEdit(dado)}>
                                    Editar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <Button
                        onClick={() => setPage(page => Math.max(page - 1, 1))}
                        disabled={page === 1}
                    >
                        Anterior
                    </Button>
                    <span>Página {page} de {totalPages}</span>
                    <Button
                        onClick={() => setPage(page => Math.min(page + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        Próxima
                    </Button>
                </div>
            </div>

            <ModalProduto
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
                onDelete={handleDelete}
                produto={currentProduto}
            />
        </div>
    );
}
