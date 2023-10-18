import './footer.scss';

export default function Footer(props) {

    return (
        <div id='comp-footer'>
            <section className={props.Footer}>
                <div>
                    <div id='sobre'>
                        <h4>Empresa</h4>
                        <p>Sobre</p>
                        <p>Nosso objetivo</p>
                        <p>Encontar-se aqui</p>
                    </div>
                
                    <div id='atendimento'>
                        <h4>Ajuda</h4>
                        <p>Dúvidas Frequentes</p>
                        <p>Como Comprar</p>
                    </div>
                
                    <div id='politica'>
                        <h4>Políticas</h4>
                        <p>Trocas e Devoluções</p>
                        <p>Opções de Entrega</p>
                        <p>Termos de Uso</p>
                        <p>Políticas de Privacidade</p>
                    </div>

                    <div id='pagamento'>
                        <h4>Formas de Pagamento</h4>
                        <img src='../assets/icon/credit-card.png'/>
                    </div>

                    <div id='contato'>
                        <h4>Contato</h4>
                        <p>... (11) 93124-5378</p>
                        <p>... (11) 91008-7258</p>
                        <p>inovapartes@gmail.com</p>
                    </div>
                </div>
            
                <div id='endereco'>
                    <div>
                        <p>Autopeças (Nome) Ltda.</p>
                        
                        <p>
                            Sede na Rua André Pernet, 2060 - JD.Roschel - CEP 04030-020, São Paulo/SP
                            Inscrita no CNPJ sob o nº 43.158.302/0001-03
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}