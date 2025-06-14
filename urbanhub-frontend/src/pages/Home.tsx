import UserForm from '../components/UserForm';

export default function Home() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo ao UrbanHub</h1>
            <UserForm />
        </div>
    );
}