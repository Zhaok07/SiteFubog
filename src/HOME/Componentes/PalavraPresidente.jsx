import FotoZander from "./FotoZander";
import "./PalavraPresidente.css";

function PalavraPresidente() {
  return (
    <div className="container-palavra-presidente">
      <div className="box-presidente">
        <h1 id="titulo-presidente">Palavras do Presidente</h1>
        <FotoZander />
      </div>
      <p id="texto-presidente">
        A Fundação Banco de Olhos de Goiás, fundada e mantida pelos Lions Clubes
        de Goiânia desde 1977, é uma organização social filantrópica,
        reconhecida como de Utilidade Pública pela Lei Federal nº 5757/69, Lei
        Estadual nº 11373/90 e Lei Municipal nº 6725/90. Ao longo de seus anos
        de existência, a Fundação tem como missão “combater e prevenir a
        cegueira” – desafio lançado mundialmente pela Associação Internacional
        de Lions. A entidade presta serviços especializados em oftalmologia para
        a população carente de Goiás e de outros Estados da Federação, com
        modernos equipamentos e equipe de profissionais gabaritados, em sua sede
        própria, localizada em Goiânia (GO). Mantém convênio com o Sistema Única
        de Saúde (SUS)/ Ministério da Saúde, que conta com 85% de sua
        capacidades para atendimento do paciente encaminhado através deste
        serviço, e com o Ministério da Educação (MEC) para funcionamento da
        Residência Médica. Em média, são realizadas 400 consultas diárias, 1200
        cirurgias de catarata mensais e dezenas de transplantes de córneas por
        mês. A estrutura da Fundação inclui, ainda, uma Unidade Móvel, com dois
        consultórios completos montados em no ônibus que nos finais de semana
        são deslocados para atendimento das comunidades mais distantes em
        parceria com instituições que a procuram com essa finalidade social. A
        Fundação Banco de Olhos de Goiás inaugurou em 2006, o Instituto Latino
        Americano de Oftalmologia, para aumentar o atendimento à grande demanda
        de pacientes que procuram a sua unidade para tratamento nas várias
        especialidades oftalmológicas. Em 2010, reformou seu Hospital, criando
        também o Centro de Diagnóstico e Laserterapia com os mais modernos
        equipamentos oftalmológicos. As ações desenvolvidas pela Fundação não
        representam somente a grandeza de resultados, voltados para a saúde
        ocular, mas também ajudam na missão de nossa Fundação, dia após dia, a
        tornar a oftalmologia um instrumento de inclusão social.
      </p>
    </div>
  );
}

export default PalavraPresidente;
