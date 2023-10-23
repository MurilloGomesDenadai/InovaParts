import './manutencao.scss';

export default function Manutencao({isopenManutencao}) {
    

    if (isopenManutencao) {
        return <dialog open  id='manutencao'>
                    <div id='popup-manutencao'>
                        <h1>hello card</h1>
                    </div>

                </dialog>
            
        

    }

    return null
}