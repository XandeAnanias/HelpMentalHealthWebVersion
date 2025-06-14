import Sidebar from '../../../components/containers/usuario/sidebar';
import Artigo from '../../../components/containers/usuario/artigo';

export default function ArtigoUsuario(){
return(
        <div className="flex min-h-screen">
            <Sidebar></Sidebar>
        <div className="flex-1">
            <Artigo></Artigo>
        </div>
    </div>
)
}