import emoji from "react-easy-emoji";
import loading_coffee from "../assets/lottie/loading_coffee";

const jp = {
  splashScreen: {
    enabled: true,
    animation: loading_coffee,
    duration: 3000,
  },

  illustration: {
    animated: true,
  },

  greeting: {
    username: "Adrian Maiza",
    section: "ホーム",
    title: "こんにちは！",
    subTitle: emoji(
      "マイザ・アドリアンと申します。スペイン出身🇪🇸の情熱的な開発者💻とAIエンジニア📊です。現在、東京でフルタイムの仕事💼を探しながら日本語のスキル📚を向上させています。"
    ),
    resumeLink: require("../assets/pdf/履歴書.pdf"),
    shokumukeiLink: require("../assets/pdf/職務経歴書.pdf"),
    display: true,
  },

  socialMediaLinks: {
    github: "https://github.com/maizabros",
    linkedin: "https://www.linkedin.com/in/adrianmaiza/",
    gmail: "adrian.maiza@gmail.com",
    researchGate: "https://www.researchgate.net/profile/Adrian-Maiza",
    display: true,
  },

  skillsSection: {
    section: "スキル",
    title: "私のスキル",
    subTitle:
      "新しい挑戦を常に探している非常に好奇心旺盛なポリグロットです。ディープラーニングの最新技術の研究から言語の学習まで、私のスキルの一部は次のとおりです。",
    skills: [
      emoji("🔍 ディープラーニングと生成AIのための新しい技術の研究"),
      emoji("💻 PyTorchを使用した機械学習モデルの開発"),
      emoji("🤖 生成AIモデルの作成とトレーニング"),
      emoji("📊 データ分析と可視化"),
      emoji("🌐 Reactを使用したWeb開発"),
      emoji("📝 学術論文とレポートの執筆"),
      emoji("🗣️ 講演とプレゼンテーション"),
      emoji("🔧 LinuxとWindowsの高度な使用"),
      emoji(
        "🗺️ スペイン語、フランス語、バスク語を母国語とし、流暢な英語能力、日本語が上級"
      ),
    ],
    softwareSkills: [
      { name: "Python", color: "3670A0", logoColor: "ffdd54" },
      { name: "PyTorch", color: "EE4C2C", logoColor: "white" },
      { name: "HTML5", color: "E34F26", logoColor: "white" },
      { name: "CSS3", color: "1572B6", logoColor: "white" },
      { name: "JavaScript", color: "F7DF1E", logoColor: "black" },
      { name: "React", color: "61DAFB", logoColor: "black" },
      { name: "Angular", color: "DD0031", logoColor: "white" },
      { name: "NPM", color: "CB3837", logoColor: "white" },
      { name: "C", color: "00599C", logoColor: "white" },
      { name: "LaTeX", color: "008080", logoColor: "white" },
      { name: "Pandas", color: "150458", logoColor: "white" },
      { name: "NumPy", color: "013243", logoColor: "white" },
      { name: "Java", color: "ED8B00", logoColor: "white" },
      { name: "Git", color: "F05032", logoColor: "white" },
      { name: "SQL", color: "00000F", logoColor: "white" },
      { name: "Weights & Biases", color: "FFBE00", logoColor: "white" },
      { name: "Docker", color: "2496ED", logoColor: "white" },
      { name: "Linux", color: "FCC624", logoColor: "black" },
    ].map(({ name, color, logoColor }) => ({
      imageSrc: `${"https://img.shields.io/badge/"}${encodeURIComponent(
        name
      )}-${color}?style=for-the-badge&logo=${name.toLowerCase()}&logoColor=${logoColor}`,
    })),
    display: true,
  },

  educationInfo: {
    section: "学歴",
    title: emoji("学歴 📚🎓"),
    schools: [
      {
        schoolName: "ナバーラ公立大学",
        logo: require("../assets/images/logo_navarrensis_red.png"),
        subHeader: "コンピュータ工学の学士号",
        duration: "2016年9月 - 2022年6月",
        desc: "インテリジェントシステムに特化",
        descBullets: [
          "ソフトウェア開発、機械学習、オペレーティングシステム、ネットワーキング、セキュリティ、データベースなどのコースを受講。",
          "学士論文「表情認識のためのGANを使用したラベル付き人間の顔の生成」",
          "AI Week 2023（AI技術に関するイベント）で学士論文コンテストで2位",
        ],
      },
      {
        schoolName: "ブレキンゲ工科大学",
        logo: require("../assets/images/bthlogo_svart_platt.png"),
        subHeader: "ERASMUS交換プログラム",
        duration: "2022年1月 - 2022年6月",
        desc:
          "スウェーデンのブレキンゲでのコンピュータサイエンスのヨーロッパ連合交換プログラム",
        descBullets: [
          "ソフトウェアテスト、データ可視化、意思決定支援システムのコースを受講",
          "C1英語ERASMUS認定取得",
        ],
      },
    ],
    display: true,
  },

  workExperiences: {
    section: "経験",
    title: emoji("経験 💻💼"),
    experience: [
      {
        role: "研究助手",
        company: "ナバーラ公立大学",
        companylogo: require("../assets/images/logo_navarrensis_red.png"),
        date: "2022年10月 - 2023年12月",
        desc:
          "無限のスタイル一貫した音声ビジュアルキャラクター生成のための生成AIとディープラーニング技術の研究。",
        descBullets: [
          "大学とビジネスチームの協力",
          "生成AIに関する最新技術の研究",
          "無限のスタイル一貫した音声ビジュアルキャラクター生成プロジェクト",
          "実験セットアップと結果分析",
          "新しい技術を説明する月例セミナー",
          "AIジャーナル向けの学術研究論文の執筆",
          "政府資金提供プロジェクト",
        ],
      },
      {
        role: "フルスタック開発者（インターン）",
        company: "Tracasa Instrumental S.L.",
        companylogo: require("../assets/images/TracasaLogo.png"),
        date: "2021年9月 – 2021年12月",
        desc:
          "司法省でのスクラムメンバーフルスタック開発者としてのカリキュラムインターンシップ",
        descBullets: [
          "AVANTIUS司法プロセス管理システムの開発",
          "フルスタック開発（SQL、C＃、AngularJS、Javascript、Bootstrap、CSSなど）",
          "スクラム方法論の実践者",
          "将来の機能のためのWebモックアップの設計",
          "インターンシップレポートの作成",
        ],
      },
    ],
    display: true,
  },

  openSource: {
    title: emoji("オープンソース 🔓⌨️"),
    section: "オープンソース",
    showGithubProfile: "false",
    buttonText: "もっと見る",
    display: true,
  },

  bigProjects: {
    section: "プロジェクト",
    title: "重要なプロジェクト",
    subtitle: "私が取り組んだ最も重要なプロジェクトのいくつかです。 ",
    projects: [
      {
        image: require("../assets/images/thesisFront.png"),
        projectName: "学士論文",
        projectDesc: "表情認識のためのGANを使用したラベル付き人間の顔の生成",
        footerLink: [
          {
            name: "出版",
            url:
              "https://academica-e.unavarra.es/entities/publication/c76e0405-6881-4a96-b895-02fae716f18c",
          },
          {
            name: "論文",
            url: require("../assets/pdf/Thesis.pdf"),
          },
        ],
      },
      {
        image: require("../assets/images/research_project.png"),
        projectName: "研究論文",
        projectDesc:
          "DreamBoothをLoRAで拡張し、安定した拡散で無限のキャラクターを生成する。横浜で開催されたWCCI 2024で発表。",
        footerLink: [
          {
            name: "IEEE",
            url: "https://ieeexplore.ieee.org/document/10651300",
          },
        ],
      },
      {
        image: require("../assets/images/tracasa-instrumental-thumbnail.png"),
        projectName: "AVANTIUS",
        projectDesc:
          "スペイン司法省のためのAVANTIUS司法プロセス管理システムの開発",
        footerLink: [
          {
            name: "システムの説明（スペイン語）",
            url:
              "https://tracasa.es/proyectos/avantius-sistema-de-gestion-procesal-de-justicia/",
          },
        ],
      },
    ],
    display: true,
  },

  achievementSection: {
    section: "実績",
    title: emoji("実績と認定 🏆💯 "),
    subtitle:
      "AIとディープラーニングの分野での業績に対して認められる機会に恵まれました。以下は私の実績と認定の一部です。",

    achievementsCards: [
      {
        title: "学士論文コンテスト2位",
        subtitle:
          "Catedra Tracasa-UPNA 2023 AI Weekの学士論文コンテストのファイナリストで2位。",
        image: require("../assets/images/CatedraTracasUPNALogo.png"),
        imageAlt: "Tracasa-UPNA Logo",
        type: "achievement",
        footerLink: [
          {
            name: "認定",
            url: "",
          },
          {
            name: "コンテスト",
            url:
              "https://www.unavarra.es/catedra-tracasa/semana-de-la-ia/ediciones-anteriores/2023/semana-ia-2023",
          },
          {
            name: "論文ポスター",
            url: require("../assets/pdf/Poster TFG.pdf"),
          },
        ],
      },
      {
        title: "Coursera Deep Learning Specialization",
        subtitle:
          "CourseraでAndrew NgによるDeep Learning Specialization。ニューラルネットワーク、CNN、RNNなどの5つのコース。",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/3H3S7Y7E2U32",
          },
          {
            name: "コース",
            url: "https://www.coursera.org/specializations/deep-learning",
          },
        ],
      },
      {
        title: "Coursera Genertive Adversarial Networks Specialization",
        subtitle:
          "CourseraでDeepLearning.AIによるGAN Specialization。GAN、StyleGANなどの3つのコース。",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/NV83LN4TJA22",
          },
          {
            name: "コース",
            url:
              "https://www.coursera.org/specializations/generative-adversarial-networks-gans",
          },
        ],
      },
      {
        title: "Certified SAFe® 5 Practitioner",
        subtitle:
          "Scaled Agile Framework（SAFe）5プラクティショナー認定（Scaled Agile, Inc.）。",
        image: require("../assets/images/safeLogo.png"),
        imageAlt: "SAFe Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url: "",
          },
        ],
      },
    ],
    display: true,
  },

  talkSection: {
    section: "プレゼンテーション",
    title: emoji("プレゼンテーション 🧑‍🏫"),
    subtitle: emoji(
      "AIとディープラーニングの仕事についてのパワーポイントを作成し、講演するのが大好きです。"
    ),

    talks: [
      {
        title: "GANs: Generative Adversarial Networks",
        subtitle:
          "生成対立ネットワークに関するセミナー、その応用と制限について。",
        slides_url: require("../assets/pdf/Seminario GANs.pdf"),
      },
      {
        title: "GANs: Advanced GAN Architectures",
        subtitle:
          "StyleGAN、CycleGANなどのより高度な生成対立ネットワークアーキテクチャに関するセミナー。",
        slides_url: require("../assets/pdf/Arquitecturas_GAN_Avanzadas.pdf"),
      },
      {
        title: "Towards Stable Diffusion",
        subtitle: "安定拡散についてのセミナー、基本から始める。",
        slides_url: require("../assets/pdf/Desde las bases hasta Stable Diffusion.pdf"),
      },
      {
        title: "Expanding Stable Diffusion",
        subtitle:
          "安定拡散の能力を再トレーニングおよび拡張する方法についてのセミナー。",
        slides_url: require("../assets/pdf/Expandiendo Stable Diffusion.pdf"),
      },
    ],
    display: true,
  },

  resumeSection: {
    section: "履歴書と職務経歴書",
    title: "履歴書と職務経歴書",
    buttonText: "履歴書をダウンロード",
    shokumukeiText: "職務経歴書をダウンロード",
    subtitle: "お気軽に履歴書をダウンロードしてください",
    display: true,
  },

  contactInfo: {
    section: "連絡先",
    title: emoji("連絡先 📬"),
    buttonText: "連絡する",
    subtitle:
      "新しい挑戦と機会を常に探しています。お気軽にお問い合わせください。",
    number: "+81-080-1360-8103",
    email_address: "adrian.maiza@gmail.com",
    display: true,
  },

  isHireable: true,

  footer: {
    display: true,
    credit: emoji("マイザ・アドリアン 💜 によって作成されました"),
  },
};

export { jp };
