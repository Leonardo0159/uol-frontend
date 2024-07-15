import { useEffect, useState } from 'react';
import api from '../../config/axiosConfig';
import { Button } from '../Button';
import ModalFornecedor from '../ModalFornecedor';

export default function ListFornecedores() {
  const [dados, setDados] = useState([]);
  const [page, setPage] = useState(1);
  const [totalFornecedores, setTotalFornecedores] = useState(0);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFornecedor, setCurrentFornecedor] = useState(null);
  const limit = 10;

  const fetchData = async () => {
    try {
      let response;
      if (search) {
        response = await api.get(`/fornecedores/nome/${search}`);
        setDados(response.data);
        setTotalFornecedores(response.data.length);
      } else {
        response = await api.get(`/fornecedores/paginados?page=${page}`);
        setDados(response.data.fornecedores);
        setTotalFornecedores(response.data.totalFornecedores);
      }
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const totalPages = Math.ceil(totalFornecedores / limit);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleSave = async (fornecedorData) => {
    try {
      if (currentFornecedor) {
        await api.put(`/fornecedores/${currentFornecedor.id}`, fornecedorData);
      } else {
        await api.post('/fornecedores', fornecedorData);
      }
      setModalOpen(false);
      setCurrentFornecedor(null);
      fetchData(); // Certifique-se de chamar fetchData após a edição
    } catch (error) {
      console.error("Erro ao salvar fornecedor:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/fornecedores/${id}`);
      setModalOpen(false);
      setCurrentFornecedor(null);
      fetchData(); // Certifique-se de chamar fetchData após a exclusão
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.error("Erro ao deletar fornecedor:", error);
      }
    }
  };

  const handleEdit = (fornecedor) => {
    setCurrentFornecedor(fornecedor);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setCurrentFornecedor(null);
    setModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Pesquisar Fornecedor"
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
              <th className="text-left p-4">Código País</th>
              <th className="text-left p-4">País</th>
              <th className="text-left p-4">Região</th>
              <th className="text-left p-4">Subregião</th>
              <th className="text-left p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((dado) => (
              <tr key={dado.id} className="border-b">
                <td className="p-4">{dado.nome}</td>
                <td className="p-4">{dado.codigoPais}</td>
                <td className="p-4">{dado.pais}</td>
                <td className="p-4">{dado.regiao}</td>
                <td className="p-4">{dado.subregiao}</td>
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
              <div className="font-bold mt-2">Código País</div>
              <div>{dado.codigoPais}</div>
              <div className="font-bold mt-2">País</div>
              <div>{dado.pais}</div>
              <div className="font-bold mt-2">Região</div>
              <div>{dado.regiao}</div>
              <div className="font-bold mt-2">Subregião</div>
              <div>{dado.subregiao}</div>
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

      <ModalFornecedor
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
        fornecedor={currentFornecedor}
      />
    </div>
  );
}
