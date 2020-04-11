import React from 'react';

export default class Footer extends React.Component {
  render(){
    return (
      
      <footer className='h-footer'>
          <div className='h-footer--top' >
            <div className='h-footer--top-box'>
              <p>ASSINE NOSSA NEWSLETTER</p>
              <p>Receba descontos e novidades da Just Rover por e-mail</p>
            </div>
            <div className='h-footer--top-box' >
              <form action="">
              <input class="input" id="Nome" maxlength="50" name="objNews.Nome" placeholder="Nome" type="text"/>
                <input class="input" id="Email" maxlength="70" name="objNews.Email" placeholder="Seu melhor Email" type="text"/>
                <button>ENVIAR</button>
              </form>
            </div>
            <div className='h-footer--top-box' >
            <i class="fa fa-instagram icone-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook-square icone-facebook" aria-hidden="true"></i>
            <i class="fa fa-pinterest-square icone-pint" aria-hidden="true"></i>
            <i class="fa fa-twitter-square icone-twitter" aria-hidden="true"></i>
            <i class="fa fa-spotify icone-spt" aria-hidden="true"></i>
            </div>
          </div>
          <div className='h-footer--botton' >
            <div className='h-footer--botton-box' >
              <ul>
                <li>INSTITUCIONAL</li>
                <li>Quem somos</li>
                <li>Contato</li>
                <li>Central de Atendimento</li>
              </ul>
            </div>
            <div className='h-footer--botton-box' >
              <ul>
                  <li>ATENDIMENTO</li>
                  <li>(10) 0005-755O</li>
                  <li>Horário de Atendimento:</li>
                  <li>De segunda à sexta das 09h ás 18h</li>
                  <li>atendimento@justrover.com.br</li>
                  <li> <i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</li>
                  <li>CAIXA POSTAL 0888y479, SÃO PAULO, US</li>
                </ul>
            </div>
            <div className='h-footer--botton-box' >
              <ul>
                    <li>POLÍTICAS</li>
                    <li>Prazos e Entregas</li>
                    <li>Formas de pagamento</li>
                    <li>Promoções e Descontos</li>
                    <li>Política de privacidade</li>
                    <li>Trocas e devoluções</li>
              </ul>
            </div>
            <div className='h-footer--botton-box'  >
                <p>FORMAS DE PAGAMENTO</p>
                <div className='h-card'>
                  <div className='h-card-item'>
                    <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                    <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                    <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                    <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                  </div>
                  <div className='h-card-item'>
                     <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                     <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                     <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                     <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                  </div>
                </div>
            </div>
          </div>
      </footer>
    )
  }
}