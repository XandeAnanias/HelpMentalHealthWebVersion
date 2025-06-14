import Sidebar from '../../../components/containers/usuario/sidebar';
import Assinatura from '../../../components/containers/assinatura';

export default function AssinaturaUsuario(){
return(
    <div className="flex min-h-screen bg-[#f1f5f9]">
            <Sidebar></Sidebar>
        <div className="flex-1">
            <Assinatura></Assinatura>
        </div>
    </div>
)
}