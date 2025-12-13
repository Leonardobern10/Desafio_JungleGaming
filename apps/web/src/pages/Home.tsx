import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { Link, useRouter } from "@tanstack/react-router";

export default function Home() {
  const { isLogged, logout } = useAuthStore();
  const { navigate } = useRouter();

  const handleLogout = async () => {
    logout();
    navigate({ from: "/auth/login" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Sistema de Gestão de Tarefas
        </h1>

        <p className="text-lg text-gray-600">
          Organize suas tarefas, acompanhe seu progresso e aumente sua
          produtividade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          {isLogged ? (
            <>
              <Button asChild size="lg">
                <Link to="/tasks">Acessar Tarefas</Link>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="lg">
                <Link to="/auth/login">Login</Link>
              </Button>

              <Button asChild variant="ghost" size="lg">
                <Link to="/auth/register">Criar Conta</Link>
              </Button>
            </>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Organização</h3>
            <p className="text-sm text-gray-500 mt-2">
              Categorize e priorize suas tarefas facilmente.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Produtividade</h3>
            <p className="text-sm text-gray-500 mt-2">
              Acompanhe seu progresso e mantenha o foco.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Simplicidade</h3>
            <p className="text-sm text-gray-500 mt-2">
              Interface moderna e fácil de usar no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
