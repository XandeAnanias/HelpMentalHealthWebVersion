import Sidebar from '@/components/containers/usuario/sidebar';
import Artigo from '@/components/containers/usuario/artigo';
import { ArtigosProvider } from '@/context/artigoContext.jsx'; // Novo import

export default function ArtigoUsuario(){
  return(
    <ArtigosProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Artigo />
        </div>
      </div>
    </ArtigosProvider>
  )
}
