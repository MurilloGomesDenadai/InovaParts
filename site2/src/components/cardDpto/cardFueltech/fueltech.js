import './fueltech.scss';

export default function Fueltech(isOpen, setOpenFuel) {
    if (isOpen) {
        return (
                
            <dialog open>
                
                <div id='card-fueltech'>
                </div>
                <form method='dialog'>
                    <button onClick={() => setOpenFuel(false)}>Fechar</button>
                </form>
            </dialog>
        )
    }

    return null

}



                    