import ProceedingComponent from '../components/Proceeding'

const items = [
  {
    src: `/assets/procedimentos/microagulhamento.jpeg`,
    title: 'Microagulhamento',
    text: 'trata as cicatrizes de acne, rugas, manchas e estrias'
  },
  {
    src: `/assets/procedimentos/radio-corporal.jpeg`,
    title: 'Radiofrequência Corporal',
    text: 'melhora o aspecto da pele e a flacidez, produzindo colágeno e elastina'
  },
  {
    src: `/assets/procedimentos/radio-facil.jpeg`,
    title: 'Radiofrequência facial',
    text: 'combate os sinais do envelhecimento deixando a pele mais bonita e saudável'
  },
  {
    src: `/assets/procedimentos/peeling-diamante.jpeg`,
    title: 'Peeling de Diamante',
    text: 'esse tratamento estético faz uma esfoliação profunda da pele para a remoção de células mortas, retira manchas e combate rugas'
  },
  {
    src: `/assets/procedimentos/carboxterapia.jpeg`,
    title: 'Carboxterapia Corporal',
    text: 'melhora o aspecto da pele por meio da oxigenação dos tecidos com gás carbônico, ajudando na flacidez, gordura localizada, estrias e celulites'
  },
  {
    src: `/assets/procedimentos/carboxterapia-facial.jpeg`,
    title: 'Carboxiterapia Facial',
    text: 'estimula a produção de colágeno, elimina marcas de expressão, combate a flacidez e as olheiras'
  },
  {
    src: `/assets/procedimentos/modeladora.jpeg`,
    title: 'Massagem Modeladora',
    text: 'combate a flacidez, a redução de medidas e a redução da gordura localizada'
  },
  {
    src: `/assets/procedimentos/relaxante.jpeg`,
    title: 'Massagem Relaxante',
    text: 'promove um profundo estado de relaxamento e diminui dores musculares, aumenta a circulação sanguínea e oxigena melhor as células'
  },
  {
    src: `/assets/procedimentos/drenagem-linfatica-corpo.jpeg`,
    title: 'Drenagem Linfática Corporal',
    text: 'elimina as toxinas do corpo, colabora no processo de cicatrização e na recuperação de cirurgias plásticas, melhora a circulação e oxigenação do corpo'
  },
  {
    src: `/assets/procedimentos/drenagem-facial.jpeg`,
    title: 'Drenagem Linfática Facial',
    text: 'melhora a aparência do rosto com a diminuição das bolsas de a suavização de algumas manchas superficiais'
  },
  {
    src: `/assets/procedimentos/crio.jpeg`,
    title: 'Criolipólise de Contraste',
    text: 'redução de medidas, reduz até 42% da gordura localizada e pode ser aplicada em abdômen, flancos, interno de coxa, costas, culotes, braços e peitoral masculino'
  },
  {
    src: `/assets/procedimentos/vibrocell.jpeg`,
    title: 'Vibrocell',
    text: 'promove uma massagem altamente eficaz e profunda através de movimentos vibratórios e circulatórios diminuindo a celulite e gordura localizada'
  },
  {
    src: `/assets/procedimentos/ventosa.jpeg`,
    title: 'Ventosa',
    text: 'é indicado para eliminar dores causadas por tensão muscular ou contraturas, inchaços e dor nas articulações'
  },
  {
    src: `/assets/procedimentos/pump.jpeg`,
    title: 'Pump Up',
    text: 'tem o objetivo de levantar e modelar o bumbum e também promove a melhora da celulite, resultado após 1 sessão'
  },
  {
    src: `/assets/procedimentos/manthus.jpeg`,
    title: 'Manthus',
    text: 'reduz os níveis de gordura localizada, melhora o aspecto da celulite'
  },
  {
    src: `/assets/procedimentos/servicos-corrente-russa.jpeg`,
    title: 'Corrente Russa',
    text: 'gera corrente elétrica capaz de estimula uma contração dos músculos promovendo o aumento da força e do volume muscular, fortalecimento'
  },
  {
    src: `/assets/procedimentos/botox.png`,
    title: 'Botox',
    text: 'é utilizado para tratar rugas da expressão facial como lateral dos olhos, testa e glabela.'
  },
  {
    src: `/assets/procedimentos/preenchimento.jpeg`,
    title: 'Preenchimento',
    text: 'atenua linhas de expressão e rugas, corrige determinadas áreas faciais'
  },
  {
    src: `/assets/procedimentos/escler.png`,
    title: 'Escleroterapia para Vasinhos',
    text: 'Tecnica utilizada para secagem de varizes ou vasinhos'
  },
  {
    src: `/assets/procedimentos/skin.jpeg`,
    title: 'Skinbooster',
    text: 'é uma hidratação injetável que trata profundamente a pele através do ácido hialurônico e diversas vitaminas.'
  },
  {
    src: `/assets/procedimentos/bio.jpeg`,
    title: 'Bioestimulador de Colageno',
    text: 'Bioestimulador- usado para tratamento de flacidez e de perda de estrutura, onde há o derretimento da face para corrigir essa sustentação'
  }
]

export default function Proceeding() {
  return <ProceedingComponent items={items} />
}
