import { useState } from 'react';
import api from '../api/api';

export default function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/users', { name, email, password });
            alert('Usuário cadastrado com sucesso!');
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar usuário.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto space-y-4 mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Cadastro de Usuário</h2>
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-sm font-medium">Senha</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Cadastrar
            </button>
        </form>
    );
}
